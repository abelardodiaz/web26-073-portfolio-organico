import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getAllProjectCategories } from "@/lib/content";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllProjectCategories().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const projects = getAllProjects().filter((p) => p.category === tag);
  if (projects.length === 0) return { title: "Categoria no encontrada" };

  return {
    title: `Proyectos - ${tag}`,
    description: `${projects.length} proyectos de categoria ${tag} con patterns de produccion real.`,
    alternates: { canonical: `https://abelardodiaz.dev/projects/categoria/${tag}` },
    openGraph: {
      title: `Proyectos - ${tag}`,
      description: `${projects.length} proyectos de categoria ${tag} con patterns de produccion real.`,
      type: "website",
    },
  };
}

export default async function ProjectsCategoriaPage({ params }: Props) {
  const { tag } = await params;
  const allProjects = getAllProjects();
  const filtered = allProjects.filter((p) => p.category === tag);

  if (filtered.length === 0) notFound();

  const categories = getAllProjectCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial header */}
      <div className="hidden editorial:block mb-8">
        <Link
          href="/projects"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          &larr; Todos los Proyectos
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Proyectos - {tag}
        </h1>
        <p className="text-muted-foreground">
          {filtered.length} proyectos de categoria {tag} con patterns de
          produccion real.
        </p>
      </div>

      {/* Terminal header */}
      <div className="hidden terminal:block mb-8">
        <Link
          href="/projects"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
        >
          &larr; cd ..
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // projects/categoria/{tag}
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-sm text-muted-foreground">
          {filtered.length} proyectos de categoria {tag}.
        </p>
      </div>

      <ProjectGrid
        projects={filtered}
        categories={categories}
        activeCategory={tag}
      />
    </div>
  );
}
