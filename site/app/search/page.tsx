import type { Metadata } from "next";
import { Suspense } from "react";
import { getSearchIndex, getPopularStacks } from "@/lib/search";
import { SearchBox } from "@/components/search/SearchBox";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Buscar proyectos y TILs por titulo, stack o categoria.",
  alternates: { canonical: "https://abelardodiaz.dev/search" },
};

export default function SearchPage() {
  const items = getSearchIndex();
  const popularStacks = getPopularStacks(items);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial header */}
      <div className="hidden editorial:block mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Buscar</h1>
        <p className="text-muted-foreground">
          Buscar en proyectos y TILs por titulo, stack o categoria.
        </p>
      </div>

      {/* Terminal header */}
      <div className="hidden terminal:block mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // search
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-sm text-muted-foreground">
          Buscar en proyectos y TILs por titulo, stack o categoria.
        </p>
      </div>

      <Suspense>
        <SearchBox items={items} popularStacks={popularStacks} />
      </Suspense>
    </div>
  );
}
