import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { getAllTils, getAllProjects } from "@/lib/content";

export default function Home() {
  const tils = getAllTils().slice(0, 5);
  const projects = getAllProjects().filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="flex flex-col gap-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Abelardo Diaz
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Full-Stack Developer &amp; AI Agent Architect. Patterns de produccion
          real en espanol para la comunidad dev LATAM.
        </p>
        <div className="flex gap-3">
          <ButtonLink href="/projects">Ver proyectos</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contacto
          </ButtonLink>
        </div>
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold">Repos Destacados</h2>
        {projects.length === 0 ? (
          <p className="text-muted-foreground">
            Proximamente: micro-repos con patterns extraidos de produccion real.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group rounded-lg border border-border p-5 transition-colors hover:bg-accent"
              >
                <h3 className="mb-1 font-semibold group-hover:underline">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
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
      </section>

      <section className="py-12">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">TILs Recientes</h2>
          {tils.length > 0 && (
            <Link
              href="/til"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Ver todos &rarr;
            </Link>
          )}
        </div>
        {tils.length === 0 ? (
          <p className="text-muted-foreground">
            Proximamente: micro-lecciones aprendidas en produccion.
          </p>
        ) : (
          <ul className="space-y-2">
            {tils.map((til) => (
              <li key={til.slug}>
                <Link
                  href={`/til/${til.slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-md px-3 py-2 transition-colors hover:bg-accent"
                >
                  <span className="font-medium group-hover:underline">
                    {til.title}
                  </span>
                  <span className="shrink-0 text-sm text-muted-foreground font-mono">
                    {til.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
