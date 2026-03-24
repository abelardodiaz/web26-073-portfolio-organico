import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedBars } from "@/components/shared/AnimatedBars";
import { SocialProof } from "@/components/shared/SocialProof";
import { Timeline } from "@/components/shared/Timeline";

export const metadata: Metadata = {
  title: "Diagnostico IA para tu Negocio",
  description:
    "Consultoria de inteligencia artificial en San Luis Potosi. Diagnostico express para identificar donde tu negocio puede automatizar con IA. $5,000 MXN, sin compromiso.",
  alternates: { canonical: "https://abelardodiaz.dev/diagnostico-ia" },
  openGraph: {
    title: "Diagnostico IA para tu Negocio | Abelardo Diaz",
    description:
      "Consultoria de inteligencia artificial en San Luis Potosi. Identifico oportunidades de automatizacion y te entrego un reporte con pasos concretos.",
    type: "website",
  },
};

const WHATSAPP_NUMBER = "524441741629";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, me interesa el diagnostico de IA para mi negocio"
);

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const steps = [
  {
    num: "01",
    bin: "0001",
    title: "Platicamos sobre tu negocio",
    desc: "Una entrevista de 1-2 horas donde entiendo como opera tu empresa, que tareas consumen mas tiempo y donde esta el cuello de botella.",
    tag: "Presencial o remota",
  },
  {
    num: "02",
    bin: "0010",
    title: "Identifico 3-5 oportunidades",
    desc: "Analizo tus procesos y detecto las tareas que una maquina podria hacer por ti: respuestas a clientes, reportes, cotizaciones, seguimiento.",
    tag: "Analisis personalizado",
  },
  {
    num: "03",
    bin: "0011",
    title: "Te entrego un reporte con numeros",
    desc: "Recibes un documento con cada oportunidad, cuantas horas te ahorraria por semana, y los pasos concretos para implementarlo.",
    tag: "Sin compromiso",
  },
];

const sectors = [
  {
    title: "Comercio y Retail",
    problem: "Las mismas preguntas por WhatsApp todo el dia: precio, disponibilidad, horarios.",
    solution:
      "Un asistente que responde automaticamente con informacion real de tu inventario y precios.",
    savings: "Si tu equipo contesta mas de 30 mensajes al dia, un asistente puede hacerse cargo del 70-80% sin intervencion humana.",
  },
  {
    title: "Clinicas y Despachos",
    problem: "La secretaria pasa el dia agendando citas por telefono. Los pacientes no llegan.",
    solution:
      "Un asistente que agenda citas, envia recordatorios automaticos y reagenda sin intervencion humana.",
    savings: "Consultorios que usan recordatorios automaticos reportan entre 20% y 30% menos cancelaciones.",
  },
  {
    title: "Logistica y Distribucion",
    problem: "El vendedor cotiza en Excel, copia y pega, y tarda horas en responder.",
    solution:
      "Un asistente que genera cotizaciones al instante y da seguimiento al status del envio.",
    savings: "Lo que hoy tarda 2 horas en cotizar, el asistente lo hace en 90 segundos.",
  },
  {
    title: "Manufactura y Automotriz",
    problem: "Los reportes de produccion tardan 2 dias. Las alertas llegan tarde.",
    solution:
      "Un asistente que genera reportes diarios automaticos y envia alertas en tiempo real.",
    savings: "Reportes que tomaban 2 dias ahora se generan solos cada manana antes de que llegues a la planta.",
  },
];

