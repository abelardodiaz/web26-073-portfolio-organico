import type { MetadataRoute } from "next";
import {
  getAllProjects,
  getAllProjectCategories,
  getAllTils,
  getAllTilProjects,
} from "@/lib/content";

const BASE_URL = "https://abelardodiaz.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/til`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/diagnostico-ia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/openclaw-slp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const projects = getAllProjects().map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tils = getAllTils().map((t) => ({
    url: `${BASE_URL}/til/${t.slug}`,
    lastModified: new Date(t.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectCategories = getAllProjectCategories().map((cat) => ({
    url: `${BASE_URL}/projects/categoria/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const tilProjects = getAllTilProjects().map((proj) => ({
    url: `${BASE_URL}/til/proyecto/${proj}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projects, ...projectCategories, ...tils, ...tilProjects];
}
