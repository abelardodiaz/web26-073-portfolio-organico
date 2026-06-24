import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { MdxContent } from "@/components/shared/MdxContent";

export const revalidate = 86400;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Articulo no encontrado" };
  return {
    title: post.title,
    description: post.summary || post.title,
    openGraph: {
      title: post.title,
      description: post.summary || post.title,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        &larr;{" "}
        <span className="hidden editorial:inline">Volver al blog</span>
        <span className="hidden terminal:inline">cd ..</span>
      </Link>
      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="font-mono text-xs">{post.date}</span>
          {post.tags.length > 0 && (
            <span className="flex flex-wrap items-center gap-1.5">
              {post.tags.map((t) => (
                <Link
                  key={t}
                  href={`/search?q=${encodeURIComponent(t)}`}
                  className="rounded border border-border px-1.5 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary hover:border-primary/30"
                >
                  {t}
                </Link>
              ))}
            </span>
          )}
        </div>
      </header>
      <article className="prose max-w-none">
        <MdxContent source={post.body} />
      </article>
    </div>
  );
}
