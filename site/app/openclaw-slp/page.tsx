import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { SocialProof } from "@/components/shared/SocialProof";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Timeline } from "@/components/shared/Timeline";

export const metadata: Metadata = {
  title: "OpenClaw en San Luis Potosi",
  description:
    "OpenClaw es un asistente de IA que trabaja por tu negocio 24/7. Configuracion profesional en San Luis Potosi: respuestas automaticas, reportes, agendamiento y mas.",
  alternates: { canonical: "https://abelardodiaz.dev/openclaw-slp" },
  openGraph: {
    title: "OpenClaw en San Luis Potosi | Abelardo Diaz",
    description:
      "Configuro OpenClaw para tu negocio en San Luis Potosi. Un asistente inteligente que responde clientes, organiza emails y genera reportes.",
    type: "website",
  },
};

const WHATSAPP_NUMBER = "524441741629";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, quiero saber si OpenClaw sirve para mi negocio"
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

const capabilities = [
  {
    title: "Responder WhatsApp y Telegram",
    desc: "Contesta las preguntas de tus clientes con informacion real de tu negocio: precios, horarios, disponibilidad. 24 horas, 7 dias.",
  },
  {
    title: "Organizar tu correo",
    desc: "Revisa tu bandeja de entrada, separa lo importante de lo que no, y te avisa solo cuando necesitas actuar.",
  },
  {
    title: "Generar reportes automaticos",
    desc: "Crea reportes diarios o semanales de ventas, inventario o produccion sin que tengas que pedirlo.",
  },
  {
    title: "Agendar citas y enviar recordatorios",
    desc: "Tus clientes o pacientes agendan solos. El asistente les manda recordatorio y reagenda si no confirman.",
  },
  {
    title: "Monitorear precios y competencia",
    desc: "Vigila los precios de tus proveedores o competidores y te avisa cuando hay cambios relevantes.",
  },
];

const processSteps = [
  {
    num: "01",
    bin: "0001",
    title: "Diagnostico",
    desc: "Entiendo tu negocio y detecto donde OpenClaw te ayuda mas.",
    tag: "Presencial o remota",
  },
  {
    num: "02",
    bin: "0010",
    title: "Configuracion segura",
    desc: "Instalo y conecto todo con las protecciones adecuadas para tus datos.",
    tag: "Docker + VPN",
  },
  {
    num: "03",
    bin: "0011",
    title: "Entrenamiento",
    desc: "Ajusto las respuestas y acciones al contexto especifico de tu negocio.",
    tag: "Skills personalizados",
  },
  {
    num: "04",
    bin: "0100",
    title: "Soporte local",
    desc: "Si algo falla o necesitas cambios, estoy en la ciudad. Sin tickets ni esperas.",
    tag: "San Luis Potosi",
  },
];

const whyHelp = [
  {
    title: "Necesita conectarse a tus cuentas de forma segura",
    desc: "WhatsApp, email, sistemas internos. Una conexion mal hecha expone datos sensibles de tu negocio y tus clientes.",
  },
  {
    title: "Hay que entrenarlo con la informacion de tu negocio",
    desc: "Sin configuracion, da respuestas genericas o incorrectas. Necesita saber que responder, que no, y a quien escalar.",
  },
  {
    title: "Sin supervision puede causar problemas",
    desc: "Un asistente mal configurado puede enviar informacion equivocada, perder mensajes o crear conflictos con clientes. No es teoria: en febrero 2026 se detectaron 135,000 instalaciones de OpenClaw expuestas a internet sin proteccion, y mas de 800 aplicaciones maliciosas en su tienda oficial. El riesgo de una instalacion amateur es real.",
  },
];

