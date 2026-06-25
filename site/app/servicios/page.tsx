import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  whatsappUrl,
  WHATSAPP_MSG_SERVICIOS,
  WHATSAPP_MSG_AUTOMATIZACION,
  WHATSAPP_MSG_SITIOS,
} from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Servicios de IA y Automatizacion | San Luis Potosi",
  description:
    "Diagnostico IA, asistentes OpenClaw, automatizacion de procesos, despliegue de servidores y sitios web. Soluciones tecnicas reales para tu negocio en San Luis Potosi.",
  alternates: { canonical: "https://abelardodiaz.dev/servicios" },
  openGraph: {
    title: "Servicios de IA y Automatizacion | Abelardo Diaz",
    description:
      "Lo que construyo para empresas: diagnostico de IA, asistentes 24/7, automatizacion de procesos, infraestructura VPS y sitios web tecnicos.",
    type: "website",
  },
};

type Service = {
  // Pagina propia (ready) o, mientras no existe, link directo a WhatsApp para cotizar
  href?: string;
  waMessage?: string;
  editorialTitle: string;
  terminalTitle: string;
  desc: string;
  price: string;
  logo?: string;
};

const services: Service[] = [
  {
    href: "/diagnostico-ia",
    editorialTitle: "Diagnostico IA para tu negocio",
    terminalTitle: "diagnostico-ia",
    desc: "Encuentro donde tu empresa pierde tiempo y te entrego un reporte con oportunidades concretas para resolverlo con inteligencia artificial.",
    price: "$10,000 MXN",
  },
  {
    href: "/openclaw-slp",
    editorialTitle: "OpenClaw en San Luis Potosi",
    terminalTitle: "openclaw-slp",
    desc: "Un asistente inteligente que trabaja por tu negocio 24/7. Te lo configuro, lo conecto a tus canales y te doy soporte local.",
    price: "Configuracion + soporte",
    logo: "/openclaw-logo.svg",
  },
  {
    waMessage: WHATSAPP_MSG_AUTOMATIZACION,
    editorialTitle: "Automatizacion de procesos",
    terminalTitle: "automatizacion-procesos",
    desc: "Bots, cotizadores, reportes automaticos y conexiones entre tus sistemas (CRM, ERP, WhatsApp, n8n). Lo manual deja de comerte el dia.",
    price: "A cotizar",
  },
  {
    href: "/despliegue-vps",
    editorialTitle: "Despliegue y preparacion de servidores",
    terminalTitle: "despliegue-vps",
    desc: "Levanto, aseguro y dejo en produccion tu VPS: hardening, deploy, SSL, monitoreo y respaldos. Sin sorpresas a medianoche.",
    price: "A cotizar",
  },
  {
    waMessage: WHATSAPP_MSG_SITIOS,
    editorialTitle: "Sitios web y landing pages",
    terminalTitle: "sitios-web",
    desc: "Sitios rapidos y bien construidos (Next.js / Astro), multilingues si lo necesitas, con metricas reales de rendimiento y SEO.",
    price: "A cotizar",
  },
];

export default function ServiciosPage() {
  const waUrl = whatsappUrl(WHATSAPP_MSG_SERVICIOS);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* ══════════════════════════════════════ Editorial ══════════════════════════════════════ */}
      <div className="hidden editorial:block">
        {/* Hero */}
        <section className="mb-12">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            San Luis Potosi
          </span>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-[2.75rem] sm:leading-[1.12]">
            Lo que construyo para que tu negocio{" "}
            <em className="text-primary">trabaje menos</em>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            No vendo consultoria generica ni promesas. Implemento soluciones
            tecnicas que ya corren en produccion: inteligencia artificial,
            automatizacion, infraestructura y sitios web. Esto es lo que puedo
            hacer por ti.
          </p>
        </section>

        {/* Cards */}
        <section className="mb-14">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => {
              const cardClass =
                "group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]";
              const inner = (
                <>
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {s.logo && (
                        <Image
                          src={s.logo}
                          alt=""
                          width={20}
                          height={20}
                          className="animate-wiggle shrink-0"
                        />
                      )}
                      <h2 className="font-semibold tracking-tight">
                        {s.editorialTitle}
                      </h2>
                    </div>
                    <span className="text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                      &#8599;
                    </span>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {s.price}
                  </span>
                </>
              );
              return s.href ? (
                <Link key={s.terminalTitle} href={s.href} className={cardClass}>
                  {inner}
                </Link>
              ) : (
                <a
                  key={s.terminalTitle}
                  href={whatsappUrl(s.waMessage ?? WHATSAPP_MSG_SERVICIOS)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 font-semibold tracking-tight">
                No sabes cual necesitas?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cuentame que hace tu negocio y te digo por donde empezar.
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <WhatsAppIcon className="size-4" />
              Hablemos por WhatsApp
            </a>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════ Terminal ══════════════════════════════════════ */}
      <div className="hidden terminal:block">
        {/* Hero */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // servicios
            </h1>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              SLP
            </span>
          </div>
          <p className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            Lo que construyo para que tu negocio trabaje menos
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            No vendo consultoria generica. Implemento soluciones tecnicas que ya
            corren en produccion: IA, automatizacion, infraestructura y sitios
            web. Esto es lo que puedo hacer por ti.
          </p>
        </section>

        {/* Cards */}
        <section className="mb-14">
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => {
              const cardClass =
                "group grid grid-cols-[4px_1fr] overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]";
              const inner = (
                <>
                  <div className="bg-transparent transition-colors group-hover:bg-primary" />
                  <div className="p-5 pl-4">
                    <div className="mb-1.5 flex items-center gap-2">
                      {s.logo && (
                        <Image
                          src={s.logo}
                          alt=""
                          width={16}
                          height={16}
                          className="shrink-0"
                        />
                      )}
                      <h2 className="text-[15px] font-semibold tracking-tight">
                        {s.terminalTitle}
                      </h2>
                    </div>
                    <p className="mb-2 text-[13px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <span className="font-mono text-[10px] font-medium tracking-wide text-primary">
                      {s.price}
                    </span>
                  </div>
                </>
              );
              return s.href ? (
                <Link key={s.terminalTitle} href={s.href} className={cardClass}>
                  {inner}
                </Link>
              ) : (
                <a
                  key={s.terminalTitle}
                  href={whatsappUrl(s.waMessage ?? WHATSAPP_MSG_SERVICIOS)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="flex flex-col items-start gap-4 rounded-md border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 font-mono text-sm font-semibold">
                // no_sabes_cual_necesitas
              </p>
              <p className="text-[13px] text-muted-foreground">
                Cuentame que hace tu negocio y te digo por donde empezar.
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-primary bg-primary/10 px-5 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_0_3px_var(--accent-glow)]"
            >
              <WhatsAppIcon className="size-4" />
              ./hablemos.sh
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
