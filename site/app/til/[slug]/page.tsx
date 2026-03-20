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
    openGraph: {
      title: til.title,
      description: `TIL: ${til.title} - ${til.category}`,
      type: "article",
    },
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
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        &larr;{" "}
        <span className="hidden editorial:inline">Volver a TILs</span>
        <span className="hidden terminal:inline">cd ..</span>
      </Link>
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">{til.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Link
            href={`/til/categoria/${til.category}`}
            className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs uppercase text-primary transition-colors hover:bg-primary/20"
          >
            {til.category}
          </Link>
          <span className="font-mono text-xs">{til.date}</span>
          {til.stack.length > 0 && (
            <span className="text-xs">{til.stack.join(", ")}</span>
          )}
        </div>
      </header>
      <article className="prose max-w-none">
        <MdxContent source={til.body} />
      </article>
    </div>
  );
}
