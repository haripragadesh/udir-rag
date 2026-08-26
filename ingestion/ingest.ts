import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8787';
const INGEST_SECRET = process.env.INGEST_SECRET || 'dev-secret-token';

interface Chunk {
  document_name: string;
  page_number: number;
  section_hierarchy: string;
  content: string;
  image_ids: string[];
  chunk_index: number;
}

// Parse markdown file into chunks
function parseMarkdown(filePath: string, docName: string): Chunk[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const chunks: Chunk[] = [];
  let currentPage = 1;
  let currentHeaders: string[] = [];
  let accumulatedLines: string[] = [];
  let chunkIndex = 0;

  // Max characters per chunk (approx 1000 chars or ~250 words)
  const MAX_CHUNK_LENGTH = 1200;

  function emitChunk() {
    const text = accumulatedLines.join('\n').trim();
    if (!text) return;

    // Skip Table of Contents pages to prevent keyword search pollution
    if (
      (docName === 'upi_udir' && currentPage >= 2 && currentPage <= 5) ||
      (docName === 'upi_osg' && currentPage >= 1 && currentPage <= 8)
    ) {
      accumulatedLines = [];
      return;
    }

    // Skip chunks that are predominantly image placeholders (image-only chunks)
    const imageTagCount = (text.match(/\[IMAGE_\d+\]/g) || []).length;
    const textWithoutImages = text.replace(/\[IMAGE_\d+\][^\n]*/g, '').trim();
    if (imageTagCount > 0 && textWithoutImages.length < 80) {
      accumulatedLines = [];
      return; // Skip image-only chunks
    }

    // Skip chunks that look like TOC entries (dotted lines: "Section ...... 22")
    const lines = text.split('\n').filter(l => l.trim());
    const dotLineCount = lines.filter(l => /\.{3,}\s*\d+/.test(l)).length;
    if (lines.length > 0 && dotLineCount / lines.length > 0.5) {
      accumulatedLines = [];
      return; // Skip TOC dot-leader pages
    }

    // Skip very short chunks (less than 80 chars of actual content)
    if (textWithoutImages.length < 80) {
      accumulatedLines = [];
      return;
    }

    // Find any image IDs in this text chunk (e.g. IMAGE_001, IMAGE_002)
    const imageIdRegex = /IMAGE_\d+/g;
    const matches = text.match(imageIdRegex) || [];
    const uniqueImageIds = Array.from(new Set(matches));

    const sectionPath = currentHeaders.length > 0 ? currentHeaders.join(' > ') : 'General';

    chunks.push({
      document_name: docName,
      page_number: currentPage,
      section_hierarchy: sectionPath,
      content: text,
      image_ids: uniqueImageIds,
      chunk_index: chunkIndex++,
    });

    accumulatedLines = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check for page marker, e.g. <!-- PAGE 1 -->
    const pageMatch = trimmed.match(/<!--\s*PAGE\s+(\d+)\s*-->/i) || trimmed.match(/^##\s*PAGE\s+(\d+)/i);
    if (pageMatch) {
      // Emit what we have before changing page
      if (accumulatedLines.length > 0) {
        emitChunk();
      }
      currentPage = parseInt(pageMatch[1], 10);
      continue;
    }

    // Check for headers (e.g. # Header 1, ## Header 2)
    const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const title = headerMatch[2].trim();

      // Emit accumulated lines before heading change
      if (accumulatedLines.length > 0) {
        emitChunk();
      }

      // Adjust header hierarchy based on heading level
      currentHeaders = currentHeaders.slice(0, level - 1);
      currentHeaders[level - 1] = title;
      // Remove trailing null/empty entries if any
      currentHeaders = currentHeaders.filter(Boolean);
      continue;
    }

    accumulatedLines.push(line);

    // If accumulated text is getting too large, emit chunk to keep them small and coherent
    const currentLength = accumulatedLines.join('\n').length;
    if (currentLength >= MAX_CHUNK_LENGTH) {
      emitChunk();
    }
  }

  // Emit any remaining lines
  if (accumulatedLines.length > 0) {
    emitChunk();
  }

  return chunks;
}

// Send a batch of chunks to the backend
async function sendBatch(batch: Chunk[], batchNum: number, totalBatches: number) {
  const url = `${BACKEND_URL}/api/ingest/batch`;
  console.log(`Sending batch ${batchNum}/${totalBatches} (${batch.length} chunks) to ${url}...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${INGEST_SECRET}`,
    },
    body: JSON.stringify({ chunks: batch }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to upload batch ${batchNum}: ${response.statusText} - ${text}`);
  }

  const result = await response.json();
  console.log(`Batch ${batchNum} uploaded successfully:`, result);
}

async function main() {
  try {
    const docsDir = path.join(__dirname, '../documents');
    const udirPath = path.join(docsDir, 'upi_udir.md');
    const osgPath = path.join(docsDir, 'upi_osg.md');

    if (!fs.existsSync(udirPath) || !fs.existsSync(osgPath)) {
      console.error('Error: Source documents upi_udir.md and upi_osg.md must exist in the documents/ folder.');
      process.exit(1);
    }

    console.log('Parsing Document A: UPI HELP – UDIR...');
    const udirChunks = parseMarkdown(udirPath, 'upi_udir');
    console.log(`Generated ${udirChunks.length} chunks from UPI HELP – UDIR.`);

    console.log('Parsing Document B: Operating and Settlement Guidelines...');
    const osgChunks = parseMarkdown(osgPath, 'upi_osg');
    console.log(`Generated ${osgChunks.length} chunks from UPI OSG.`);

    const allChunks = [...udirChunks, ...osgChunks];
    console.log(`Total chunks generated: ${allChunks.length}`);

    // Split all chunks into batches of 25
    const BATCH_SIZE = 25;
    const batches: Chunk[][] = [];
    for (let i = 0; i < allChunks.length; i += BATCH_SIZE) {
      batches.push(allChunks.slice(i, i + BATCH_SIZE));
    }

    console.log(`Split into ${batches.length} batches of size ${BATCH_SIZE}. Starting upload...`);

    // Reset database first (optional, backend can expose a reset endpoint or we let it append)
    // We will call a reset endpoint on the backend if reset requested
    const resetUrl = `${BACKEND_URL}/api/ingest/reset`;
    console.log(`Resetting database index at ${resetUrl}...`);
    const resetRes = await fetch(resetUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${INGEST_SECRET}`,
      }
    });
    if (!resetRes.ok) {
      console.warn('Warning: Reset index failed or was not implemented. Appending instead.');
    } else {
      console.log('Database index reset successfully.');
    }

    // Send batches sequentially
    for (let i = 0; i < batches.length; i++) {
      await sendBatch(batches[i], i + 1, batches.length);
    }

    console.log('Ingestion completed successfully!');
  } catch (error) {
    console.error('Ingestion failed with error:', error);
    process.exit(1);
  }
}

main();
