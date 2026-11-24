import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart speaker misunderstood play jazz as call Jeff. Jeff and I had a long talk. Jeff is nice. I still do not know who Jeff is.";

// Competition gate: entry.txt must be UTF-8 text of 1 to 400 characters.
const MAX_CHARS = 400;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
