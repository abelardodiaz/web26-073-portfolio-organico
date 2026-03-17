import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="flex flex-col gap-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Abelardo Diaz
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Full-Stack Developer &amp; AI Agent Architect. Patterns de produccion
          real en espanol para la comunidad dev LATAM.
        </p>
        <div className="flex gap-3">
          <ButtonLink href="/projects">Ver proyectos</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contacto
          </ButtonLink>
        </div>
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold">Repos Destacados</h2>
        <p className="text-muted-foreground">
          Proximamente: micro-repos con patterns extraidos de produccion real.
        </p>
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold">TILs Recientes</h2>
        <p className="text-muted-foreground">
          Proximamente: micro-lecciones aprendidas en produccion.
        </p>
      </section>
    </div>
  );
}
