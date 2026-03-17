import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Full-Stack Developer & AI Agent Architect basado en Mexico.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">About</h1>
      <p className="text-muted-foreground">Bio extendida proximamente.</p>
    </div>
  );
}
