import { NextResponse } from "next/server";
import { getAllProjects, getAllTils } from "@/lib/content";

export const revalidate = 86400;

const SITE_URL = "https://abelardodiaz.dev";

type FeedItem = {
  type: "til" | "project";
  slug: string;
  title: string;
  date: string;
  category: string;
  stack: string[];
  project?: string;
  url: string;
  github_url?: string;
  description?: string;
};

export async function GET() {
  const tils = getAllTils().map<FeedItem>((t) => ({
    type: "til",
    slug: t.slug,
    title: t.title,
    date: t.date,
    category: t.category,
    stack: t.stack,
    project: t.project,
    url: `${SITE_URL}/til/${t.slug}`,
  }));

  const projects = getAllProjects().map<FeedItem>((p) => ({
    type: "project",
    slug: p.slug,
    title: p.title,
    date: p.date,
    category: p.category,
    stack: p.stack,
    url: `${SITE_URL}/projects/${p.slug}`,
    github_url: p.github || undefined,
    description: p.description,
  }));

  const items = [...tils, ...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return NextResponse.json(
    {
      generated_at: new Date().toISOString(),
      site_url: SITE_URL,
      items,
    },
    {
      headers: {
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
