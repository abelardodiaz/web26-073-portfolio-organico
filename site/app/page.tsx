import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { RotatingLabel } from "@/components/shared/RotatingLabel";
import { SocialProof } from "@/components/shared/SocialProof";
import { getAllTils, getAllProjects } from "@/lib/content";

export default function Home() {
  const tils = getAllTils().slice(0, 5);
  const projects = getAllProjects().filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* ── Hero (unificado) ── */}
      <section className="editorial:py-20 terminal:py-16 py-16">
        <RotatingLabel />

        <h1 className="mt-5 editorial:text-4xl editorial:sm:text-5xl editorial:tracking-tight editorial:leading-[1.15] terminal:text-3xl terminal:sm:text-[2.75rem] terminal:tracking-tighter terminal:leading-[1.2] font-bold">
          Multi-IA gateways,
          <br />
          construyo agentes que no duermen,
          <br />
          <span className="hidden editorial:inline text-primary">
            y zero downtime.
          </span>
          <span className="hidden terminal:inline">y zero downtime.</span>
        </h1>

        <p className="mt-4 max-w-xl editorial:text-lg terminal:text-base leading-relaxed text-muted-foreground">
          Escribo software que toma decisiones por si solo. Ayudo a que los
          agentes autonomos de IA hagan que tu trabajo sea facil.
        </p>

        {/* Stats (terminal only) */}
        <div className="hidden terminal:flex mt-6 gap-8">
          <div>
            <span className="block font-mono text-2xl font-bold text-primary leading-none">
              14
            </span>
            <span className="mt-1 block text-xs uppercase tracking-widest text-[var(--fg-subtle)]">
              Patterns
            </span>
          </div>
          <div>
            <span className="block font-mono text-2xl font-bold text-primary leading-none">
              7+
            </span>
            <span className="mt-1 block text-xs uppercase tracking-widest text-[var(--fg-subtle)]">
              AI Providers
            </span>
          </div>
          <div>
            <span className="block font-mono text-2xl font-bold text-primary leading-none">
              24/7
            </span>
            <span className="mt-1 block text-xs uppercase tracking-widest text-[var(--fg-subtle)]">
              Uptime
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex gap-3">
          <div className="hidden editorial:flex gap-3">
            <ButtonLink href="/projects">Ver proyectos</ButtonLink>
            <ButtonLink
              href="https://github.com/abelardodiaz"
              variant="outline"
            >
              GitHub
            </ButtonLink>
          </div>
          <div className="hidden terminal:flex gap-3">
            <ButtonLink href="/projects">git clone proyectos</ButtonLink>
            <ButtonLink href="/about" variant="outline">
              cat README.md
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Bridge line ── */}
      <p className="hidden editorial:block py-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Todo esto tambien lo pongo a trabajar para negocios locales. Si
        tienes una empresa en San Luis Potosi y quieres que la inteligencia
        artificial haga parte del trabajo por ti, esto es para ti:
      </p>
      <p className="hidden terminal:block py-4 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
        Todo esto tambien lo pongo a trabajar para negocios locales. Si
        tienes una empresa en San Luis Potosi y quieres que la inteligencia
        artificial haga parte del trabajo por ti, esto es para ti:
      </p>

      {/* ── Servicios IA ── */}
      <section className="py-12">
        {/* Section header - editorial */}
        <div className="hidden editorial:flex items-baseline justify-between mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Servicios IA en San Luis Potosi
          </h2>
        </div>
        {/* Section header - terminal */}
        <div className="hidden terminal:flex items-center gap-3 mb-5">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // servicios_ia_slp
          </h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        {/* Editorial cards */}
        <div className="hidden editorial:grid gap-4 sm:grid-cols-2">
          <Link
            href="/diagnostico-ia"
            className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold tracking-tight">
                Diagnostico IA para tu negocio
              </h3>
              <span className="text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                &#8599;
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              Encuentro donde tu empresa pierde tiempo y te muestro como
              resolverlo con inteligencia artificial. San Luis Potosi.
            </p>
            <span className="text-xs font-medium text-primary">
              $5,000 MXN &middot; Sin compromiso
            </span>
          </Link>
          <Link
            href="/openclaw-slp"
            className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/openclaw-logo.svg"
                  alt="OpenClaw"
                  width={20}
                  height={20}
                  className="animate-wiggle shrink-0"
                />
                <h3 className="font-semibold tracking-tight">
                  OpenClaw en San Luis Potosi
                </h3>
              </div>
              <span className="text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                &#8599;
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              Un asistente inteligente que trabaja por tu negocio 24/7. Te lo
              configuro y te doy soporte local.
            </p>
            <span className="text-xs font-medium text-primary">
              Configuracion profesional
            </span>
          </Link>
        </div>

        {/* Terminal cards */}
        <div className="hidden terminal:grid gap-3 sm:grid-cols-2">
          <Link
            href="/diagnostico-ia"
            className="group grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]"
          >
            <div className="bg-transparent transition-colors group-hover:bg-primary" />
            <div className="p-5 pl-4">
              <h3 className="text-[15px] font-semibold tracking-tight mb-1.5">
                diagnostico-ia
              </h3>
              <p className="mb-2 text-[13px] leading-relaxed text-muted-foreground">
                Encuentro donde tu empresa pierde tiempo y te muestro como
                resolverlo con IA. San Luis Potosi.
              </p>
              <span className="font-mono text-[10px] font-medium text-primary tracking-wide">
                $5,000 MXN
              </span>
            </div>
          </Link>
          <Link
            href="/openclaw-slp"
            className="group grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]"
          >
            <div className="bg-transparent transition-colors group-hover:bg-primary" />
            <div className="p-5 pl-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Image
                  src="/openclaw-logo.svg"
                  alt="OpenClaw"
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                <h3 className="text-[15px] font-semibold tracking-tight">
                  openclaw-slp
                </h3>
              </div>
              <p className="mb-2 text-[13px] leading-relaxed text-muted-foreground">
                Asistente inteligente 24/7. Configuracion profesional y
                soporte local.
              </p>
              <span className="font-mono text-[10px] font-medium text-primary tracking-wide">
                config + soporte
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Social proof ── */}
      <div className="pb-8">
        <SocialProof
          editorialQuote={
            <p>
              Las empresas que implementan agentes de IA correctamente logran
              entre{" "}
              <strong className="font-semibold text-primary">
                20% y 60% mas productividad
              </strong>
              . Pero el{" "}
              <strong className="font-semibold text-primary">
                40% de los proyectos se cancelan
              </strong>{" "}
              por mala implementacion. La diferencia esta en como se hace. Yo
              lo hago bien.
            </p>
          }
          sources={[
            { abbr: "MK", name: "McKinsey", year: "2025" },
            { abbr: "HBR", name: "Harvard Business Review", year: "2025" },
          ]}
          terminalLines={[
            { type: "comment", text: "# fuentes verificadas" },
            { type: "data", key: "productividad", highlight: "+20-60%", text: "con agentes IA bien implementados", src: "// McKinsey 2025" },
            { type: "data", key: "cancelados", highlight: "40%+", text: "de proyectos IA por mala ejecucion", src: "// HBR/Gartner 2025" },
            { type: "comment", text: "# la diferencia esta en como se hace" },
            { type: "closing", key: "implementacion", text: "profesional, local, en SLP", cursor: true },
          ]}
        />
      </div>

      {/* ── Divider (editorial only) ── */}
      <hr className="hidden editorial:block border-border" />

      {/* ── Projects ── */}
      <section className="py-12">
        {/* Section header - editorial */}
        <div className="hidden editorial:flex items-baseline justify-between mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Repos Destacados
          </h2>
          {projects.length > 0 && (
            <Link
              href="/projects"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Ver todos &rarr;
            </Link>
          )}
        </div>
        {/* Section header - terminal */}
        <div className="hidden terminal:flex items-center gap-3 mb-5">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // repos
          </h2>
          <span className="flex-1 h-px bg-border" />
          {projects.length > 0 && (
            <Link
              href="/projects"
              className="font-mono text-xs text-[var(--fg-subtle)] transition-colors hover:text-primary"
            >
              ls -la &rarr;
            </Link>
          )}
        </div>

        {projects.length === 0 ? (
          <p className="text-muted-foreground">
            Proximamente: micro-repos con patterns extraidos de produccion real.
          </p>
        ) : (
          <>
            {/* Editorial cards */}
            <div className="hidden editorial:grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                      &#8599;
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
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
                    <h3 className="text-[15px] font-semibold tracking-tight mb-1.5">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-[13px] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
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
      </section>

      {/* ── Divider (editorial only) ── */}
      <hr className="hidden editorial:block border-border" />

      {/* ── TILs ── */}
      <section className="py-12">
        {/* Section header - editorial */}
        <div className="hidden editorial:flex items-baseline justify-between mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            TILs Recientes
          </h2>
          {tils.length > 0 && (
            <Link
              href="/til"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Ver todos &rarr;
            </Link>
          )}
        </div>
        {/* Section header - terminal */}
        <div className="hidden terminal:flex items-center gap-3 mb-5">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // til
          </h2>
          <span className="flex-1 h-px bg-border" />
          {tils.length > 0 && (
            <Link
              href="/til"
              className="font-mono text-xs text-[var(--fg-subtle)] transition-colors hover:text-primary"
            >
              ver todos &rarr;
            </Link>
          )}
        </div>

        {tils.length === 0 ? (
          <p className="text-muted-foreground">
            Proximamente: micro-lecciones aprendidas en produccion.
          </p>
        ) : (
          <>
            {/* Editorial TIL list */}
            <ul className="hidden editorial:block">
              {tils.map((til) => (
                <li
                  key={til.slug}
                  className="border-b border-border last:border-b-0"
                >
                  <Link
                    href={`/til/${til.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="text-[15px] font-medium transition-colors group-hover:text-primary">
                      {til.title}
                    </span>
                    <span className="shrink-0 font-mono text-xs text-[var(--fg-subtle)]">
                      {til.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Terminal TIL list */}
            <ul className="hidden terminal:block">
              {tils.map((til) => (
                <li
                  key={til.slug}
                  className="group border-t border-border first:border-t-0"
                >
                  <Link
                    href={`/til/${til.slug}`}
                    className="flex items-center gap-3 py-2.5"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-border transition-colors group-hover:bg-primary" />
                    <span className="flex-1 text-sm font-medium transition-colors group-hover:text-primary">
                      {til.title}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-[var(--fg-subtle)]">
                      {til.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}
