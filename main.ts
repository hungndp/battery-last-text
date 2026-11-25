// The Battery's Last Text to Its Charger — make.fun bounty entry.
// Writes the single text message (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the long wait at 1%, then the
// reversal — the charger arrives too late, and the battery sets it free.
const SETUP =
  "You finally showed up. I waited all day at 1%, watching the sun go down through the window, holding on just for you — ";
const PUNCH =
  "and now you're here, and I'm already gone. Don't cry. Charge someone else.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 200

function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
