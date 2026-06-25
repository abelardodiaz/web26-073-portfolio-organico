import type { Metadata } from "next";
import Link from "next/link";
import { Timeline } from "@/components/shared/Timeline";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { StickyWhatsAppBar } from "@/components/shared/StickyWhatsAppBar";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { whatsappUrl, WHATSAPP_MSG_AUTOMATIZACION } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Automatizacion de Procesos para tu Negocio | San Luis Potosi",
  description:
    "Bots, cotizadores, reportes automaticos y conexiones entre tus sistemas (CRM, ERP, WhatsApp, n8n). Lo que tu equipo hace a mano todo el dia, hecho solo.",
  alternates: { canonical: "https://abelardodiaz.dev/automatizacion-procesos" },
  openGraph: {
    title: "Automatizacion de Procesos | Abelardo Diaz",
    description:
      "Conecto tus sistemas y automatizo el trabajo repetitivo: atencion, ventas, reportes y sincronizacion entre plataformas.",
    type: "website",
  },
};

const steps = [
  {
    num: "01",
    bin: "0001",
    title: "Identifico que tarea te come el dia",
    desc: "Me cuentas como opera tu negocio y detecto las tareas repetitivas: responder lo mismo por WhatsApp, cotizar en Excel, pasar datos de un sistema a otro, armar reportes a mano.",
    tag: "Sin tecnicismos",
  },
  {
    num: "02",
    bin: "0010",
    title: "Diseno la automatizacion correcta",
    desc: "No todo necesita un bot con IA. A veces es un flujo en n8n, a veces un agente conversacional, a veces una sincronizacion entre tus sistemas. Elijo la herramienta que resuelve, no la de moda.",
    tag: "A medida",
  },
  {
    num: "03",
    bin: "0011",
    title: "Lo conecto a tus sistemas reales",
    desc: "WhatsApp, tu CRM, tu ERP, tu tienda, tu base de datos. La automatizacion no vive aislada: lee y escribe donde tu negocio ya trabaja, con validaciones para que no haga tonterias.",
    tag: "CRM / ERP / WhatsApp",
  },
  {
    num: "04",
    bin: "0100",
    title: "Lo dejo corriendo y monitoreado",
    desc: "Con antifallas de produccion: reintentos, alertas cuando algo se rompe y registro de lo que hace. No es un demo que funciona una vez; es un proceso que aguanta el dia a dia.",
    tag: "Produccion",
  },
];

const categories = [
  {
    area: "Atencion y ventas",
    items: [
      "Asistentes de WhatsApp que responden, agendan y dan seguimiento 24/7",
      "Agentes que razonan y ejecutan: cobranza, soporte, ventas",
      "Cotizadores automaticos: de horas en Excel a segundos",
      "Recordatorios y confirmaciones que reducen cancelaciones",
    ],
  },
  {
    area: "Operaciones y datos",
    items: [
      "Reportes que se arman solos cada manana, sin copiar y pegar",
      "Captura automatica a tu CRM en lugar de hojas de calculo",
      "Sincronizacion de catalogo, precios e inventario entre plataformas",
      "Flujos n8n que conectan las apps que ya usas",
    ],
  },
  {
    area: "Integraciones",
    items: [
      "Conexion entre tu tienda y tu proveedor o mayorista",
      "Webhooks robustos con validacion y reintentos",
      "Integracion con APIs de terceros (pagos, mensajeria, GPS, CCTV)",
      "Puentes entre sistemas que 'no se hablaban' entre si",
    ],
  },
];

const proofs = [
  {
    href: "/projects/agente-080",
    title: "Agente 080",
    desc: "Agente multicanal que razona, decide y ejecuta acciones reales sobre un negocio.",
  },
  {
    href: "/projects/citas-bot-universal",
    title: "citas-bot-universal",
    desc: "Asistente de WhatsApp para agendar citas, destilado de un sistema en produccion.",
  },
  {
    href: "/projects/tienda-django-sync",
    title: "Tienda Django Sync",
    desc: "Ecommerce que se sincroniza solo: catalogo, precios e inventario contra un mayorista.",
  },
  {
    href: "/projects/flask-survey-referral-system",
    title: "Survey & Referral",
    desc: "Encuestas multi-paso con verificacion WhatsApp y flujos n8n.",
  },
];

