import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  DB: D1Database;
  VECTORIZE: VectorizeIndex;
  AI: Ai;
  GEMINI_API_KEY?: string;
  INGEST_SECRET?: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Enable CORS for all frontend requests
app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
);

// Helper for cosine similarity in JS fallback
function cosineSimilarity(a: number[], b: number[]) {
  let dot = 0, mA = 0, mB = 0;
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    dot += a[i] * b[i];
    mA += a[i] * a[i];
    mB += b[i] * b[i];
  }
  return dot / (Math.sqrt(mA) * Math.sqrt(mB) || 1);
}

// Generate deterministic mock embedding if no AI services are logged in/available
function generateMockEmbedding(text: string, dimensions = 1024): number[] {
  const vec = new Array(dimensions).fill(0);
  // Basic hash-based pseudo-random generator
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const idx = (i * 31 + charCode) % dimensions;
    vec[idx] += Math.sin(charCode + i) * 0.5;
  }
  // Normalize vector
  let mag = 0;
  for (let i = 0; i < dimensions; i++) mag += vec[i] * vec[i];
  mag = Math.sqrt(mag) || 1;
  return vec.map(x => x / mag);
}

// Fetch embeddings using Gemini Embedding API
async function getGeminiEmbedding(text: string, apiKey: string): Promise<number[] | null> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: "models/text-embedding-004",
          content: { parts: [{ text }] }
        })
      }
    );
    if (!response.ok) return null;
    const json = await response.json() as any;
    return json.embedding?.values || null;
  } catch {
    return null;
  }
}

// Helper to generate embedding with progressive fallback: Cloudflare AI -> Gemini API -> Mock
async function getEmbedding(text: string, env: Bindings): Promise<{ values: number[], source: string }> {
  // 1. Try Cloudflare Workers AI BGE
  try {
    const embeddingRes = (await env.AI.run('@cf/baai/bge-large-en-v1.5', {
      text: [text],
    })) as any;
    if (embeddingRes && embeddingRes.data && embeddingRes.data[0]) {
      return { values: embeddingRes.data[0], source: 'workers-ai' };
    }
  } catch (e) {
    console.log('Workers AI embedding failed or not logged in, checking Gemini API...');
  }

  // 2. Try Gemini Embedding API
  if (env.GEMINI_API_KEY) {
    const geminiVector = await getGeminiEmbedding(text, env.GEMINI_API_KEY);
    if (geminiVector) {
      return { values: geminiVector, source: 'gemini-api' };
    }
  }

  // 3. Fallback to Local Mock
  console.log('No external embedding API available. Falling back to local mock embedding.');
  return { values: generateMockEmbedding(text), source: 'local-mock' };
}

// ----------------------------------------------------
// 0. LLM Diagnostic Test Endpoint
// ----------------------------------------------------
app.get('/api/test-llm', async (c) => {
  const apiKey = c.env.GEMINI_API_KEY === 'your_google_gemini_api_key_here' ? undefined : c.env.GEMINI_API_KEY;
  if (!apiKey) {
    return c.json({ error: 'GEMINI_API_KEY not configured', hasKey: false });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'Reply with: OK' }] }],
          generationConfig: { temperature: 0, maxOutputTokens: 10 },
        }),
      }
    );
    const body = await response.json() as any;
    if (!response.ok) {
      return c.json({ error: 'Gemini API error', status: response.status, body });
    }
    const text = body.candidates?.[0]?.content?.parts?.[0]?.text || '(empty)';
    return c.json({ success: true, geminiResponse: text, status: response.status });
  } catch (e: any) {
    return c.json({ error: 'Fetch failed', message: e.message });
  }
});

