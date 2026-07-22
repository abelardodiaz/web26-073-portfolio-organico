// Registro de paginas estaticas para el buscador (/search).
// El texto de estas paginas vive en componentes TSX, asi que el indice no puede
// leerlo solo: al cambiar fuerte una pagina, actualizar su resumen aqui.

export type StaticPageEntry = {
  title: string;
  href: string;
  stack: string[];
  excerpt: string;
  body: string;
};

export const staticPages: StaticPageEntry[] = [
  {
    title: "Inicio",
    href: "/",
    stack: ["portfolio"],
    excerpt: "Full-Stack Developer & AI Agent Architect. Proyectos, TILs, blog y servicios.",
    body: "Abelardo Diaz. Full-Stack Developer y AI Agent Architect basado en San Luis Potosi, Mexico. Agentes de IA con Claude, SaaS multi-tenant, ecommerce e infraestructura propia. Proyectos destacados, TIL, blog, recursos y servicios.",
  },
  {
    title: "About",
    href: "/about",
    stack: ["perfil"],
    excerpt: "Full-Stack Developer & AI Agent Architect basado en Mexico.",
    body: "Sobre mi: desarrollador full-stack especializado en agentes de IA con Claude. Sistemas en produccion sobre VPS Linux propios: PostgreSQL, Docker, PM2, Cloudflare. Fundador de REDV6, WISP en zonas rurales de San Luis Potosi. Trabajemos juntos: contacto y CV.",
  },
  {
    title: "CV",
    href: "/cv",
    stack: ["curriculum", "pdf"],
    excerpt: "CV completo en espanol e ingles, con version PDF descargable.",
    body: "", // el contenido real se genera desde cv-data en search.ts
  },
  {
    title: "Servicios",
    href: "/servicios",
    stack: ["consultoria", "slp"],
    excerpt: "Diagnostico IA, asistentes OpenClaw, automatizacion, VPS y sitios web.",
    body: "Servicios de IA y automatizacion en San Luis Potosi: diagnostico de IA, asistentes OpenClaw 24/7, automatizacion de procesos, despliegue y preparacion de servidores VPS, sitios web y landing pages tecnicas para empresas y negocios.",
  },
  {
    title: "Diagnostico IA",
    href: "/diagnostico-ia",
    stack: ["ia", "consultoria"],
    excerpt: "Encuentro donde tu empresa pierde tiempo y como resolverlo con IA.",
    body: "Diagnostico IA para tu negocio en San Luis Potosi. Consultoria de inteligencia artificial: identifico oportunidades de automatizacion, donde se pierde tiempo, y entrego un reporte con pasos concretos. Diagnostico express.",
  },
  {
    title: "OpenClaw SLP",
    href: "/openclaw-slp",
    stack: ["openclaw", "asistentes"],
    excerpt: "Asistente de IA que trabaja por tu negocio 24/7, configurado profesionalmente.",
    body: "OpenClaw en San Luis Potosi: configuracion profesional de un asistente de IA que responde clientes, organiza emails, genera reportes, agenda y trabaja 24/7 por tu negocio.",
  },
  {
    title: "Automatizacion de Procesos",
    href: "/automatizacion-procesos",
    stack: ["automatizacion", "n8n"],
    excerpt: "Identifico la tarea que te come el dia y la dejo corriendo sola.",
    body: "Automatizacion de procesos para tu negocio en San Luis Potosi: identifico que tarea manual te come el dia, diseno la automatizacion correcta, la conecto a tus sistemas reales (WhatsApp, correo, hojas de calculo, APIs) y la dejo corriendo y monitoreada.",
  },
  {
    title: "Despliegue VPS",
    href: "/despliegue-vps",
    stack: ["vps", "linux", "devops"],
    excerpt: "Tu servidor en produccion, seguro y respaldado: hardening, SSL, backups.",
    body: "Despliegue y preparacion de servidores VPS: levanto, aseguro y dejo en produccion tu servidor. Hardening, certificados SSL, backups automaticos, monitoreo. El mismo proceso que corre en produccion con decenas de sitios propios.",
  },
  {
    title: "Sitios Web",
    href: "/sitios-web",
    stack: ["nextjs", "landing"],
    excerpt: "Sitios y landing pages rapidas, a medida, bien indexadas.",
    body: "Sitios web y landing pages rapidas en San Luis Potosi: construidos a medida con Next.js (no plantillas), rapidos de verdad, bien indexados en buscadores, publicados y entregados.",
  },
  {
    title: "Recursos",
    href: "/recursos",
    stack: ["herramientas", "librerias"],
    excerpt: "Librerias, herramientas y servicios utiles, con ejemplos.",
    body: "Recursos: catalogo de librerias, herramientas y servicios que uso, cada uno con su TIL de ejemplo practico y micro-repos demo cuando aplica.",
  },
  {
    title: "Contacto",
    href: "/contact",
    stack: ["contacto"],
    excerpt: "Contacto para proyectos de consultoria y colaboracion.",
    body: "Contacto para proyectos, consultoria y colaboracion: correo y WhatsApp.",
  },
];
