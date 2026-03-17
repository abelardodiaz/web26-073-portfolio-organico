import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Micro-repos con patterns de produccion real.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Proyectos</h1>
      <p className="text-muted-foreground">
        Proximamente: grid de proyectos open source con patterns de produccion.
      </p>
    </div>
  );
}
