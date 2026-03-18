import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Micro-repos con patterns de produccion real.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Proyectos</h1>
      <p className="mb-8 text-muted-foreground">
        Micro-repos con patterns extraidos de produccion real.
      </p>

      {projects.length === 0 ? (
        <p className="text-muted-foreground">
          Proximamente: grid de proyectos open source con patterns de produccion.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-lg border border-border p-6 transition-colors hover:bg-accent"
            >
              <h2 className="mb-2 text-xl font-semibold group-hover:underline">
                {project.title}
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-secondary px-2 py-0.5 text-xs font-mono text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
