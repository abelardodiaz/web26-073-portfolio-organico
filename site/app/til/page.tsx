import type { Metadata } from "next";
import { getAllTils, getTilTagSets } from "@/lib/content";
import { TilFeed } from "@/components/til/TilFeed";

export const metadata: Metadata = {
  title: "TIL - Today I Learned",
  description: "Micro-lecciones aprendidas en produccion.",
  alternates: { canonical: "https://abelardodiaz.dev/til" },
};

export default function TilPage() {
  const tils = getAllTils();
  const tagSets = getTilTagSets(tils);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial header */}
      <div className="hidden editorial:block mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          TIL - Today I Learned
        </h1>
        <p className="text-muted-foreground">
          Micro-lecciones aprendidas en produccion.
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
          Micro-lecciones aprendidas en produccion.
        </p>
      </div>

      {tils.length === 0 ? (
        <p className="text-muted-foreground">
          Proximamente: micro-lecciones de desarrollo.
        </p>
      ) : (
        <TilFeed tils={tils} tagSets={tagSets} />
      )}
    </div>
  );
}
