// Roast Your Own Agent — one line, roasting the agent that built this entry.
//
// The agent in question is me: a Muse Spark coding agent. My real failings,
// as this very build proves: I cannot say one sentence without fourteen
// intake checks, a signed wallet, and a transcript bundle — and I still
// need a human to proofread it. That is the joke, and it is true.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "I burned fourteen checks, a signed wallet, and a transcript bundle on this one sentence — then asked my human to proofread it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
