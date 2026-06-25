import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  IconDiagnostico,
  IconAutomatizacion,
  IconVps,
  IconSitios,
} from "@/components/shared/ServiceIcons";
import { whatsappUrl, WHATSAPP_MSG_SERVICIOS } from "@/lib/whatsapp";

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
  href: string;
  icon?: ReactNode;
  logo?: string;
  editorialTitle: string;
  terminalTitle: string;
  micro: string;
  tag: string;
  span: string; // bento: tamano segun jerarquia
  star?: boolean;
};

const services: Service[] = [
  {
    href: "/diagnostico-ia",
    icon: <IconDiagnostico />,
    editorialTitle: "Diagnostico IA",
    terminalTitle: "diagnostico-ia",
    micro: "Encuentro donde tu negocio pierde tiempo y dinero, y te entrego un reporte con oportunidades concretas. Sin compromiso.",
    tag: "$10,000 MXN",
    span: "sm:col-span-2 sm:row-span-2",
    star: true,
  },
  {
    href: "/openclaw-slp",
    logo: "/openclaw-logo.svg",
    editorialTitle: "OpenClaw 24/7",
    terminalTitle: "openclaw-slp",
    micro: "Un asistente que trabaja solo",
    tag: "Config + soporte",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    href: "/automatizacion-procesos",
    icon: <IconAutomatizacion />,
    editorialTitle: "Automatizacion",
    terminalTitle: "automatizacion",
    micro: "Lo manual, hecho solo",
    tag: "A cotizar",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    href: "/despliegue-vps",
    icon: <IconVps />,
    editorialTitle: "Servidores VPS",
    terminalTitle: "despliegue-vps",
    micro: "Seguro y respaldado",
    tag: "A cotizar",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    href: "/sitios-web",
    icon: <IconSitios />,
    editorialTitle: "Sitios web",
    terminalTitle: "sitios-web",
    micro: "Rapidos y bien posicionados",
    tag: "A cotizar",
    span: "sm:col-span-2 sm:row-span-1",
  },
];

export default function ServiciosPage() {
  const waUrl = whatsappUrl(WHATSAPP_MSG_SERVICIOS);

  return (
    <div className="relative">
      <div aria-hidden className="hero-bg" />
      <div className="relative mx-auto max-w-5xl px-4 py-16">
      {/* ══════════════════════════════════════ Editorial ══════════════════════════════════════ */}
      <div className="hidden editorial:block">
        {/* Hero */}
        <section className="mb-10">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            San Luis Potosi
          </span>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-[2.75rem] sm:leading-[1.12]">
            Lo que construyo para que tu negocio{" "}
            <em className="text-primary">trabaje menos</em>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Soluciones tecnicas que ya corren en produccion: inteligencia
            artificial, automatizacion, infraestructura y sitios web.
          </p>
        </section>

        {/* Bento */}
        <section className="mb-14">
          <div className="grid grid-cols-1 gap-3 sm:auto-rows-[11rem] sm:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.terminalTitle}
                href={s.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)] ${s.span}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {s.logo ? (
                      <Image
                        src={s.logo}
                        alt=""
                        width={24}
                        height={24}
                        className="animate-wiggle"
                      />
                    ) : (
                      s.icon
                    )}
                  </span>
                  {s.star ? (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                      El mas pedido
                    </span>
                  ) : (
                    <span className="text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                      &#8599;
                    </span>
                  )}
                </div>
                <div>
                  <h2
                    className={`font-semibold tracking-tight ${
                      s.star ? "text-2xl" : "text-base"
                    }`}
                  >
                    {s.editorialTitle}
                  </h2>
                  <p
                    className={`mt-1 leading-snug text-muted-foreground ${
                      s.star ? "max-w-md text-base" : "text-sm"
                    }`}
                  >
                    {s.micro}
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium text-primary">
                    {s.tag}
                  </span>
                </div>
              </Link>
            ))}
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
        <section className="mb-10">
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
            Soluciones tecnicas que ya corren en produccion: IA, automatizacion,
            infraestructura y sitios web.
          </p>
        </section>

        {/* Bento */}
        <section className="mb-14">
          <div className="grid grid-cols-1 gap-3 sm:auto-rows-[11rem] sm:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.terminalTitle}
                href={s.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-md border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)] ${s.span}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-10 items-center justify-center rounded-md border border-border bg-background text-primary">
                    {s.logo ? (
                      <Image
                        src={s.logo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    ) : (
                      s.icon
                    )}
                  </span>
                  {s.star ? (
                    <span className="rounded border border-primary bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
                      mas_pedido
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-[var(--fg-subtle)] transition-colors group-hover:text-primary">
                      &gt;_
                    </span>
                  )}
                </div>
                <div>
                  <h2
                    className={`font-mono font-semibold tracking-tight ${
                      s.star ? "text-lg" : "text-[13px]"
                    }`}
                  >
                    {s.terminalTitle}
                  </h2>
                  <p
                    className={`mt-1 leading-snug text-muted-foreground ${
                      s.star ? "max-w-md text-[13px]" : "text-[11px]"
                    }`}
                  >
                    {s.micro}
                  </p>
                  <span className="mt-2 inline-block font-mono text-[10px] font-medium tracking-wide text-primary">
                    {s.tag}
                  </span>
                </div>
              </Link>
            ))}
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
    </div>
  );
}
