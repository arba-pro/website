import Realisation from "@/types/realisation";
import Design from "@/types/design";
import fs from "fs";
import path from "path";

import matter from "gray-matter";

function readFile<T extends { slug: string }>(filePath: string): T | null {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const slug = path.basename(filePath, path.extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as unknown as T;
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
      readFile<Realisation>(
        path.join(process.cwd(), "content", "realisations", file)
      )
    )
    .filter(
      (realisation): realisation is Realisation =>
        realisation !== null && !realisation.hidden
    )
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export function getDesigns(): Design[] {
  const files = getFiles(path.join(process.cwd(), "content", "design"));
  return files
    .map((file) =>
      readFile<Design>(path.join(process.cwd(), "content", "design", file))
    )
    .filter((design): design is Design => design !== null && !design.hidden)
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export function getRealisation(slug: string): Realisation | null {
  try {
    return readFile<Realisation>(
      path.join(process.cwd(), "content", "realisations", `${slug}.mdx`)
    );
  } catch (error) {
    console.error(`Failed to get realisation with slug ${slug}:`, error);
    return null;
  }
}

export async function getRealisationOrThrow(
  slug: string
): Promise<Realisation> {
  const realisation = await getRealisation(slug);
  if (!realisation) throw new Error(`Realisation not found: ${slug}`);
  return realisation;
}
