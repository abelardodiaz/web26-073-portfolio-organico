import Link from "next/link";
import type { Project } from "@/lib/content";

type Props = {
  projects: Project[];
  categories: string[];
  activeCategory?: string;
};

function renderCategoryTag(
  cat: string,
  isTerminal: boolean,
  activeCategory?: string
) {
  const isActive = activeCategory === cat;

  const baseClass = isTerminal
    ? "rounded px-2 py-0.5 font-mono text-[11px] transition-colors"
    : "rounded-full px-3 py-1 text-xs font-medium transition-colors";

  const activeClass = "bg-primary/15 text-primary border border-primary/30";
  const inactiveClass =
    "bg-secondary text-secondary-foreground border border-transparent hover:bg-primary/10 hover:text-primary";

  if (isActive) {
    return (
      <span key={cat} className={`${baseClass} ${activeClass}`}>
        {cat}
      </span>
    );
  }
  return (
    <Link
      key={cat}
      href={`/projects/categoria/${cat}`}
      className={`${baseClass} ${inactiveClass}`}
    >
      {cat}
    </Link>
  );
}

export function ProjectGrid({ projects, categories, activeCategory }: Props) {
  return (
    <>
      {/* ── Editorial tag bar ── */}
      <div className="hidden editorial:block mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
            Categoria
          </span>
          <Link
            href="/projects"
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-secondary text-secondary-foreground border border-transparent hover:bg-primary/10 hover:text-primary"
            }`}
          >
            Todos
          </Link>
          {categories.map((cat) => renderCategoryTag(cat, false, activeCategory))}
        </div>
      </div>

      {/* ── Terminal tag bar ── */}
      <div className="hidden terminal:block mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
            cat:
          </span>
          <Link
            href="/projects"
            className={`rounded px-2 py-0.5 font-mono text-[11px] transition-colors ${
              !activeCategory
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-secondary text-secondary-foreground border border-transparent hover:bg-primary/10 hover:text-primary"
            }`}
          >
            *
          </Link>
          {categories.map((cat) => renderCategoryTag(cat, true, activeCategory))}
        </div>
      </div>

      {projects.length === 0 ? (
        <p className="text-muted-foreground">
          No hay proyectos en esta categoria.
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
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase ${project.github ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}>
                    {project.github ? "Open Source" : "Repo Privado"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
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
                  <span className="shrink-0 font-mono text-xs text-[var(--fg-subtle)]">
                    {project.date}
                  </span>
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
                  <p className="mb-2 text-[13px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-2">
                    <span className={`inline-block rounded px-2 py-0.5 font-mono text-[9px] font-medium tracking-wide uppercase ${project.github ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}>
                      {project.github ? "open-source" : "private"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
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
                    <span className="shrink-0 font-mono text-[11px] text-[var(--fg-subtle)]">
                      {project.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
