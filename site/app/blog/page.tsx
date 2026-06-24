import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/content";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Blog",
  description: "Articulos analiticos y comparativos sobre stacks, herramientas y arquitectura.",
  alternates: { canonical: "https://abelardodiaz.dev/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial header */}
      <div className="hidden editorial:block mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Articulos analiticos y comparativos: stacks, herramientas y arquitectura.
        </p>
      </div>

      {/* Terminal header */}
      <div className="hidden terminal:block mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // blog
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-sm text-muted-foreground">
          Articulos analiticos y comparativos: stacks, herramientas y arquitectura.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">Proximamente: articulos.</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="rounded-lg border border-border p-5 transition-colors hover:border-primary/40">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    {post.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mb-1 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  {post.summary && (
                    <p className="text-sm text-muted-foreground">{post.summary}</p>
                  )}
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
