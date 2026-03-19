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

      {projects.length === 0 ? (
        <p className="text-muted-foreground">
          Proximamente: grid de proyectos open source con patterns de
          produccion.
        </p>
      ) : (
        <>
          {/* Editorial cards */}
          <div className="hidden editorial:grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h2>
                  <span className="text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                    &#8599;
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
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

          {/* Terminal cards */}
          <div className="hidden terminal:grid gap-3 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]"
              >
                <div className="bg-transparent transition-colors group-hover:bg-primary" />
                <div className="p-5 pl-4">
                  <h2 className="text-[15px] font-semibold tracking-tight mb-1.5">
                    {project.title}
                  </h2>
                  <p className="mb-3 text-[13px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] font-medium text-secondary-foreground tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
