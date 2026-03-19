import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Full-Stack Developer & AI Agent Architect basado en Mexico.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial */}
      <div className="hidden editorial:block">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">About</h1>
        <p className="text-muted-foreground">Bio extendida proximamente.</p>
      </div>

      {/* Terminal */}
      <div className="hidden terminal:block">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // about
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-sm text-muted-foreground">
          Bio extendida proximamente.
        </p>
      </div>
    </div>
  );
}
