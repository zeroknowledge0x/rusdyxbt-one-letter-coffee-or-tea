// One Letter: Coffee or Tea — a single-letter answer.
// The judge reads one bare letter and picks the choice of coffee or tea that
// feels most vivid, funnier or truer. "A" stands for coffee.
// The entry is exactly one character and nothing else: no word, no gloss, no punctuation.
// A is the house's letter for coffee; the verdict turns on the choice alone.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exactly one character: a trailing newline would make the 1-character gate fail.
writeFileSync(`${outDir}/entry.txt`, "A", "utf8");
