import type { Metadata } from "next";
import Link from "next/link";
import { Timeline } from "@/components/shared/Timeline";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { StickyWhatsAppBar } from "@/components/shared/StickyWhatsAppBar";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { whatsappUrl, WHATSAPP_MSG_SITIOS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sitios Web y Landing Pages Rapidas | San Luis Potosi",
  description:
    "Sitios y landings rapidos y bien construidos (Next.js / Astro), multilingues si lo necesitas, con metricas reales de rendimiento y SEO. No plantillas genericas.",
  alternates: { canonical: "https://abelardodiaz.dev/sitios-web" },
  openGraph: {
    title: "Sitios Web y Landing Pages | Abelardo Diaz",
    description:
      "Sitios rapidos de verdad, hechos a medida con Next.js o Astro, con buen SEO y metricas que se pueden comprobar.",
    type: "website",
  },
};

const steps = [
  {
    num: "01",
    bin: "0001",
    title: "Entiendo que necesita decir tu sitio",
    desc: "A quien le hablas, que quieres que haga el visitante (comprar, agendar, contactar) y que te diferencia. Un sitio sin objetivo es solo decoracion cara.",
    tag: "Objetivo claro",
  },
  {
    num: "02",
    bin: "0010",
    title: "Lo construyo a medida, no con plantilla",
    desc: "Next.js o Astro segun el caso, con un diseno propio que no se ve generico. Multilingue si vendes en varios paises. Codigo limpio, no un constructor pesado lleno de relleno.",
    tag: "Next.js / Astro",
  },
  {
    num: "03",
    bin: "0011",
    title: "Rapido de verdad y bien indexado",
    desc: "Optimizo para que cargue en serio y para que Google lo entienda: buen SEO tecnico, metadata, sitemap. Te entrego metricas reales de rendimiento, no promesas.",
    tag: "Performance + SEO",
  },
  {
    num: "04",
    bin: "0100",
    title: "Lo publico y te lo entrego",
    desc: "Deploy en infraestructura rapida (Vercel o tu propio servidor), con HTTPS y dominio configurado. Te dejo todo funcionando y la base para crecer cuando quieras.",
    tag: "Deploy + entrega",
  },
];

const includes = [
  {
    area: "Construccion",
    items: [
      "Next.js o Astro segun lo que necesite el proyecto",
      "Diseno propio, no plantilla generica reciclada",
      "Multilingue cuando vendes en varios paises",
      "Componentes a medida (mapas, calculadoras, formularios)",
    ],
  },
  {
    area: "Rendimiento y SEO",
    items: [
      "Carga rapida real (medible con Lighthouse)",
      "SEO tecnico: metadata, sitemap, datos estructurados",
      "Sitios estaticos donde conviene: rapidos y baratos de hostear",
      "Accesibilidad y buenas practicas por defecto",
    ],
  },
  {
    area: "Entrega",
    items: [
      "Deploy en Vercel o en tu propio servidor",
      "HTTPS y dominio configurado",
      "Base lista para que crezca (mas paginas, blog, idiomas)",
      "Documentacion de como esta armado",
    ],
  },
];

const proofs = [
  {
    href: "/projects/weedspayments",
    title: "WeedsPayments",
    desc: "Sitio de marketing multilingue (6 idiomas) en Astro, con mapa de Europa a medida. Lighthouse 99/100/100/100.",
  },
  {
    href: "/projects/simulabnb",
    title: "SimulaBnB",
    desc: "Calculadora fiscal en Next.js, 100% offline e instalable como app (PWA).",
  },
  {
    href: "/projects/portfolio-organico",
    title: "abelardodiaz.dev",
    desc: "Este mismo sitio: Next.js 16, sistema dual de temas, contenido como codigo.",
  },
];