const faqs = [
  {
    q: "Puede tener mas de un asistente? Como conviven?",
    a: "Puedes tener un asistente para ventas que conteste precios y disponibilidad, otro para soporte que resuelva quejas, y otro interno que te haga reportes diarios. Cada uno con su personalidad y conocimiento separado.",
  },
  {
    q: "Hay que construirlo desde cero?",
    a: "No se construye de cero. Ya viene con 53 funciones listas y hay miles mas disponibles. Conectar tu Google Calendar, resumir correos, buscar informacion -- todo son funciones que se agregan en minutos.",
  },
  {
    q: "Le puedo dar mi catalogo de productos y precios?",
    a: "Le puedes dar tu catalogo de productos, lista de precios, horarios, politicas de devolucion -- y el asistente los usa para contestar con informacion real de tu negocio, no inventada.",
  },
  {
    q: "Entiende audios de WhatsApp o Telegram?",
    a: "Tu cliente manda un audio de 2 minutos por WhatsApp o Telegram, el asistente lo escucha, lo entiende y le contesta. Sin que nadie de tu equipo tenga que escuchar el audio.",
  },
  {
    q: "Que pasa si se traba o deja de responder?",
    a: "Si el asistente se atora (pasa rara vez), se reinicia en segundos. Y como estoy en San Luis Potosi, si necesitas ayuda la tienes el mismo dia.",
  },
  {
    q: "Funciona las 24 horas sin caerse?",
    a: "Por esto necesitas a alguien que sepa configurarlo bien. Con la configuracion correcta funciona 24/7 sin interrupciones.",
  },
  {
    q: "Mi informacion esta segura?",
    a: "Tu informacion esta protegida. El asistente corre en un servidor privado, no en la nube publica. Nadie mas tiene acceso.",
  },
  {
    q: "Por que no dejar que mis empleados lo instalen solos?",
    a: "Esta es la pregunta mas importante. No es si tus empleados van a usar IA -- es cuando. Mejor que tu lo ofrezcas bien hecho a que ellos lo instalen mal. El costo de una implementacion profesional es una fraccion del costo de un incidente de seguridad.",
  },
];

