import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIL - Today I Learned",
  description: "Micro-lecciones aprendidas en produccion.",
};

export default function TilPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">
        TIL - Today I Learned
      </h1>
      <p className="text-muted-foreground">
        Proximamente: micro-lecciones organizadas por categoria.
      </p>
    </div>
  );
}
