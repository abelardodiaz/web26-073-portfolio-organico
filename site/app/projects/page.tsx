import type { Metadata } from "next";
import { getAllProjects, getAllProjectCategories } from "@/lib/content";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Micro-repos con patterns de produccion real.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getAllProjectCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial header */}
      <div className="hidden editorial:block mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Proyectos</h1>
        <p className="text-muted-foreground">
          Micro-repos con patterns extraidos de produccion real.
        </p>
      </div>

      {/* Terminal header */}
      <div className="hidden terminal:block mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // proyectos
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-sm text-muted-foreground">
          Micro-repos con patterns extraidos de produccion real.
        </p>
      </div>

      <ProjectGrid projects={projects} categories={categories} />
    </div>
  );
}
