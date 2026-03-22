import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTils, getAllTilStacks, getTilTagSets } from "@/lib/content";
import { TilFeed } from "@/components/til/TilFeed";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllTilStacks().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const tils = getAllTils().filter((t) => t.stack.includes(tag));
  if (tils.length === 0) return { title: "Stack no encontrado" };

  return {
    title: `TIL - ${tag}`,
    description: `${tils.length} micro-lecciones usando ${tag} aprendidas en produccion.`,
    alternates: { canonical: `https://abelardodiaz.dev/til/stack/${tag}` },
    openGraph: {
      title: `TIL - ${tag}`,
      description: `${tils.length} micro-lecciones usando ${tag} aprendidas en produccion.`,
      type: "website",
    },
  };
}

export default async function TilStackPage({ params }: Props) {
  const { tag } = await params;
  const allTils = getAllTils();
  const filtered = allTils.filter((t) => t.stack.includes(tag));

  if (filtered.length === 0) notFound();

  const tagSets = getTilTagSets(allTils);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial header */}
      <div className="hidden editorial:block mb-8">
        <Link
          href="/til"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          &larr; Todos los TILs
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          TIL - {tag}
        </h1>
        <p className="text-muted-foreground">
          {filtered.length} micro-lecciones usando {tag} aprendidas en
          produccion.
        </p>
      </div>

      {/* Terminal header */}
      <div className="hidden terminal:block mb-8">
        <Link
          href="/til"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
        >
          &larr; cd ..
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // til/stack/{tag}
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-sm text-muted-foreground">
          {filtered.length} micro-lecciones usando {tag}.
        </p>
      </div>

      <TilFeed
        tils={filtered}
        tagSets={tagSets}
        activeFilter={{ type: "stack", value: tag }}
      />
    </div>
  );
}
