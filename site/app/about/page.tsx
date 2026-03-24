import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Full-Stack Developer & AI Agent Architect basado en Mexico.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial */}
      <div className="hidden editorial:block">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">About</h1>
        <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Soy Abelardo Diaz, ingeniero de telecomunicaciones con mas de 10
            anos de experiencia en la industria de tecnologia. Empece disenando
            y analizando redes de datos &mdash; redes inalambricas, enlaces de
            larga distancia, infraestructura para proveedores de internet.
            Despues me movi a emprender: administre negocios de bienes raices y
            aprendi a operar empresas desde cero.
          </p>
          <p>
            Hace 3 anos empece a construir proyectos de software e inteligencia
            artificial. Hoy opero +40 proyectos en mi propia infraestructura:
            CRMs, gateways que conectan 11 proveedores de IA, chatbots
            automatizados para consultorios medicos, sistemas de e-commerce, y
            las herramientas para monitorearlos todos. Todo con Python, Next.js,
            PostgreSQL y Docker en servidores que administro directamente.
          </p>
          <p>
            Esa combinacion de ingenieria, negocios e IA es lo que me permite
            entender tanto la tecnologia como el problema del negocio. No solo
            se programar un agente &mdash; se para que lo necesitas y como
            medir si esta funcionando.
          </p>
          <p>
            Documento en espanol porque la comunidad dev LATAM merece
            contenido real, no tutoriales reciclados.
          </p>
          <p>
            Trabajo desde San Luis Potosi. Ademas de mis{" "}
            <Link
              href="/projects"
              className="font-medium text-primary hover:underline"
            >
              proyectos
            </Link>{" "}
            open-source, ayudo a negocios locales a implementar inteligencia
            artificial de forma segura y practica. Si tienes una empresa en SLP
            y quieres saber como la IA puede ayudarte, empieza con un{" "}
            <Link
              href="/diagnostico-ia"
              className="font-medium text-primary hover:underline"
            >
              diagnostico
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Terminal */}
      <div className="hidden terminal:block">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // about
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="max-w-2xl space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Soy Abelardo Diaz, ingeniero de telecomunicaciones con mas de 10
            anos de experiencia en la industria de tecnologia. Empece disenando
            y analizando redes de datos &mdash; redes inalambricas, enlaces de
            larga distancia, infraestructura para proveedores de internet.
            Despues me movi a emprender: administre negocios de bienes raices y
            aprendi a operar empresas desde cero.
          </p>
          <p>
            Hace 3 anos empece a construir proyectos de software e inteligencia
            artificial. Hoy opero +40 proyectos en mi propia infraestructura:
            CRMs, gateways que conectan 11 proveedores de IA, chatbots
            automatizados para consultorios medicos, sistemas de e-commerce, y
            las herramientas para monitorearlos todos. Todo con Python, Next.js,
            PostgreSQL y Docker en servidores que administro directamente.
          </p>
          <p>
            Esa combinacion de ingenieria, negocios e IA es lo que me permite
            entender tanto la tecnologia como el problema del negocio. No solo
            se programar un agente &mdash; se para que lo necesitas y como
            medir si esta funcionando.
          </p>
          <p>
            Documento en espanol porque la comunidad dev LATAM merece
            contenido real, no tutoriales reciclados.
          </p>
          <p>
            Trabajo desde San Luis Potosi. Ademas de mis{" "}
            <Link
              href="/projects"
              className="font-medium text-primary hover:underline"
            >
              /proyectos
            </Link>{" "}
            open-source, ayudo a negocios locales a implementar inteligencia
            artificial de forma segura y practica. Si tienes una empresa en SLP
            y quieres saber como la IA puede ayudarte, empieza con un{" "}
            <Link
              href="/diagnostico-ia"
              className="font-medium text-primary hover:underline"
            >
              /diagnostico
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
