import type { Metadata } from "next";
import Link from "next/link";
import { Timeline } from "@/components/shared/Timeline";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { StickyWhatsAppBar } from "@/components/shared/StickyWhatsAppBar";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { ArtVps } from "@/components/shared/ServiceArt";
import { whatsappUrl, WHATSAPP_MSG_VPS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Despliegue y Preparacion de Servidores VPS | San Luis Potosi",
  description:
    "Levanto, aseguro y dejo en produccion tu servidor VPS: hardening, SSL, backups automaticos y monitoreo. El mismo proceso que corre en produccion con decenas de sitios.",
  alternates: { canonical: "https://abelardodiaz.dev/despliegue-vps" },
  openGraph: {
    title: "Despliegue y Preparacion de Servidores VPS | Abelardo Diaz",
    description:
      "Tu servidor en produccion, seguro y respaldado, sin que tengas que aprender sysadmin. Hardening, SSL, backups y monitoreo.",
    type: "website",
  },
};

const steps = [
  {
    num: "01",
    bin: "0001",
    title: "Reviso que necesitas y preparo el servidor",
    desc: "Me dices que vas a correr (sitio, app, base de datos) y elijo el tamano correcto. Si ya tienes VPS, lo tomo como esta; si no, te ayudo a contratar el adecuado sin pagar de mas.",
    tag: "Cualquier proveedor",
  },
  {
    num: "02",
    bin: "0010",
    title: "Aseguro el servidor desde el primer minuto",
    desc: "SSH solo con llaves, firewall, bloqueo de ataques automaticos y red privada entre servidores. Cierro las puertas que los bots tocan todo el dia antes de que tu servidor este expuesto.",
    tag: "Hardening base",
  },
  {
    num: "03",
    bin: "0011",
    title: "Instalo tu stack y publico con HTTPS",
    desc: "Nginx, PHP, Node.js, Docker, la base de datos que toque. Tu sitio o app queda en linea con certificado SSL valido y configuracion de seguridad que aguanta scanners y bots.",
    tag: "Deploy + SSL",
  },
  {
    num: "04",
    bin: "0100",
    title: "Respaldos, monitoreo y te lo entrego",
    desc: "Backups automaticos diarios (local + copia fuera del servidor), alertas de disco y memoria, y un documento claro de como esta armado todo. Si algo falla, hay de donde restaurar.",
    tag: "Backups + entrega",
  },
];

const includes = [
  {
    area: "Acceso y red",
    items: [
      "SSH solo con llaves (ed25519), acceso por contrasena deshabilitado",
      "Firewall configurado (solo los puertos que de verdad necesitas)",
      "Fail2ban: bloqueo automatico de intentos de intrusion",
      "Red privada (VPN WireGuard) cuando hay varios servidores",
    ],
  },
  {
    area: "Aplicacion y SSL",
    items: [
      "Ubuntu 26.04 LTS como base por defecto",
      "Stack a medida: Nginx, PHP-FPM, Node.js, Docker, PostgreSQL o MariaDB",
      "Certificado SSL Let's Encrypt con renovacion automatica",
      "Separacion web / base de datos cuando el proyecto lo amerita",
    ],
  },
  {
    area: "Endurecimiento web",
    items: [
      "Headers de seguridad OWASP (HSTS, CSP, anti-clickjacking)",
      "Bloqueo de scanners (sqlmap, nikto, nmap) y rutas peligrosas",
      "Bloqueo de crawlers de IA y robots.txt / security.txt",
      "Proteccion anti-slowloris y limites de peticiones",
    ],
  },
  {
    area: "Respaldo y operacion",
    items: [
      "Backups automaticos diarios de archivos y bases de datos",
      "Copia fuera del servidor (almacenamiento offsite tipo S3)",
      "Rotacion de respaldos (varios diarios + semanales)",
      "Alertas de disco y memoria + documento de como quedo todo",
    ],
  },
];

const faqs = [
  {
    q: "Ya tengo un VPS contratado. Sirve igual?",
    a: "Si. Trabajo sobre tu servidor actual sin importar el proveedor (OVH, Hetzner, DigitalOcean, Vultr, AWS, etc.). Si todavia no lo tienes, te ayudo a elegir el tamano correcto para no pagar por recursos que no vas a usar.",
  },
  {
    q: "Necesito saber de Linux o servidores?",
    a: "No. Esa es justo la idea: tu te dedicas a tu negocio y yo dejo el servidor seguro, publicado y respaldado. Te entrego un documento claro de como quedo armado por si en el futuro alguien mas le da mantenimiento.",
  },
  {
    q: "Que pasa si el servidor se cae o lo hackean?",
    a: "El objetivo del trabajo es prevenir las dos cosas: hardening para reducir el riesgo de intrusion, y backups automaticos fuera del servidor para que, si algo falla, haya de donde restaurar. Tambien dejo alertas para enterarte antes de que sea un problema grave.",
  },
  {
    q: "Esto aguanta si mi proyecto crece?",
    a: "Si. El mismo proceso que aplico a un solo servidor es el que corre en produccion administrando decenas de sitios a la vez, con scripts automatizados. Empiezas con lo que necesitas hoy y escala cuando haga falta.",
  },
  {
    q: "Cuanto cuesta?",
    a: "Depende de que vas a correr y cuantos servicios necesitas asegurar, asi que se cotiza por proyecto. Escribeme por WhatsApp con una idea de lo que necesitas y te paso un numero claro, sin sorpresas.",
  },
];

