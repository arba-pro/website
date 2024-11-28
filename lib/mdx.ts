import Realisation from "@/types/realisation";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

function readFile(filePath: string): Realisation | null {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const slug = path.basename(filePath, path.extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as Realisation;
  } catch (error) {
    console.error(`Failed to read or parse the file at ${filePath}:`, error);
    return null;
  }
}

function getFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory at ${dir}:`, error);
    return [];
  }
}

export function getRealisations(): Realisation[] {
  const files = getFiles(path.join(process.cwd(), "content", "realisations"));
  return files
    .map((file) =>
      readFile(path.join(process.cwd(), "content", "realisations", file))
    )
    .filter(
      (realisation): realisation is Realisation =>
        realisation !== null && !realisation.hidden
    )
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}
