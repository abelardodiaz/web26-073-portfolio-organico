import type { Metadata } from "next";
import Link from "next/link";
import { getResourceTils } from "@/lib/content";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recursos - Herramientas que uso",
  description: "Librerias, herramientas y servicios utiles, con ejemplos.",
  alternates: { canonical: "https://abelardodiaz.dev/recursos" },
};

const KIND_LABELS: Record<string, string> = {
  library: "Librerias",
  tool: "Herramientas",
  service: "Servicios",
  template: "Templates",
};

const KIND_ORDER = ["library", "tool", "service", "template"];

export default function RecursosPage() {
  const tils = getResourceTils();

  const grouped = KIND_ORDER.map((kind) => ({
    kind,
    label: KIND_LABELS[kind] ?? kind,
    items: tils.filter((t) => t.resource?.kind === kind),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Recursos</h1>
        <p className="text-muted-foreground">
          Librerias, herramientas y servicios utiles, con un ejemplo de uso.
        </p>
      </div>

      {grouped.length === 0 ? (
        <p className="text-muted-foreground">Proximamente: recursos recomendados.</p>
      ) : (
        grouped.map((group) => (
          <section key={group.kind} className="mb-10">
            <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              {group.label}
            </h2>
            <ul className="divide-y divide-border">
              {group.items.map((til) => (
                <li key={til.slug} className="py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <Link
                      href={`/til/${til.slug}`}
                      className="text-[15px] font-medium transition-colors hover:text-primary"
                    >
                      {til.title}
                    </Link>
                    <span className="flex shrink-0 items-center gap-3 font-mono text-xs">
                      <a
                        href={til.resource!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {til.resource!.name} (repo)
                      </a>
                      {til.demoRepo && (
                        <a
                          href={`https://github.com/abelardodiaz/${til.demoRepo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary hover:underline"
                        >
                          demo
                        </a>
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
