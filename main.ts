import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(target, { recursive: true });
const bytes = readFileSync(new URL("./entry.png", import.meta.url));
writeFileSync(`${target}/entry.png`, bytes);
