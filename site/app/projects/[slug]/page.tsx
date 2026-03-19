import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug, type ProjectLink } from "@/lib/content";
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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function GitLabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m23.546 10.93-.963-2.965-1.907-5.862a.478.478 0 0 0-.907 0l-1.907 5.862H6.138L4.231 2.103a.478.478 0 0 0-.907 0L1.417 7.965.454 10.93a.956.956 0 0 0 .348 1.07l11.2 8.14 11.2-8.14a.956.956 0 0 0 .348-1.07z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function getLinkMeta(url: string, label?: string) {
  if (url.includes("github.com"))
    return { icon: GitHubIcon, label: label || "GitHub", type: "github" as const };
  if (url.includes("gitlab.com"))
    return { icon: GitLabIcon, label: label || "GitLab", type: "gitlab" as const };
  return { icon: ExternalLinkIcon, label: label || "Ver sitio", type: "external" as const };
}

function buildLinks(github: string, links: ProjectLink[]) {
  const all: { url: string; label: string; icon: typeof GitHubIcon; type: string }[] = [];
  if (github) {
    const meta = getLinkMeta(github);
    all.push({ url: github, ...meta });
  }
  for (const link of links) {
    const meta = getLinkMeta(link.url, link.label);
    all.push({ url: link.url, ...meta });
  }
  return all;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const allLinks = buildLinks(project.github, project.links);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/projects"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        &larr;{" "}
        <span className="hidden editorial:inline">Volver a Proyectos</span>
        <span className="hidden terminal:inline">cd ..</span>
      </Link>

      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="mb-5 text-lg text-muted-foreground">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-secondary px-2 py-0.5 text-xs font-mono text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links prominentes */}
        {allLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {allLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-all hover:border-primary hover:text-primary"
              >
                <link.icon className="size-4" />
                {link.label}
                <svg className="size-3 text-[var(--fg-subtle)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </header>

      <article className="prose max-w-none">
        <MdxContent source={project.body} />
      </article>
    </div>
  );
}