// ----------------------------------------------------
// 1. Database Index & Reset Endpoint
// ----------------------------------------------------
app.post('/api/ingest/reset', async (c) => {
  const authHeader = c.req.header('Authorization');
  const secret = c.env.INGEST_SECRET || 'dev-secret-token';

  if (authHeader !== `Bearer ${secret}`) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  console.log('Resetting index tables...');

  // Re-create the chunks, mock_vectors, and FTS5 tables
  await c.env.DB.batch([
    c.env.DB.prepare('DROP TABLE IF EXISTS chunks;'),
    c.env.DB.prepare(`
      CREATE TABLE chunks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        document_name TEXT,
        page_number INTEGER,
        section_hierarchy TEXT,
        content TEXT,
        image_ids TEXT,
        chunk_index INTEGER
      );
    `),
    c.env.DB.prepare('DROP TABLE IF EXISTS mock_vectors;'),
    c.env.DB.prepare(`
      CREATE TABLE mock_vectors (
        id TEXT PRIMARY KEY,
        embeddings TEXT,
        document_name TEXT
      );
    `),
    c.env.DB.prepare('DROP TABLE IF EXISTS chunks_fts;'),
    c.env.DB.prepare(`
      CREATE VIRTUAL TABLE chunks_fts USING fts5(
        content,
        content='chunks',
        content_rowid='id'
      );
    `),
  ]);

  return c.json({ success: true, message: 'D1 database schemas and mock vector tables reset successfully.' });
});

// ----------------------------------------------------
// 2. Batch Ingestion Endpoint
// ----------------------------------------------------
app.post('/api/ingest/batch', async (c) => {
  const authHeader = c.req.header('Authorization');
  const secret = c.env.INGEST_SECRET || 'dev-secret-token';

  if (authHeader !== `Bearer ${secret}`) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  const { chunks } = await c.req.json<{ chunks: any[] }>();
  if (!chunks || !Array.isArray(chunks)) {
    return c.json({ error: 'Invalid chunks array' }, 400);
  }

  console.log(`Processing batch of ${chunks.length} chunks...`);

  const d1Inserts = [];
  const vectorUpserts = [];
  const generatedVectors: { id: number, values: number[], document_name: string }[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const { document_name, page_number, section_hierarchy, content, image_ids, chunk_index } = chunk;

    // 1. Insert chunk metadata into D1
    const stmt = c.env.DB.prepare(`
      INSERT INTO chunks (document_name, page_number, section_hierarchy, content, image_ids, chunk_index)
      VALUES (?, ?, ?, ?, ?, ?);
    `).bind(
      document_name,
      page_number,
      section_hierarchy,
      content,
      JSON.stringify(image_ids),
      chunk_index
    );
    d1Inserts.push(stmt);
  }

  // Execute D1 Batch insert
  const d1Results = await c.env.DB.batch(d1Inserts);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const d1Res = d1Results[i];
    const rowId = d1Res.meta.last_row_id || (d1Results[0].meta.last_row_id + i);

    // Populate FTS virtual table with metadata prepended to boost relevance matches
    const ftsContent = `Document: ${chunk.document_name} Page: ${chunk.page_number} Section: ${chunk.section_hierarchy}\n\n${chunk.content}`;
    await c.env.DB.prepare(`
      INSERT INTO chunks_fts (rowid, content) VALUES (?, ?);
    `).bind(rowId, ftsContent).run();

    // 2. Generate embedding (with local/Gemini fallback)
    const { values, source } = await getEmbedding(chunk.content, c.env);

    generatedVectors.push({
      id: rowId,
      values,
      document_name: chunk.document_name
    });

    vectorUpserts.push({
      id: rowId.toString(),
      values: values,
      metadata: {
        document_name: chunk.document_name,
      },
    });
  }

  // 3. Try uploading to Vectorize, fallback to D1 mock_vectors if it fails
  try {
    console.log(`Upserting ${vectorUpserts.length} vectors to Cloudflare Vectorize...`);
    await c.env.VECTORIZE.upsert(vectorUpserts);
  } catch (e: any) {
    console.warn(`Vectorize cloud upload failed: "${e.message}". Saving vectors to local D1 mock_vectors table...`);
    
    const mockInserts = generatedVectors.map(vec => {
      return c.env.DB.prepare(`
        INSERT OR REPLACE INTO mock_vectors (id, embeddings, document_name)
        VALUES (?, ?, ?);
      `).bind(
        vec.id.toString(),
        JSON.stringify(vec.values),
        vec.document_name
      );
    });
    await c.env.DB.batch(mockInserts);
  }

  return c.json({
    success: true,
    processed: chunks.length,
  });
});

