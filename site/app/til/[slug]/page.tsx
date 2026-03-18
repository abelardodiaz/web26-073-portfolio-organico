import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTils, getTilBySlug } from "@/lib/content";
import { MdxContent } from "@/components/shared/MdxContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const tils = getAllTils();
  return tils.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const til = getTilBySlug(slug);
  if (!til) return { title: "TIL no encontrado" };
  return {
    title: til.title,
    description: `TIL: ${til.title} - ${til.category}`,
  };
}

export default async function TilEntryPage({ params }: Props) {
  const { slug } = await params;
  const til = getTilBySlug(slug);

  if (!til) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/til"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Volver a TILs
      </Link>
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">{til.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="rounded bg-accent px-2 py-0.5 font-mono text-xs uppercase">
            {til.category}
          </span>
          <span className="font-mono">{til.date}</span>
          {til.stack.length > 0 && (
            <span>{til.stack.join(", ")}</span>
          )}
        </div>
      </header>
      <article className="prose prose-invert max-w-none">
        <MdxContent source={til.body} />
      </article>
    </div>
  );
}
