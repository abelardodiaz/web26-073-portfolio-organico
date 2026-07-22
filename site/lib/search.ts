import { getAllProjects, getAllTils, getAllBlogPosts } from "./content";
import { cvData } from "./cv-data";
import { staticPages } from "./static-pages";
import { normalizeForSearch } from "./normalize";

export type SearchItem = {
  title: string;
  slug: string;
  type: "project" | "til" | "blog" | "page";
  href: string;
  category: string;
  stack: string[];
  excerpt: string;
  /** Texto completo normalizado (solo para busqueda, no para mostrar). */
  body: string;
};

const BODY_LIMIT = 4000;

function toBody(limit: number, ...parts: string[]): string {
  return normalizeForSearch(
    parts
      .join(" ")
      .replace(/```[\s\S]*?```/g, " ") // fuera code fences (ruido y peso)
      .replace(/\s+/g, " ")
      .trim()
  ).slice(0, limit);
}

function cvSearchItems(): SearchItem[] {
  return (["es", "en"] as const).map((locale) => {
    const cv = cvData[locale];
    const projects = cv.projects
      .map((p) => `${p.name} ${p.note ?? ""} ${p.description} ${p.chips.join(" ")}`)
      .join(" ");
    const jobs = cv.jobs
      .map((j) => `${j.role} ${j.org} ${j.summary} ${(j.bullets ?? []).join(" ")}`)
      .join(" ");
    const skills = cv.skills.map((s) => `${s.category} ${s.keywords}`).join(" ");
    const certs = cv.certifications.map((c) => `${c.name} ${c.issuer}`).join(" ");
    return {
      title: locale === "es" ? "CV - Abelardo Diaz" : "CV (English)",
      slug: locale === "es" ? "cv" : "cv-en",
      type: "page" as const,
      href: locale === "es" ? "/cv" : "/cv/en",
      category: "cv",
      stack: ["curriculum", "pdf"],
      excerpt:
        locale === "es"
          ? "CV completo: proyectos, experiencia, skills y certificaciones."
          : "Full CV: projects, experience, skills, and certifications.",
      // skills y certs primero: son lo mas buscado y no deben caer en el truncado
      body: toBody(12000, cv.title, cv.summary, skills, certs, cv.education, cv.languagesLine, jobs, projects),
    };
  });
}

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
      body: toBody(BODY_LIMIT, p.description ?? "", p.body),
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
      body: toBody(BODY_LIMIT, t.body),
    })
  );

  const blog = getAllBlogPosts().map(
    (p): SearchItem => ({
      title: p.title,
      slug: p.slug,
      type: "blog",
      href: `/blog/${p.slug}`,
      category: "blog",
      stack: p.tags,
      excerpt: p.summary || p.body.slice(0, 120).replace(/\n/g, " "),
      body: toBody(BODY_LIMIT, p.summary ?? "", p.body),
    })
  );

  const pages = staticPages
    .filter((sp) => sp.href !== "/cv") // el CV se indexa aparte desde cv-data
    .map(
      (sp): SearchItem => ({
        title: sp.title,
        slug: sp.href.replaceAll("/", "") || "home",
        type: "page",
        href: sp.href,
        category: "pagina",
        stack: sp.stack,
        excerpt: sp.excerpt,
        body: toBody(BODY_LIMIT, sp.title, sp.excerpt, sp.body),
      })
    );

  return [...projects, ...tils, ...blog, ...pages, ...cvSearchItems()];
}

export function getPopularStacks(items: SearchItem[], limit = 12): string[] {
  const counts: Record<string, number> = {};
  for (const item of items) {
    if (item.type === "page") continue; // keywords de paginas no son stack real
    for (const s of item.stack) {
      counts[s] = (counts[s] ?? 0) + 1;
    }
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

export function getSearchCategories(items: SearchItem[]): string[] {
  return [...new Set(items.map((i) => i.category))].sort();
}

export function getSearchProjects(items: SearchItem[]): string[] {
  return [...new Set(items.filter((i) => i.type === "project").map((i) => i.title))].sort();
}