export default function DespliegueVpsPage() {
  const waUrl = whatsappUrl(WHATSAPP_MSG_VPS);

  return (
    <div className="relative">
      <div aria-hidden className="hero-bg" />
      <div className="relative mx-auto max-w-5xl px-4 py-16">
      {/* ══════════════════════════════════════ Editorial ══════════════════════════════════════ */}
      <div className="hidden editorial:block">
        {/* Hero */}
        <section className="relative mb-16">
          <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 text-primary/70 lg:block">
            <ArtVps className="size-48" />
          </div>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Infraestructura
          </span>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-[2.75rem] sm:leading-[1.12]">
            Tu servidor en produccion,{" "}
            <br className="hidden sm:block" />
            seguro y respaldado, sin que{" "}
            <em className="text-primary">aprendas sysadmin</em>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Levanto tu VPS, lo aseguro contra los ataques que los bots intentan
            todo el dia, publico tu sitio o app con HTTPS y dejo respaldos
            automaticos corriendo. Tu te dedicas a tu negocio; el servidor queda
            en buenas manos.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Cualquier proveedor", "Hardening completo", "Backups automaticos", "A cotizar"].map(
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
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Que incluye
          </h2>
          <p className="mb-8 text-xs text-muted-foreground">
            El checklist real que aplico. No es una lista de marketing: es lo que
            queda configurado en tu servidor.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
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

        {/* Proof / scale */}
        <section className="mb-16">
          <div className="rounded-lg border border-primary/30 bg-card p-8">
            <h2 className="mb-3 font-semibold tracking-tight">
              No es teoria: corre en produccion
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Este mismo proceso de preparacion y hardening es el que administra
              en produccion <strong className="font-medium text-foreground">decenas
              de sitios reales en un solo servidor</strong>, con scripts que
              aplican la seguridad de forma consistente y respaldos rotando todos
              los dias. Lo que recibes para tu proyecto es la version probada de
              algo que ya opera a escala.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <FaqAccordion faqs={faqs} />
        </section>

        {/* Mini bio */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            Quien lo hace
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Soy Abelardo Diaz, ingeniero de automatizacion e infraestructura.
            Administro servidores de produccion para e-commerce y aplicaciones,
            donde un servidor caido o inseguro cuesta dinero real. Puedes ver mas
            de mi trabajo en{" "}
            <Link
              href="/projects"
              className="font-medium text-primary hover:underline"
            >
              mis proyectos
            </Link>{" "}
            o conocer{" "}
            <Link
              href="/servicios"
              className="font-medium text-primary hover:underline"
            >
              mis otros servicios
            </Link>
            .
          </p>
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
              Cotizar mi servidor por WhatsApp
            </a>
            <span className="text-sm text-muted-foreground">
              Cuentame que vas a correr y te paso un numero claro.
            </span>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════ Terminal ══════════════════════════════════════ */}
      <div className="hidden terminal:block">
        {/* Hero */}
        <section className="relative mb-14">
          <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 text-primary/55 lg:block">
            <ArtVps className="size-44" />
          </div>
          <div className="mb-6 flex items-center gap-3">
            <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // despliegue-vps
            </h1>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              infra
            </span>
          </div>
          <p className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            Tu servidor en produccion, seguro y respaldado,{" "}
            <br className="hidden sm:block" />
            sin que aprendas sysadmin
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Levanto tu VPS, lo aseguro contra los ataques que los bots intentan
            todo el dia, publico tu sitio o app con HTTPS y dejo respaldos
            automaticos corriendo. Tu te dedicas a tu negocio.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["cualquier_proveedor", "hardening", "backups_auto", "a_cotizar"].map(
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
          <p className="mb-6 font-mono text-[11px] text-muted-foreground">
            <span className="text-primary/60">// </span>
            checklist real, no marketing: esto queda configurado en tu servidor
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
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

        {/* Proof / scale */}
        <section className="mb-14">
          <div className="rounded-md border border-primary/40 bg-card p-6">
            <p className="mb-2 font-mono text-sm font-semibold">
              // no_es_teoria: corre_en_produccion
            </p>
            <p className="max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
              Este mismo proceso de hardening administra en produccion{" "}
              <strong className="font-medium text-foreground">
                decenas de sitios reales en un solo servidor
              </strong>
              , con scripts que aplican la seguridad de forma consistente y
              respaldos rotando todos los dias. Recibes la version probada de
              algo que ya opera a escala.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <FaqAccordion faqs={faqs} />
        </section>

        {/* Mini bio */}
        <section className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              // quien
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Soy Abelardo Diaz, ingeniero de automatizacion e infraestructura.
            Administro servidores de produccion para e-commerce y aplicaciones,
            donde un servidor caido o inseguro cuesta dinero real. Mira mi
            trabajo en{" "}
            <Link
              href="/projects"
              className="font-medium text-primary hover:underline"
            >
              /proyectos
            </Link>{" "}
            o mis{" "}
            <Link
              href="/servicios"
              className="font-medium text-primary hover:underline"
            >
              /servicios
            </Link>
            .
          </p>
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
              ./cotizar_servidor.sh
            </a>
            <span className="text-sm text-muted-foreground">
              cuentame que vas a correr y te paso un numero claro
            </span>
          </div>
        </section>
      </div>

      {/* Sticky mobile CTA */}
      <StickyWhatsAppBar
        href={waUrl}
        price="A cotizar"
        note={"Cualquier proveedor · Hardening + backups"}
        label="Cotizar"
      />
      </div>
    </div>
  );
}
