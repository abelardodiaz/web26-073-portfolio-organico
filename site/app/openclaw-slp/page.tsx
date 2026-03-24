import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";

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

const WHATSAPP_NUMBER = "524441234567"; // TODO: reemplazar con numero real
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
    title: "Diagnostico",
    desc: "Entiendo tu negocio y detecto donde OpenClaw te ayuda mas.",
  },
  {
    num: "02",
    title: "Configuracion segura",
    desc: "Instalo y conecto todo con las protecciones adecuadas para tus datos.",
  },
  {
    num: "03",
    title: "Entrenamiento",
    desc: "Ajusto las respuestas y acciones al contexto especifico de tu negocio.",
  },
  {
    num: "04",
    title: "Soporte local",
    desc: "Si algo falla o necesitas cambios, estoy en la ciudad. Sin tickets ni esperas.",
  },
];

const whyHelp = [
  {
    title: "Necesita conectarse a tus cuentas de forma segura",
    desc: "WhatsApp, email, sistemas internos. Una conexion mal hecha expone datos sensibles de tu negocio y tus clientes.",
  },
  {
    title: "Hay que ensenarlo sobre tu negocio",
    desc: "Sin configuracion, da respuestas genericas o incorrectas. Necesita saber que responder, que no, y a quien escalar.",
  },
  {
    title: "Sin supervision puede causar problemas",
    desc: "Un asistente mal configurado puede enviar informacion equivocada, perder mensajes o crear conflictos con clientes.",
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
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            OpenClaw: un asistente de IA
            <br className="hidden sm:block" />
            que trabaja por ti, 24/7
          </h1>
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

        {/* My Process */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Como trabajo con OpenClaw
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.num}>
                <span className="mb-2 block text-2xl font-bold text-primary">
                  {step.num}
                </span>
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Comparacion
          </h2>
          <div className="-mx-4 overflow-x-auto px-4">
            <table className="min-w-[600px] w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left font-medium text-muted-foreground" />
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Contratar empleado
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    ChatGPT solo
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Consultora grande
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-primary">
                    OpenClaw configurado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">Costo mensual</td>
                  <td className="px-4 py-3 text-muted-foreground">$8,000-15,000 MXN</td>
                  <td className="px-4 py-3 text-muted-foreground">$0-400 MXN</td>
                  <td className="px-4 py-3 text-muted-foreground">$50,000+ USD</td>
                  <td className="px-4 py-3 font-medium text-primary">$200-1,000 MXN en API</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">Disponibilidad</td>
                  <td className="px-4 py-3 text-muted-foreground">8 hrs/dia, L-V</td>
                  <td className="px-4 py-3 text-muted-foreground">Cuando tu lo abres</td>
                  <td className="px-4 py-3 text-muted-foreground">Horario oficina</td>
                  <td className="px-4 py-3 font-medium text-primary">24/7 automatico</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">Se conecta a tus sistemas</td>
                  <td className="px-4 py-3 text-muted-foreground">Si (manual)</td>
                  <td className="px-4 py-3 text-muted-foreground">No</td>
                  <td className="px-4 py-3 text-muted-foreground">Si</td>
                  <td className="px-4 py-3 font-medium text-primary">Si (automatico)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Soporte en SLP</td>
                  <td className="px-4 py-3 text-muted-foreground">N/A</td>
                  <td className="px-4 py-3 text-muted-foreground">No</td>
                  <td className="px-4 py-3 text-muted-foreground">No (CDMX/USA)</td>
                  <td className="px-4 py-3 font-medium text-primary">Si, presencial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Preguntas frecuentes
          </h2>
          <div className="max-w-2xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-4 last:border-b-0">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
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
          <p className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            OpenClaw: un asistente de IA
            <br className="hidden sm:block" />
            que trabaja por ti, 24/7
          </p>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card"
              >
                <div className="bg-primary/30" />
                <div className="p-5 pl-4">
                  <span className="mb-1 block font-mono text-lg font-bold text-primary">
                    {step.num}
                  </span>
                  <h3 className="mb-1.5 text-[15px] font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // comparacion
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="-mx-4 overflow-x-auto px-4">
            <table className="min-w-[600px] w-full border-collapse font-mono text-[13px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left font-medium text-muted-foreground" />
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    empleado
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    chatgpt_solo
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    consultora_grande
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-primary">
                    openclaw_config
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">costo_mensual</td>
                  <td className="px-4 py-3 text-muted-foreground">$8K-15K MXN</td>
                  <td className="px-4 py-3 text-muted-foreground">$0-400 MXN</td>
                  <td className="px-4 py-3 text-muted-foreground">$50K+ USD</td>
                  <td className="px-4 py-3 font-medium text-primary">$200-1K MXN</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">disponibilidad</td>
                  <td className="px-4 py-3 text-muted-foreground">8h L-V</td>
                  <td className="px-4 py-3 text-muted-foreground">manual</td>
                  <td className="px-4 py-3 text-muted-foreground">oficina</td>
                  <td className="px-4 py-3 font-medium text-primary">24/7</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">conecta_sistemas</td>
                  <td className="px-4 py-3 text-muted-foreground">manual</td>
                  <td className="px-4 py-3 text-muted-foreground">no</td>
                  <td className="px-4 py-3 text-muted-foreground">si</td>
                  <td className="px-4 py-3 font-medium text-primary">auto</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">soporte_slp</td>
                  <td className="px-4 py-3 text-muted-foreground">n/a</td>
                  <td className="px-4 py-3 text-muted-foreground">no</td>
                  <td className="px-4 py-3 text-muted-foreground">no</td>
                  <td className="px-4 py-3 font-medium text-primary">presencial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // faq
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="max-w-2xl space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-border pb-3 last:border-b-0"
              >
                <h3 className="mb-1.5 text-[15px] font-semibold">{faq.q}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
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