const faqs = [
  {
    q: "Mi proceso es muy especifico. Se puede automatizar igual?",
    a: "Casi siempre si. La mayoria de las tareas repetitivas se pueden automatizar aunque parezcan unicas. El primer paso es justo entender tu proceso real; de ahi sale que herramienta encaja. Si algo no conviene automatizar, te lo digo de frente.",
  },
  {
    q: "Necesito tener un CRM o sistemas modernos?",
    a: "No necesariamente. Trabajo con lo que ya tienes: desde una hoja de calculo o WhatsApp hasta un ERP completo. Si conviene incorporar una herramienta nueva (como n8n para los flujos), te explico por que y como queda.",
  },
  {
    q: "Esto usa IA? No quiero que invente cosas.",
    a: "Uso IA solo donde aporta, y con guardrails: validaciones, limites y registro de lo que hace. Mucho de la automatizacion ni siquiera necesita IA: son flujos y conexiones deterministas. La decision es por resultado, no por moda.",
  },
  {
    q: "Que pasa si la automatizacion falla?",
    a: "Las construyo con antifallas de produccion: reintentos automaticos, alertas cuando algo se rompe y registro de cada accion. La idea es que te enteres antes de que sea un problema, y que siempre haya forma de revisar que paso.",
  },
  {
    q: "Cuanto cuesta?",
    a: "Depende de cuantos procesos y que tan conectados esten tus sistemas, asi que se cotiza por proyecto. Si ya hiciste un diagnostico conmigo, partimos de ahi. Escribeme por WhatsApp y lo aterrizamos.",
  },
];

export default function AutomatizacionProcesosPage() {
  const waUrl = whatsappUrl(WHATSAPP_MSG_AUTOMATIZACION);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* ══════════════════════════════════════ Editorial ══════════════════════════════════════ */}
      <div className="hidden editorial:block">
        {/* Hero */}
        <section className="mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Automatizacion
          </span>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-[2.75rem] sm:leading-[1.12]">
            Lo que tu equipo hace a mano todo el dia,{" "}
            <em className="text-primary">hecho solo</em>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Conecto tus sistemas y automatizo el trabajo repetitivo: responder
            clientes, cotizar, armar reportes, pasar datos de un lado a otro. No
            es un demo bonito; son procesos que aguantan produccion.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["WhatsApp", "n8n", "CRM / ERP", "Agentes IA", "A cotizar"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </section>

        {/* Steps */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Como funciona
          </h2>
          <Timeline steps={steps} />
        </section>

        {/* What I automate */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Que automatizo
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.area}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  {cat.area}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-primary">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Proof */}
        <section className="mb-16">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Esto ya lo he construido
          </h2>
          <p className="mb-8 text-xs text-muted-foreground">
            Proyectos reales de automatizacion. Echales un ojo.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block rounded-lg border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]"
              >
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-semibold tracking-tight">{p.title}</h3>
                  <span className="text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                    &#8599;
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <FaqAccordion faqs={faqs} />
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              <WhatsAppIcon className="size-5" />
              Cotizar mi automatizacion
            </a>
            <span className="text-sm text-muted-foreground">
              o empieza con un{" "}
              <Link
                href="/diagnostico-ia"
                className="font-medium text-primary hover:underline"
              >
                diagnostico
              </Link>{" "}
              para saber por donde.
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
              // automatizacion-procesos
            </h1>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              auto
            </span>
          </div>
          <p className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            Lo que tu equipo hace a mano todo el dia, hecho solo
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Conecto tus sistemas y automatizo el trabajo repetitivo: responder
            clientes, cotizar, armar reportes, pasar datos de un lado a otro.
            Procesos que aguantan produccion, no demos.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["whatsapp", "n8n", "crm_erp", "agentes_ia", "a_cotizar"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </section>

        {/* Steps */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // como_funciona
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <Timeline steps={steps} />
        </section>

        {/* What I automate */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // que_automatizo
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.area}
                className="rounded-md border border-border bg-card p-5"
              >
                <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
                  # {cat.area.toLowerCase().replace(/ /g, "_")}
                </p>
                <ul className="space-y-2 text-[13px] text-muted-foreground">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 font-mono text-primary">
                        &gt;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Proof */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // ya_lo_he_construido
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {proofs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]"
              >
                <div className="bg-transparent transition-colors group-hover:bg-primary" />
                <div className="p-5 pl-4">
                  <h3 className="mb-1 text-[15px] font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <FaqAccordion faqs={faqs} />
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md border border-primary bg-primary/10 px-6 py-3.5 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_0_3px_var(--accent-glow)]"
            >
              <WhatsAppIcon className="size-4" />
              ./cotizar_automatizacion.sh
            </a>
            <span className="text-sm text-muted-foreground">
              o empieza con{" "}
              <Link
                href="/diagnostico-ia"
                className="font-medium text-primary hover:underline"
              >
                /diagnostico-ia
              </Link>
            </span>
          </div>
        </section>
      </div>

      {/* Sticky mobile CTA */}
      <StickyWhatsAppBar
        href={waUrl}
        price="A cotizar"
        note={"WhatsApp · n8n · CRM/ERP · Agentes IA"}
        label="Cotizar"
      />
    </div>
  );
}