export default function DiagnosticoIAPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* ══════════════════════════════════════ Editorial ══════════════════════════════════════ */}
      <div className="hidden editorial:block">
        {/* Hero */}
        <section className="mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            San Luis Potosi
          </span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tu negocio pierde horas en tareas
            <br className="hidden sm:block" />
            que una maquina podria hacer sola
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Encuentro donde se pierde tiempo y dinero en tu empresa, y te
            muestro exactamente como resolverlo con inteligencia artificial.
            Sin jerga, con numeros claros.
          </p>
          <div className="mt-6">
            <SocialProof
              editorialQuote={
                <p>
                  El{" "}
                  <strong className="font-semibold text-primary">
                    94% de las PyMEs mexicanas
                  </strong>{" "}
                  que implementaron inteligencia artificial reportan mejora en
                  eficiencia operativa, y el{" "}
                  <strong className="font-semibold text-primary">
                    91% incremento sus ingresos
                  </strong>
                  .
                </p>
              }
              sources={[
                { abbr: "MS", name: "Microsoft LATAM", year: "2025" },
              ]}
              terminalLines={[
                { type: "comment", text: "# fuentes verificadas" },
                { type: "data", key: "eficiencia", highlight: "94%", text: "PyMEs MX con IA mejoran eficiencia", src: "// Microsoft LATAM 2025" },
                { type: "data", key: "ingresos", highlight: "91%", text: "incrementaron ingresos con IA", src: "// Microsoft LATAM 2025" },
              ]}
            />
          </div>
        </section>

        {/* 3 Steps */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Como funciona
          </h2>
          <Timeline steps={steps} />
        </section>

        {/* Sector Examples */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Ejemplos por sector
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="mb-3 font-semibold">{sector.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Problema comun:
                  </span>{" "}
                  {sector.problem}
                </p>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Con IA:
                  </span>{" "}
                  {sector.solution}
                </p>
                <p className="text-sm font-medium text-primary">
                  {sector.savings}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Data */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Datos de impacto
          </h2>
          <div className="max-w-lg">
            <AnimatedBars
              bars={[
                { label: "Mensajes automatizables en retail", value: 75, color: "primary", source: "Promedio sector comercio" },
                { label: "Menos cancelaciones con recordatorios", value: 25, color: "green", source: "Consultorios con agendamiento automatico" },
                { label: "Reduccion tiempo de cotizacion", value: 95, color: "blue", source: "2 hrs manual vs 90 seg automatico" },
              ]}
            />
          </div>
        </section>

        {/* Price */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Precio
          </h2>
          <div className="max-w-md rounded-lg border border-primary/30 bg-card p-8">
            <p className="mb-1 text-sm font-medium text-muted-foreground">
              Diagnostico Express
            </p>
            <p className="mb-4 text-3xl font-bold text-primary">$5,000 MXN</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#10003;</span>
                Entrevista presencial o remota (1-2 horas)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#10003;</span>
                Reporte escrito con 3-5 oportunidades concretas
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#10003;</span>
                Estimacion de ahorro en horas y dinero
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#10003;</span>
                Sin compromiso de continuidad
              </li>
            </ul>
          </div>
        </section>

        {/* Urgency */}
        <section className="mb-16">
          <div className="flex max-w-md items-start gap-3 rounded-md bg-muted/50 px-4 py-3">
            <span className="mt-0.5 shrink-0 text-sm text-muted-foreground/50">&#9716;</span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Atiendo maximo 4 diagnosticos por mes para dar atencion
              personalizada a cada negocio. Si quieres agendar el tuyo,
              escribe por WhatsApp y lo coordinamos.
            </p>
          </div>
        </section>

        {/* Mini Bio */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Quien lo hace
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Soy Abelardo Diaz. He construido asistentes automaticos para
            consultorios medicos, sistemas de cotizacion para distribuidoras, y
            plataformas que conectan 11 proveedores de inteligencia artificial al
            mismo tiempo. Todo funciona en servidores que yo mismo administro,
            24 horas al dia, 7 dias a la semana. Llevo 3 anos construyendo
            proyectos con IA y mas de 10 en la industria de tecnologia. Puedes
            ver mi trabajo real en{" "}
            <Link
              href="/projects"
              className="font-medium text-primary hover:underline"
            >
              mis proyectos
            </Link>{" "}
            o saber mas en{" "}
            <Link
              href="/about"
              className="font-medium text-primary hover:underline"
            >
              about
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              <WhatsAppIcon className="size-5" />
              Agendar diagnostico por WhatsApp
            </a>
            <span className="text-sm text-muted-foreground">
              o conoce{" "}
              <Link
                href="/openclaw-slp"
                className="font-medium text-primary hover:underline"
              >
                que es OpenClaw
              </Link>{" "}
              y como puede ayudar a tu negocio.
            </span>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════ Terminal ══════════════════════════════════════ */}
      <div className="hidden terminal:block">
        {/* Hero */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // diagnostico-ia
            </h1>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              SLP
            </span>
          </div>
          <p className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            Tu negocio pierde horas en tareas
            <br className="hidden sm:block" />
            que una maquina podria hacer sola
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Encuentro donde se pierde tiempo y dinero en tu empresa, y te
            muestro exactamente como resolverlo con inteligencia artificial.
            Sin jerga, con numeros claros.
          </p>
        </section>

        {/* 3 Steps */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // como_funciona
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <Timeline steps={steps} />
        </section>

        {/* Sector Examples */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // sectores
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]"
              >
                <div className="bg-transparent transition-colors group-hover:bg-primary" />
                <div className="p-5 pl-4">
                  <h3 className="mb-2 text-[15px] font-semibold">
                    {sector.title}
                  </h3>
                  <p className="mb-1.5 text-[13px] text-muted-foreground">
                    <span className="font-medium text-foreground">
                      problema:
                    </span>{" "}
                    {sector.problem}
                  </p>
                  <p className="mb-1.5 text-[13px] text-muted-foreground">
                    <span className="font-medium text-foreground">
                      con IA:
                    </span>{" "}
                    {sector.solution}
                  </p>
                  <p className="font-mono text-xs font-medium text-primary">
                    {sector.savings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Data */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // datos_impacto
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="max-w-lg">
            <AnimatedBars
              bars={[
                { label: "mensajes_automatizables_retail", value: 75, color: "primary", source: "// promedio sector comercio" },
                { label: "reduccion_cancelaciones", value: 25, color: "green", source: "// consultorios con agendamiento auto" },
                { label: "reduccion_tiempo_cotizacion", value: 95, color: "blue", source: "// 2h manual vs 90s auto" },
              ]}
            />
          </div>
        </section>

        {/* Price */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // precio
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="max-w-md rounded-md border border-primary/40 bg-card p-6">
            <p className="mb-1 font-mono text-xs text-muted-foreground">
              diagnostico_express
            </p>
            <p className="mb-4 font-mono text-2xl font-bold text-primary">
              $5,000 MXN
            </p>
            <ul className="space-y-2 text-[13px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-mono text-primary">&gt;</span>
                Entrevista presencial o remota (1-2 horas)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-mono text-primary">&gt;</span>
                Reporte escrito con 3-5 oportunidades concretas
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-mono text-primary">&gt;</span>
                Estimacion de ahorro en horas y dinero
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-mono text-primary">&gt;</span>
                Sin compromiso de continuidad
              </li>
            </ul>
          </div>
        </section>

        {/* Urgency */}
        <section className="mb-14">
          <div className="flex max-w-md items-start gap-3 rounded-md bg-muted/50 px-4 py-3">
            <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground/50">&#9716;</span>
            <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
              Atiendo maximo 4 diagnosticos por mes para dar atencion
              personalizada a cada negocio. Si quieres agendar el tuyo,
              escribe por WhatsApp y lo coordinamos.
            </p>
          </div>
        </section>

        {/* Mini Bio */}
        <section className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // quien
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Soy Abelardo Diaz. He construido asistentes automaticos para
            consultorios medicos, sistemas de cotizacion para distribuidoras, y
            plataformas que conectan 11 proveedores de inteligencia artificial al
            mismo tiempo. Todo funciona en servidores que yo mismo administro,
            24 horas al dia, 7 dias a la semana. Llevo 3 anos construyendo
            proyectos con IA y mas de 10 en la industria de tecnologia. Puedes
            ver mi trabajo real en{" "}
            <Link
              href="/projects"
              className="font-medium text-primary hover:underline"
            >
              /proyectos
            </Link>{" "}
            o saber mas en{" "}
            <Link
              href="/about"
              className="font-medium text-primary hover:underline"
            >
              /about
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md border border-primary bg-primary/10 px-6 py-3.5 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_0_3px_var(--accent-glow)]"
            >
              <WhatsAppIcon className="size-4" />
              ./agendar_diagnostico.sh
            </a>
            <span className="text-sm text-muted-foreground">
              o conoce{" "}
              <Link
                href="/openclaw-slp"
                className="font-medium text-primary hover:underline"
              >
                /openclaw-slp
              </Link>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
