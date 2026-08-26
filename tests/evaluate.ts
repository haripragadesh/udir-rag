import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8787';

interface EvalCase {
  question: string;
  expectedKeywords: string[];
  expectedDoc: 'both' | 'upi_udir' | 'upi_osg';
}

const EVALUATION_DATASET: EvalCase[] = [
  {
    question: "What are the reason codes for Debit Reversal Confirmation (DRC) when the remitter confirms it, and when it times out?",
    expectedKeywords: ["DRC", "102", "103", "104", "105"],
    expectedDoc: "upi_udir"
  },
  {
    question: "What are the timings for the 10 settlement cycles per day under the OSG guidelines?",
    expectedKeywords: ["Cycle", "cutover", "21:00", "00:00", "10th Cycle"],
    expectedDoc: "upi_osg"
  },
  {
    question: "What is the penalty for delayed status updates of TCC, RET, and DRC transactions?",
    expectedKeywords: ["compliance", "penalty", "25", "50", "100", "175"],
    expectedDoc: "upi_osg"
  },
  {
    question: "What is the Reason Code mapping for U008, U021, U022, and U023 complaints?",
    expectedKeywords: ["U008", "U021", "U022", "U023", "alternate means"],
    expectedDoc: "upi_udir"
  }
];

async function runEvaluation() {
  console.log("=========================================");
  console.log("    UDIR RAG RETRIEVAL EVALUATION SUITE  ");
  console.log("=========================================");
  
  let passedCount = 0;

  for (let i = 0; i < EVALUATION_DATASET.length; i++) {
    const testCase = EVALUATION_DATASET[i];
    console.log(`\nTest #${i + 1}: "${testCase.question}"`);
    console.log(`Expected keywords: ${testCase.expectedKeywords.join(', ')}`);
    console.log(`Target Manual: ${testCase.expectedDoc}`);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: testCase.question,
          history: [],
          document_filter: testCase.expectedDoc
        })
      });

      if (!res.ok) {
        throw new Error(`Failed chat request: ${res.statusText}`);
      }

      // Read stream to get sources metadata first
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let sources: any[] = [];
      let fullText = '';

      if (!reader) {
        console.log("❌ Failed: Stream reader not available");
        continue;
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';

        for (const event of events) {
          if (!event.trim()) continue;
          const lines = event.split('\n');
          let eventType = 'message';
          let dataStr = '';

          for (const line of lines) {
            if (line.startsWith('event:')) {
              eventType = line.slice(6).trim();
            } else if (line.startsWith('data:')) {
              dataStr = line.slice(5).trim();
            }
          }

          if (eventType === 'sources') {
            sources = JSON.parse(dataStr);
          } else if (eventType === 'message') {
            const parsed = JSON.parse(dataStr);
            fullText += parsed.text || '';
          }
        }
      }

      // Validate Sources
      console.log(`Retrieved ${sources.length} context chunks.`);
      
      // Check if keywords are in retrieved sources
      const matchesKeywords = testCase.expectedKeywords.filter(keyword => {
        const inSources = sources.some(s => s.content.toLowerCase().includes(keyword.toLowerCase()));
        return inSources;
      });

      const keywordCoverage = (matchesKeywords.length / testCase.expectedKeywords.length) * 100;
      console.log(`Keyword coverage in sources: ${keywordCoverage.toFixed(1)}% (${matchesKeywords.length}/${testCase.expectedKeywords.length})`);

      if (keywordCoverage >= 75) {
        console.log("✅ Retrieval precision: PASS");
        passedCount++;
      } else {
        console.log("❌ Retrieval precision: FAIL (Low keyword coverage in retrieved context)");
      }
    } catch (e: any) {
      console.log("❌ Failed due to error:", e.message);
    }
  }

  console.log("\n=========================================");
  console.log(`Evaluation finished: ${passedCount}/${EVALUATION_DATASET.length} tests passed.`);
  console.log("=========================================");

  if (passedCount === EVALUATION_DATASET.length) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runEvaluation();
