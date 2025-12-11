import path from "path";
import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getBlurDataFromURL(url: string) {
  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}

export async function getBlurDataFromPublic(relativePath: string) {
  // contoh relativePath: "/images/avatar.png"
  const filePath = path.join(process.cwd(), "public", relativePath);

  const file = await fs.readFile(filePath);

  const { base64 } = await getPlaiceholder(file);
  return base64;
}
