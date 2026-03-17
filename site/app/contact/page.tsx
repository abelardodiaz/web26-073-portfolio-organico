import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto para proyectos de consultoria y colaboracion.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Contacto</h1>
      <p className="text-muted-foreground">
        Formulario de contacto proximamente.
      </p>
    </div>
  );
}
