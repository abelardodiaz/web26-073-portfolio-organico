import { readFile } from "fs/promises";
import { join } from "path";

let cached: ArrayBuffer | null = null;

export async function loadInterSemiBold(): Promise<ArrayBuffer> {
  if (cached) return cached;
  const buf = await readFile(
    join(process.cwd(), "assets", "fonts", "Inter-SemiBold.ttf")
  );
  cached = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  return cached;
}
