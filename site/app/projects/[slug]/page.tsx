import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { MdxContent } from "@/components/shared/MdxContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/projects"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Volver a Proyectos
      </Link>
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="mb-4 text-lg text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-secondary px-2 py-0.5 text-xs font-mono text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline hover:text-foreground"
            >
              GitHub
            </a>
          )}
        </div>
      </header>
      <article className="prose prose-invert max-w-none">
        <MdxContent source={project.body} />
      </article>
    </div>
  );
}