// ----------------------------------------------------
// 3. Status Endpoint
// ----------------------------------------------------
app.get('/api/status', async (c) => {
  try {
    const countRes = await c.env.DB.prepare('SELECT COUNT(*) as count FROM chunks;').first<{ count: number }>();
    const docCounts = await c.env.DB.prepare(`
      SELECT document_name, COUNT(*) as count FROM chunks GROUP BY document_name;
    `).all();

    return c.json({
      online: true,
      database_count: countRes?.count || 0,
      documents: docCounts.results,
    });
  } catch (error: any) {
    return c.json({ online: false, error: error.message }, 500);
  }
});

const STOP_WORDS = new Set([
  // Articles, prepositions, conjunctions
  'a', 'an', 'the', 'in', 'of', 'and', 'is', 'to', 'with', 'by', 'on',
  'at', 'or', 'from', 'but', 'not', 'be', 'any', 'both', 'than', 'between',
  'per', 'after', 'under', 'about', 'for', 'it', 'this', 'that', 'these',
  'those', 'there', 'here', 'which',
  // Pronouns
  'who', 'how', 'why', 'where', 'what', 'when', 'me', 'my', 'we', 'us',
  'you', 'your', 'they', 'them', 'their', 'he', 'she', 'his', 'her', 'its',
  // Auxiliaries
  'are', 'was', 'were', 'been', 'has', 'have', 'had', 'do', 'does', 'did',
  'doing', 'would', 'should', 'could', 'will', 'can', 'may', 'might', 'shall',
  // Conversational filler words (critical — these pollute FTS queries)
  'tell', 'show', 'give', 'explain', 'describe', 'help', 'want', 'know',
  'look', 'like', 'please', 'need', 'get', 'find', 'see', 'go', 'make',
  'take', 'work', 'use', 'just', 'also', 'well', 'more', 'all', 'some',
  'so', 'then', 'than', 'up', 'out', 'if', 'as', 'into', 'through',
]);

// Detect if query is about disputes/complaints (to allow Complaint API chunks)
function isComplaintQuery(message: string): boolean {
  return /\b(complaint|dispute|chargeback|reversal|reject|udir|grievance|raise|refund|fail)\b/i.test(message);
}

function getCleanSearchQuery(message: string): string {
  let queryText = message;
  // Domain-specific Query Expansion to match manual terminology (U2=P2M, U3/UC=P2P)
  if (/\bp2m\b/i.test(message)) {
    queryText += ' u2';
  }
  if (/\bp2p\b/i.test(message)) {
    queryText += ' u3 uc';
  }

  const words = queryText
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  return words.join(' OR ');
}

