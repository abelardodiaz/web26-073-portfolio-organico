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
        <h1 className="mb-6 text-3xl font-bold tracking-tight">About</h1>
        <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Soy Abelardo Diaz. Construyo gateways multi-IA, agentes autonomos y
            sistemas que corren sin supervision.
          </p>
          <p>
            Trabajo con Python, Next.js y 7+ providers de IA en produccion.
            Documento todo en espanol porque la comunidad dev LATAM merece
            contenido real, no tutoriales reciclados.
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
            Soy Abelardo Diaz. Construyo gateways multi-IA, agentes autonomos y
            sistemas que corren sin supervision.
          </p>
          <p>
            Trabajo con Python, Next.js y 7+ providers de IA en produccion.
            Documento todo en espanol porque la comunidad dev LATAM merece
            contenido real, no tutoriales reciclados.
          </p>
        </div>
      </div>
    </div>
  );
}
