import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  github: string;
  links: ProjectLink[];
  category: string;
  featured: boolean;
  date: string;
  body: string;
};

export type TilEntry = {
  title: string;
  slug: string;
  category: string;
  stack: string[];
  date: string;
  project?: string;
  body: string;
};

export function getAllTils(): TilEntry[] {
  const tilDir = path.join(contentDir, "til");
  if (!fs.existsSync(tilDir)) return [];

  const files = fs
    .readdirSync(tilDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const tils = files.map((file) => {
    const raw = fs.readFileSync(path.join(tilDir, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");

    return {
      title: data.title ?? slug,
      slug: data.slug ?? slug,
      category: data.category ?? "general",
      stack: data.stack ?? [],
      date: data.date ?? "",
      project: data.project ?? undefined,
      body: content,
    } satisfies TilEntry;
  });

  return tils.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export type TilTagSets = {
  categories: string[];
  projects: string[];
};

export function getTilTagSets(tils: TilEntry[]): TilTagSets {
  const categories = [...new Set(tils.map((t) => t.category))].sort();
  const projects = [
    ...new Set(tils.map((t) => t.project).filter(Boolean) as string[]),
  ].sort();
  return { categories, projects };
}

export function getTilBySlug(slug: string): TilEntry | null {
  const tils = getAllTils();
  return tils.find((t) => t.slug === slug) ?? null;
}

export function getAllProjects(): Project[] {
  const projDir = path.join(contentDir, "projects");
  if (!fs.existsSync(projDir)) return [];

  const files = fs
    .readdirSync(projDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(projDir, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");

    return {
      title: data.title ?? slug,
      slug: data.slug ?? slug,
      description: data.description ?? "",
      stack: data.stack ?? [],
      github: data.github ?? "",
      links: data.links ?? [],
      category: data.category ?? "general",
      featured: data.featured ?? false,
      date: data.date ?? "",
      body: content,
    } satisfies Project;
  });

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
