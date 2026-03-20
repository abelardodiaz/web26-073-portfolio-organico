import { getAllProjects, getAllTils } from "./content";

export type SearchItem = {
  title: string;
  slug: string;
  type: "project" | "til";
  href: string;
  category: string;
  stack: string[];
  excerpt: string;
};

export function getSearchIndex(): SearchItem[] {
  const projects = getAllProjects().map(
    (p): SearchItem => ({
      title: p.title,
      slug: p.slug,
      type: "project",
      href: `/projects/${p.slug}`,
      category: p.category,
      stack: p.stack,
      excerpt: p.description || p.body.slice(0, 120).replace(/\n/g, " "),
    })
  );

  const tils = getAllTils().map(
    (t): SearchItem => ({
      title: t.title,
      slug: t.slug,
      type: "til",
      href: `/til/${t.slug}`,
      category: t.category,
      stack: t.stack,
      excerpt: t.body.slice(0, 120).replace(/\n/g, " "),
    })
  );

  return [...projects, ...tils];
}