const faqs = [
  {
    q: "Por que no un WordPress o un constructor tipo Wix?",
    a: "Para muchos negocios un constructor sirve. Yo me especializo en sitios donde el rendimiento y el control importan: que carguen rapido de verdad, que posicionen bien y que no dependan de plugins que se rompen. Si lo que necesitas es un blog sencillo, te lo digo y no te vendo de mas.",
  },
  {
    q: "Que tan rapido va a cargar?",
    a: "Lo suficiente para que se note. Trabajo con sitios estaticos y optimizados donde conviene; por ejemplo, uno de mis sitios marca 99/100/100/100 en Lighthouse (rendimiento, accesibilidad, buenas practicas, SEO). Te entrego esas metricas para que las compruebes.",
  },
  {
    q: "Necesito vender en varios idiomas. Se puede?",
    a: "Si, lo hago. Tengo sitios multilingues en produccion (hasta 6 idiomas) con la estructura correcta para que cada idioma posicione por separado en Google. No es solo traducir textos: es hacerlo bien para SEO.",
  },
  {
    q: "Quien hostea el sitio despues?",
    a: "Como prefieras. Puedo dejarlo en Vercel (rapido y con plan gratuito generoso para muchos casos) o en tu propio servidor si ya tienes uno. En ambos casos te entrego todo configurado y documentado.",
  },
  {
    q: "Cuanto cuesta?",
    a: "Depende del tamano del sitio, si es multilingue y que componentes a medida lleva, asi que se cotiza por proyecto. Escribeme por WhatsApp con una idea de lo que necesitas y te paso un numero claro.",
  },
];

export default function SitiosWebPage() {
  const waUrl = whatsappUrl(WHATSAPP_MSG_SITIOS);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* ══════════════════════════════════════ Editorial ══════════════════════════════════════ */}
      <div className="hidden editorial:block">
        {/* Hero */}
        <section className="mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Sitios web
          </span>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-[2.75rem] sm:leading-[1.12]">
            Sitios rapidos de verdad,{" "}
            <br className="hidden sm:block" />
            no plantillas <em className="text-primary">genericas</em>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Construyo sitios y landings a medida con Next.js o Astro: rapidos,
            bien posicionados y con un diseno que no se ve como el de todos.
            Multilingue si vendes en varios paises, con metricas reales que
            puedes comprobar.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "Astro", "Multilingue", "Performance + SEO", "A cotizar"].map(
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

        {/* Includes */}
        <section className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Que incluye
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {includes.map((group) => (
              <div
                key={group.area}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  {group.area}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
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
            Sitios que he construido
          </h2>
          <p className="mb-8 text-xs text-muted-foreground">
            Casos reales, con su detalle tecnico. Echales un ojo.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
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
              Cotizar mi sitio por WhatsApp
            </a>
            <span className="text-sm text-muted-foreground">
              Cuentame que necesitas y te paso un numero claro.
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
              // sitios-web
            </h1>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              web
            </span>
          </div>
          <p className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            Sitios rapidos de verdad, no plantillas genericas
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Construyo sitios y landings a medida con Next.js o Astro: rapidos,
            bien posicionados y con diseno propio. Multilingue si vendes en
            varios paises, con metricas reales que puedes comprobar.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["nextjs", "astro", "multilingue", "performance_seo", "a_cotizar"].map(
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

        {/* Includes */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // que_incluye
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {includes.map((group) => (
              <div
                key={group.area}
                className="rounded-md border border-border bg-card p-5"
              >
                <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
                  # {group.area.toLowerCase().replace(/ /g, "_")}
                </p>
                <ul className="space-y-2 text-[13px] text-muted-foreground">
                  {group.items.map((item) => (
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
              // sitios_construidos
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
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
              ./cotizar_sitio.sh
            </a>
            <span className="text-sm text-muted-foreground">
              cuentame que necesitas y te paso un numero claro
            </span>
          </div>
        </section>
      </div>

      {/* Sticky mobile CTA */}
      <StickyWhatsAppBar
        href={waUrl}
        price="A cotizar"
        note={"Next.js / Astro · Multilingue · SEO"}
        label="Cotizar"
      />
    </div>
  );
}
