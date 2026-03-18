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
      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        TIL - Today I Learned
      </h1>
      <p className="mb-8 text-muted-foreground">
        Micro-lecciones aprendidas en produccion, organizadas por categoria.
      </p>

      {tils.length === 0 ? (
        <p className="text-muted-foreground">
          Proximamente: micro-lecciones organizadas por categoria.
        </p>
      ) : (
        <div className="space-y-10">
          {categories.map((cat) => (
            <section key={cat}>
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
                {cat}
              </h2>
              <ul className="space-y-3">
                {tils
                  .filter((t) => t.category === cat)
                  .map((til) => (
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
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
