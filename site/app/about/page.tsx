import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";

export const metadata: Metadata = {
  title: "About",
  description: "Full-Stack Developer & AI Agent Architect basado en Mexico.",
};

const SOFTWARE_START = 2023;
const CAREER_START = 2014;

function yearsFrom(year: number) {
  return new Date().getFullYear() - year;
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial */}
      <div className="hidden editorial:block max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">About</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Ingeniero, emprendedor, builder.
        </p>

        {/* -- Trayectoria -- */}
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
          Trayectoria
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
          <p>
            Soy Abelardo Diaz, ingeniero de telecomunicaciones con mas de{" "}
            {yearsFrom(CAREER_START)} anos de experiencia en la industria de
            tecnologia. Empece disenando y analizando redes de datos &mdash;
            redes inalambricas, enlaces de larga distancia, infraestructura
            para proveedores de internet. Despues me movi a emprender:
            administre negocios de bienes raices y aprendi a operar empresas
            desde cero.
          </p>
          <p>
            Desde {SOFTWARE_START} construyo proyectos de software e
            inteligencia artificial. Hoy opero +40 proyectos en mi propia
            infraestructura: CRMs, gateways que conectan 11 proveedores de IA,
            chatbots automatizados para consultorios medicos, sistemas de
            e-commerce, y las herramientas para monitorearlos todos. Todo con
            Python, Next.js, PostgreSQL y Docker en servidores que administro
            directamente.
          </p>
        </div>

        {/* -- Enfoque -- */}
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
          Enfoque
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
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
        </div>

        {/* -- Contacto -- */}
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
          Trabajemos
        </h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Trabajo desde San Luis Potosi. Ademas de mis{" "}
          <Link
            href="/projects"
            className="font-medium text-primary hover:underline"
          >
            proyectos
          </Link>{" "}
          open-source, ayudo a negocios locales a implementar inteligencia
          artificial de forma segura y practica.
        </p>
        <div className="flex gap-3">
          <ButtonLink href="/diagnostico-ia">Solicitar diagnostico</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contacto
          </ButtonLink>
        </div>
      </div>

      {/* Terminal */}
      <div className="hidden terminal:block max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // about
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>

        {/* -- trayectoria -- */}
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
          # trayectoria
        </p>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
          <p>
            Soy Abelardo Diaz, ingeniero de telecomunicaciones con mas de{" "}
            {yearsFrom(CAREER_START)} anos de experiencia en la industria de
            tecnologia. Empece disenando y analizando redes de datos &mdash;
            redes inalambricas, enlaces de larga distancia, infraestructura
            para proveedores de internet. Despues me movi a emprender:
            administre negocios de bienes raices y aprendi a operar empresas
            desde cero.
          </p>
          <p>
            Desde {SOFTWARE_START} construyo proyectos de software e
            inteligencia artificial. Hoy opero +40 proyectos en mi propia
            infraestructura: CRMs, gateways que conectan 11 proveedores de IA,
            chatbots automatizados para consultorios medicos, sistemas de
            e-commerce, y las herramientas para monitorearlos todos. Todo con
            Python, Next.js, PostgreSQL y Docker en servidores que administro
            directamente.
          </p>
        </div>

        {/* -- enfoque -- */}
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
          # enfoque
        </p>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
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
        </div>

        {/* -- trabajemos -- */}
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
          # trabajemos
        </p>
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
          Trabajo desde San Luis Potosi. Ademas de mis{" "}
          <Link
            href="/projects"
            className="font-medium text-primary hover:underline"
          >
            /proyectos
          </Link>{" "}
          open-source, ayudo a negocios locales a implementar inteligencia
          artificial de forma segura y practica.
        </p>
        <div className="flex gap-3">
          <ButtonLink href="/diagnostico-ia">./diagnostico.sh</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            ./contacto.sh
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
