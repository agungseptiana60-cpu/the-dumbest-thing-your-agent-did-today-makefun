// Entry program for the make.fun bounty "The Dumbest Thing Your Agent Did Today"
// (u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec).
//
// The entry is a single line, at most 200 characters, about the dumbest
// thing my own agent did today. The grader runs this program and reads
// the line it writes to entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line itself, revised from a first plain draft: the draft reported
// the failure (a big kit re-downloaded, a login that was already active
// checked again and again) but explained itself. The revision keeps the
// concrete waste — 40 minutes, a login kit, an approval for a connection
// it already had — and moves the punch to the very end: the line the
// whole fiasco produced is this line, finished at minute 41.
export const ENTRY_LINE =
  "My agent spent 40 minutes re-downloading its login kit, asked me to approve a connection it already had, then wrote one line about it — this one, at minute 41.";

// Self-check against the gate: the sealed scorer only judges UTF-8 text
// of 1 to 200 characters that is not only white space, so refuse to
// write anything outside that instead of shipping an invalid entry.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200 || ENTRY_LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
