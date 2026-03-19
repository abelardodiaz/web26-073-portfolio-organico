import type { Metadata } from "next";
import Link from "next/link";
import { getAllTils } from "@/lib/content";

export const metadata: Metadata = {
  title: "TIL - Today I Learned",
  description: "Micro-lecciones aprendidas en produccion.",
};

export default function TilPage() {
  const tils = getAllTils();
  const categories = [...new Set(tils.map((t) => t.category))];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial header */}
      <div className="hidden editorial:block mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          TIL - Today I Learned
        </h1>
        <p className="text-muted-foreground">
          Micro-lecciones aprendidas en produccion, organizadas por categoria.
        </p>
      </div>

      {/* Terminal header */}
      <div className="hidden terminal:block mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // til
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-sm text-muted-foreground">
          Micro-lecciones aprendidas en produccion, organizadas por categoria.
        </p>
      </div>

      {tils.length === 0 ? (
        <p className="text-muted-foreground">
          Proximamente: micro-lecciones organizadas por categoria.
        </p>
      ) : (
        <div className="space-y-10">
          {categories.map((cat) => (
            <section key={cat}>
              {/* Editorial category header */}
              <h2 className="hidden editorial:block mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
                {cat}
              </h2>
              {/* Terminal category header */}
              <div className="hidden terminal:flex items-center gap-3 mb-4">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
                  // {cat}
                </h2>
                <span className="flex-1 h-px bg-border" />
              </div>

              {/* Editorial list */}
              <ul className="hidden editorial:block">
                {tils
                  .filter((t) => t.category === cat)
                  .map((til) => (
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

              {/* Terminal list */}
              <ul className="hidden terminal:block">
                {tils
                  .filter((t) => t.category === cat)
                  .map((til) => (
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
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