export default function OpenClawSLPPage() {
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
          <div className="mb-2 flex items-center gap-3">
            <Image
              src="/openclaw-logo.svg"
              alt="OpenClaw"
              width={36}
              height={36}
              className="animate-wiggle shrink-0"
            />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              OpenClaw: un asistente de IA
              <br className="hidden sm:block" />
              que trabaja por ti, 24/7
            </h1>
          </div>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-block text-xs text-muted-foreground/60 transition-colors hover:text-primary"
          >
            github.com/openclaw/openclaw
          </a>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Es como tener un empleado digital que nunca duerme. Contesta
            mensajes, busca informacion, hace reportes y organiza tareas
            &mdash; todo conectado a las herramientas que ya usas en tu
            negocio.
          </p>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Que puede hacer por tu negocio
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="mb-2 font-semibold">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why you need help */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Por que no es &quot;instalar y listo&quot;
          </h2>
          <div className="max-w-2xl space-y-4">
            {whyHelp.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-5"
              >
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HBR Reference */}
        <section className="mb-16">
          <SocialProof
            editorialQuote={
              <p>
                No solo lo digo yo. Harvard Business Review recomienda tratar a
                los agentes de IA como{" "}
                <strong className="font-semibold text-primary">
                  miembros del equipo
                </strong>
                : con identidad propia, permisos limitados, fuentes de datos
                verificadas, y supervision constante. Exactamente como yo lo
                configuro para tu negocio.
              </p>
            }
            sources={[
              { abbr: "HBR", name: "Harvard Business Review", year: "2026" },
            ]}
            terminalLines={[
              { type: "comment", text: "# fuentes verificadas" },
              { type: "data", key: "agentes_ia", highlight: "miembros del equipo", text: "con identidad, permisos, datos verificados", src: "// HBR marzo 2026" },
              { type: "closing", key: "implementacion", text: "exactamente como yo lo configuro", cursor: true },
            ]}
          />
        </section>

        {/* My Process */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Como trabajo con OpenClaw
          </h2>
          <Timeline steps={processSteps} />
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              Comparacion
            </h2>
            <span className="text-muted-foreground/50 sm:hidden">&rarr;</span>
          </div>
          <ComparisonTable
            headers={["Contratar empleado", "ChatGPT solo", "Consultora grande", "OpenClaw configurado"]}
            winnerIndex={3}
            rows={[
              { label: "Costo mensual", cells: [{ text: "$8,000-15,000 MXN", type: "bad" }, { text: "$0-400 MXN", type: "meh" }, { text: "Desde $20,000 MXN", type: "bad" }, { text: "Desde $5,000 MXN", type: "good" }] },
              { label: "Disponibilidad", cells: [{ text: "8 hrs/dia, L-V", type: "meh" }, { text: "Cuando tu lo abres", type: "meh" }, { text: "Horario oficina", type: "meh" }, { text: "24/7 automatico", type: "good" }] },
              { label: "Conecta sistemas", cells: [{ text: "Manual", type: "dash" }, { text: "No", type: "cross" }, { text: "Si", type: "check" }, { text: "Si, automatico", type: "check" }] },
              { label: "Soporte en SLP", cells: [{ text: "N/A", type: "dash" }, { text: "No", type: "cross" }, { text: "No (CDMX/USA)", type: "cross" }, { text: "Si, presencial", type: "check" }] },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <FaqAccordion faqs={faqs} defaultOpen={[6, 7]} />
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
              Preguntar por WhatsApp
            </a>
            <ButtonLink href="/diagnostico-ia" variant="outline">
              Agendar diagnostico
            </ButtonLink>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════ Terminal ══════════════════════════════════════ */}
      <div className="hidden terminal:block">
        {/* Hero */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // openclaw-slp
            </h1>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              SLP
            </span>
          </div>
          <div className="mb-1 flex items-center gap-2">
            <Image
              src="/openclaw-logo.svg"
              alt="OpenClaw"
              width={24}
              height={24}
              className="animate-wiggle shrink-0"
            />
            <p className="text-xl font-bold tracking-tight sm:text-2xl">
              OpenClaw: un asistente de IA
              <br className="hidden sm:block" />
              que trabaja por ti, 24/7
            </p>
          </div>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 inline-block font-mono text-[10px] text-muted-foreground/50 transition-colors hover:text-primary"
          >
            github.com/openclaw/openclaw
          </a>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Es como tener un empleado digital que nunca duerme. Contesta
            mensajes, busca informacion, hace reportes y organiza tareas
            &mdash; todo conectado a las herramientas que ya usas en tu
            negocio.
          </p>
        </section>

        {/* Capabilities */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // capacidades
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]"
              >
                <div className="bg-primary/30" />
                <div className="p-5 pl-4">
                  <h3 className="mb-1.5 text-[15px] font-semibold">
                    {cap.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why you need help */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // no_es_instalar_y_listo
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="max-w-2xl space-y-3">
            {whyHelp.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-border bg-card p-4"
              >
                <h3 className="mb-1 text-[15px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* My Process */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // proceso
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <Timeline steps={processSteps} />
        </section>

        {/* Comparison Table */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // comparacion
            </h2>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-muted-foreground/50 sm:hidden">&rarr;</span>
          </div>
          <ComparisonTable
            headers={["empleado", "chatgpt_solo", "consultora", "openclaw_config"]}
            winnerIndex={3}
            rows={[
              { label: "costo", cells: [{ text: "$8K-15K MXN", type: "bad" }, { text: "$0-400 MXN", type: "meh" }, { text: "desde $20K MXN", type: "bad" }, { text: "desde $5K MXN", type: "good" }] },
              { label: "uptime", cells: [{ text: "8h L-V", type: "meh" }, { text: "manual", type: "meh" }, { text: "oficina", type: "meh" }, { text: "24/7", type: "good" }] },
              { label: "integra_sistemas", cells: [{ text: "--", type: "dash" }, { text: "x", type: "cross" }, { text: "ok", type: "check" }, { text: "auto", type: "check" }] },
              { label: "soporte_slp", cells: [{ text: "--", type: "dash" }, { text: "x", type: "cross" }, { text: "x", type: "cross" }, { text: "presencial", type: "check" }] },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <FaqAccordion faqs={faqs} defaultOpen={[6, 7]} />
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
              ./preguntar_whatsapp.sh
            </a>
            <ButtonLink href="/diagnostico-ia" variant="outline">
              ./agendar_diagnostico.sh
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
