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
  image: string;
  color: string; // tono por servicio (duotono)
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
    image: "/services/diagnostico-v2.jpg",
    color: "#10b981",
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
    image: "/services/openclaw-v2.jpg",
    color: "#f97316",
    editorialTitle: "OpenClaw 24/7",
    terminalTitle: "openclaw-slp",
    micro: "Un asistente que trabaja solo",
    tag: "Config + soporte",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    href: "/automatizacion-procesos",
    icon: <IconAutomatizacion />,
    image: "/services/automatizacion.jpg",
    color: "#f59e0b",
    editorialTitle: "Automatizacion",
    terminalTitle: "automatizacion",
    micro: "Lo manual, hecho solo",
    tag: "A cotizar",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    href: "/despliegue-vps",
    icon: <IconVps />,
    image: "/services/vps.jpg",
    color: "#3b82f6",
    editorialTitle: "Servidores VPS",
    terminalTitle: "despliegue-vps",
    micro: "Seguro y respaldado",
    tag: "A cotizar",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    href: "/sitios-web",
    icon: <IconSitios />,
    image: "/services/sitios.jpg",
    color: "#8b5cf6",
    editorialTitle: "Sitios web",
    terminalTitle: "sitios-web",
    micro: "Rapidos y bien posicionados",
    tag: "A cotizar",
    span: "sm:col-span-2 sm:row-span-1",
  },
];

// Card con foto en duotono (color por servicio). Compartida por ambos temas.
function ServiceCard({ s, terminal }: { s: Service; terminal?: boolean }) {
  const title = terminal ? s.terminalTitle : s.editorialTitle;
  return (
    <Link
      href={s.href}
      className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 p-6 transition-all hover:border-white/40 hover:shadow-lg ${s.span}`}
    >
      {/* Foto (escala de grises, base del duotono). Terminal = mas oscuro;
          editorial = un poco mas claro (la foto se ve mas). */}
      <Image
        src={s.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover grayscale brightness-[.45] transition-transform duration-500 group-hover:scale-105"
      />
      {/* Capa de color (recolorea la foto al tono del servicio) */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: s.color, mixBlendMode: "color", opacity: 0.6 }}
      />
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: s.color, mixBlendMode: "multiply", opacity: 0.5 }}
      />
      {/* Degradado de legibilidad */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/65"
      />

      {/* Top: icono + badge/flecha */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
          {s.logo ? (
            <Image src={s.logo} alt="" width={24} height={24} className="animate-wiggle" />
          ) : (
            s.icon
          )}
        </span>
        {s.star ? (
          <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-black">
            El mas pedido
          </span>
        ) : (
          <span className="text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
            &#8599;
          </span>
        )}
      </div>

      {/* Bottom: titulo + microcopy + tag */}
      <div className="relative z-10">
        <h2
          className={`font-semibold tracking-tight text-white ${
            terminal ? "font-mono" : ""
          } ${s.star ? "text-2xl" : "text-base"}`}
        >
          {title}
        </h2>
        <p
          className={`mt-1 leading-snug text-white/85 ${
            terminal ? "font-mono text-[13px]" : ""
          } ${s.star ? "max-w-md text-base" : "text-sm"}`}
        >
          {s.micro}
        </p>
        <span className="mt-3 inline-block text-xs font-semibold text-white drop-shadow">
          {s.tag}
        </span>
      </div>
    </Link>
  );
}

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
                <ServiceCard key={s.terminalTitle} s={s} />
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
                <ServiceCard key={s.terminalTitle} s={s} terminal />
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