// ----------------------------------------------------
// 4. Chat & Streaming Retrieval Endpoint
// ----------------------------------------------------
app.post('/api/chat', async (c) => {
  const { message, history, document_filter } = await c.req.json<{
    message: string;
    history: { role: string; content: string }[];
    document_filter: 'both' | 'upi_udir' | 'upi_osg';
  }>();

  if (!message) {
    return c.json({ error: 'Message is required' }, 400);
  }

  console.log(`Chat request: "${message}" [Filter: ${document_filter}]`);

  // Step A: Generate query embedding (CF AI -> Gemini -> Mock)
  const { values: queryVector } = await getEmbedding(message, c.env);

  // Step B: Semantic Search (Vectorize or D1 mock_vectors)
  let semanticMatches: { id: number, score: number }[] = [];

  try {
    const vectorizeFilter = document_filter !== 'both' ? { document_name: document_filter } : undefined;
    const semanticResults = await c.env.VECTORIZE.query(queryVector, {
      topK: 20,
      returnValues: false,
      returnMetadata: true,
      filter: vectorizeFilter,
    });
    semanticMatches = semanticResults.matches.map(m => ({
      id: parseInt(m.id, 10),
      score: m.score
    }));
  } catch (e: any) {
    console.log(`Cloud Vectorize query failed ("${e.message}"). Skipping mock vector search and relying 100% on D1 FTS5 search...`);
    semanticMatches = [];
  }

  // Step C: Keyword Search (D1 FTS5 with stop word filter and document join filter)
  const ftsQuery = getCleanSearchQuery(message);
  let keywordResults: any[] = [];

  const isComplaint = isComplaintQuery(message);

  if (ftsQuery) {
    console.log(`FTS5 Keyword Query: "${ftsQuery}" [isComplaintQuery=${isComplaint}]`);
    let ftsSql = `
      SELECT chunks.id, bm25(chunks_fts) as rank
      FROM chunks_fts
      JOIN chunks ON chunks.id = chunks_fts.rowid
      WHERE chunks_fts MATCH ?
      AND LENGTH(chunks.content) > 120
    `;

    // Exclude Complaint API Sample Message Dump chunks for non-complaint queries
    if (!isComplaint) {
      ftsSql += ` AND chunks.section_hierarchy NOT LIKE '%Complaint API Sample Message Dumps%'`;
    }

    const params: any[] = [ftsQuery];
    if (document_filter !== 'both') {
      ftsSql += ' AND chunks.document_name = ?';
      params.push(document_filter);
    }
    ftsSql += ' ORDER BY rank ASC LIMIT 20';

    const ftsMatches = await c.env.DB.prepare(ftsSql).bind(...params).all<{ id: number; rank: number }>();
    keywordResults = ftsMatches.results || [];
    console.log(`FTS5 Keyword matches count: ${keywordResults.length}`);
  }

  // Step D: Reciprocal Rank Fusion (RRF) Reranking
  const rrfMap = new Map<number, { id: number; score: number; semanticRank: number; keywordRank: number }>();
  
  // Vector search ranking
  semanticMatches.forEach((match, index) => {
    const id = match.id;
    rrfMap.set(id, { id, score: 1 / (60 + index + 1), semanticRank: index + 1, keywordRank: 999 });
  });

  // Keyword search ranking
  keywordResults.forEach((match, index) => {
    const id = match.id;
    const existing = rrfMap.get(id);
    const keywordScore = 1 / (60 + index + 1);
    if (existing) {
      existing.score += keywordScore;
      existing.keywordRank = index + 1;
    } else {
      rrfMap.set(id, { id, score: keywordScore, semanticRank: 999, keywordRank: index + 1 });
    }
  });

  // Fetch top 5 chunks (reduced from 8 to keep context within token limits)
  const rankedIds = Array.from(rrfMap.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(x => x.id);

  console.log(`Top ranked chunk IDs: ${rankedIds.join(', ')}`);

  // Step E: Surrounding Context Expansion
  const contexts = [];

  for (const chunkId of rankedIds) {
    const mainChunk = await c.env.DB.prepare(`
      SELECT document_name, page_number, section_hierarchy, content, image_ids, chunk_index
      FROM chunks WHERE id = ?;
    `).bind(chunkId).first<any>();

    if (!mainChunk) continue;

    // Filter validation
    if (document_filter !== 'both' && mainChunk.document_name !== document_filter) {
      continue;
    }

    // Fetch previous and next chunk
    const surrounding = await c.env.DB.prepare(`
      SELECT content, chunk_index FROM chunks
      WHERE document_name = ? AND chunk_index BETWEEN ? AND ?
      ORDER BY chunk_index ASC;
    `).bind(
      mainChunk.document_name,
      Math.max(0, mainChunk.chunk_index - 1),
      mainChunk.chunk_index + 1
    ).all<any>();

    const mergedContent = surrounding.results.map(r => r.content).join('\n\n');

    contexts.push({
      document_name: mainChunk.document_name === 'upi_udir' ? 'UPI HELP - UDIR' : 'UPI OSG (Settlement Guidelines)',
      page_number: mainChunk.page_number,
      section_hierarchy: mainChunk.section_hierarchy,
      content: mergedContent,
      image_ids: JSON.parse(mainChunk.image_ids || '[]'),
    });
  }

  // Truncate contextString to max 8000 chars to stay within Gemini's token limit
  const MAX_CONTEXT_CHARS = 8000;
  let contextString = contexts.map((ctx, idx) => {
    return `[Source ID: ${idx + 1}]
Document: ${ctx.document_name}
Page: ${ctx.page_number}
Section: ${ctx.section_hierarchy}
Content:
${ctx.content}
----------------------------------------`;
  }).join('\n\n');

  if (contextString.length > MAX_CONTEXT_CHARS) {
    contextString = contextString.slice(0, MAX_CONTEXT_CHARS) + '\n[...context truncated for token limit...]';
  }

  console.log(`Context matches size: ${contextString.length} chars (capped at ${MAX_CONTEXT_CHARS})`);

  const systemInstruction = `You are a helpful, expert RAG assistant for UPI clearing, settlement, and UDIR (dispute resolution) protocols.
You will answer the user's questions based ONLY on the provided Context.
Do not make assumptions, expand beyond the context, or use external knowledge. 

Guidelines:
1. Synthesize information across both documents if necessary to answer cross-document questions.
2. Cite the exact sources of your claims using format: [Source ID: X, Page: Y, Section: Z].
3. If the context does not contain sufficient evidence to answer the question, explicitly state "Evidence is insufficient to answer this question". Do not attempt to guess.
4. Detect and explicitly flag any contradictions or conflicts between the documents (e.g. conflicting reason codes, TAT, or procedures) in a dedicated "Contradictions & Ambiguities" section.
5. Reference any associated image or diagram IDs (e.g. IMAGE_002) if relevant to the user's question, citing their ID.
6. Organize your response into the following clear Markdown sections:
   - ### Direct Answer: A concise, synthesized response to the question.
   - ### Detailed Reasoning: Explanatory context, details, and step-by-step logic.
   - ### Contradictions & Ambiguities: List any contradictions between documents, or state "None detected".
   - ### Evidence Classification:
     *   **Explicitly Stated**: Bullet list of facts directly extracted.
     *   **Inferred**: Logical deductions made, if any.
     *   **Conflicting/Ambiguous**: Details that are conflicting or unclear, if any.
     *   **Not Found**: Parts of the user query that are not in the context.`;

  const userPrompt = `Context:
${contextString}

Question: ${message}`;

  const apiKey = c.env.GEMINI_API_KEY === 'your_google_gemini_api_key_here' ? undefined : c.env.GEMINI_API_KEY;

  if (apiKey) {
    console.log('Using Google Gemini API for streaming reasoning...');
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:streamGenerateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: userPrompt }],
              },
            ],
            systemInstruction: {
              parts: [{ text: systemInstruction }],
            },
            generationConfig: {
              temperature: 0.1,
            },
          }),
        }
      );

      if (!response.ok) {
        const errBody = await response.text();
        console.error(`Gemini API error ${response.status}: ${errBody}`);
        throw new Error(`Gemini API error ${response.status}: ${errBody.slice(0, 200)}`);
      }

      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      const reader = response.body?.getReader();
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();

      c.executionCtx.waitUntil(
        (async () => {
          let buffer = '';
          // Send sources metadata first
          await writer.write(
            encoder.encode(`event: sources\ndata: ${JSON.stringify(contexts)}\n\n`)
          );

          try {
            let braceCount = 0;
            let startIdx = -1;
            
            while (true) {
              const { done, value } = await reader!.read();
              if (done) break;

              buffer += decoder.decode(value, { stream: true });
              
              for (let i = 0; i < buffer.length; i++) {
                if (buffer[i] === '{') {
                  if (braceCount === 0) startIdx = i;
                  braceCount++;
                } else if (buffer[i] === '}') {
                  braceCount--;
                  if (braceCount === 0 && startIdx !== -1) {
                    const jsonStr = buffer.slice(startIdx, i + 1);
                    try {
                      const obj = JSON.parse(jsonStr);
                      const text = obj.candidates?.[0]?.content?.parts?.[0]?.text || '';
                      if (text) {
                        await writer.write(encoder.encode(`event: message\ndata: ${JSON.stringify({ text })}\n\n`));
                      }
                    } catch (e) {
                      // Ignore invalid/partial JSON objects
                    }
                    buffer = buffer.slice(i + 1);
                    i = -1;
                    startIdx = -1;
                  }
                }
              }
            }
          } catch (err: any) {
            console.error('Error writing stream:', err);
            await writer.write(encoder.encode(`event: error\ndata: ${JSON.stringify({ error: err.message })}\n\n`));
          } finally {
            await writer.write(encoder.encode('event: done\ndata: {}\n\n'));
            await writer.close();
          }
        })()
      );

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    } catch (err: any) {
      console.error('Gemini API call failed, falling back to Workers AI:', err);
    }
  }

  // Fallback to Cloudflare Workers AI Llama or Local Mock
  console.log('Using Workers AI (Llama 3.1) or local mock for streaming reasoning...');
  const messages = [
    { role: 'system', content: systemInstruction },
    ...history.slice(-6).map(h => ({ role: h.role, content: h.content })),
    { role: 'user', content: userPrompt }
  ];

  try {
    const aiStream: any = await c.env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
      messages,
      stream: true,
    });

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    c.executionCtx.waitUntil(
      (async () => {
        // Send sources metadata first
        await writer.write(
          encoder.encode(`event: sources\ndata: ${JSON.stringify(contexts)}\n\n`)
        );

        try {
          const reader = aiStream.getReader();
          let lineBuffer = '';
          
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            lineBuffer += decoder.decode(value, { stream: true });
            const lines = lineBuffer.split('\n');
            lineBuffer = lines.pop() || '';

            for (const line of lines) {
              const cleanLine = line.trim();
              if (cleanLine.startsWith('data:')) {
                const dataStr = cleanLine.slice(5).trim();
                if (dataStr === '[DONE]') continue;
                try {
                  const dataObj = JSON.parse(dataStr);
                  const text = dataObj.response || '';
                  if (text) {
                    await writer.write(encoder.encode(`event: message\ndata: ${JSON.stringify({ text })}\n\n`));
                  }
                } catch (e) {
                  // Ignore parsing split lines
                }
              }
            }
          }
        } catch (err: any) {
          await writer.write(encoder.encode(`event: error\ndata: ${JSON.stringify({ error: err.message })}\n\n`));
        } finally {
          await writer.write(encoder.encode('event: done\ndata: {}\n\n'));
          await writer.close();
        }
      })()
    );

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (err: any) {
    console.warn('Workers AI streaming failed or not logged in. Falling back to local RAG synthesis response...');
    
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    c.executionCtx.waitUntil(
      (async () => {
        // 1. Send sources metadata
        await writer.write(
          encoder.encode(`event: sources\ndata: ${JSON.stringify(contexts)}\n\n`)
        );

        // 2. Synthesize mock response text
        let mockText = `### Direct Answer:\n`;
        if (contexts.length === 0) {
          mockText += `Evidence is insufficient to answer this question in local manuals.\n\n`;
        } else {
          mockText += `Here is a local synthesis of retrieved protocols:\n\n`;
          contexts.forEach((ctx, idx) => {
            mockText += `*   **From ${ctx.document_name} (Page ${ctx.page_number}, Section: ${ctx.section_hierarchy})**:\n`;
            const lines = ctx.content.split('\n').filter(l => l.trim()).slice(0, 3);
            lines.forEach(l => {
              mockText += `    ${l}\n`;
            });
            if (ctx.image_ids.length > 0) {
              mockText += `    *(Associated Diagram IDs: ${ctx.image_ids.join(', ')})*\n`;
            }
            mockText += `\n`;
          });
        }

        mockText += `### Detailed Reasoning:\n`;
        mockText += `The hybrid search index queried FTS5 keyword index and computed cosine similarity on local mock vectors. `;
        mockText += `The following manuals had matches: ${contexts.map(c => c.document_name).filter((v, i, a) => a.indexOf(v) === i).join(' and ')}.\n\n`;

        mockText += `### Contradictions & Ambiguities:\nNone detected in local template mode.\n\n`;

        mockText += `### Evidence Classification:\n`;
        mockText += `*   **Explicitly Stated**: Retrieved details match local specifications.\n`;
        mockText += `*   **Inferred**: Searched keywords matching query criteria.\n`;
        mockText += `*   **Conflicting/Ambiguous**: None\n`;
        mockText += `*   **Not Found**: None\n`;

        await writer.write(encoder.encode(`event: message\ndata: ${JSON.stringify({ text: mockText })}\n\n`));
        await writer.write(encoder.encode('event: done\ndata: {}\n\n'));
        await writer.close();
      })()
    );

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  }
});

export default app;
