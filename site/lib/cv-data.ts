export type CvLocale = "es" | "en";

interface CvProject {
  name: string;
  note?: string;
  dates: string;
  description: string;
  chips: string[];
  url?: string;
}

interface CvJob {
  role: string;
  org: string;
  dates: string;
  summary: string;
  bullets?: string[];
}

interface CvSkillGroup {
  category: string;
  keywords: string;
}

interface CvCert {
  name: string;
  issuer: string;
}

export interface CvData {
  labels: {
    profile: string;
    projects: string;
    experience: string;
    skills: string;
    certifications: string;
    educationLanguages: string;
    print: string;
    pdfHref: string;
    otherLocale: string;
    otherLocaleHref: string;
  };
  name: string;
  title: string;
  location: string;
  summary: string;
  projects: CvProject[];
  jobs: CvJob[];
  skills: CvSkillGroup[];
  certifications: CvCert[];
  education: string;
  languagesLine: string;
}

export const cvData: Record<CvLocale, CvData> = {
  es: {
    labels: {
      profile: "Perfil",
      projects: "Proyectos recientes",
      experience: "Experiencia",
      skills: "Skills",
      certifications: "Certificaciones",
      educationLanguages: "Educacion e idiomas",
      print: "Imprimir / PDF",
      pdfHref: "/abelardo-diaz-cv.pdf",
      otherLocale: "English version",
      otherLocaleHref: "/cv/en",
    },
    name: "Abelardo Diaz Sanchez",
    title: "Full-Stack Developer & AI Agent Architect",
    location: "San Luis Potosi, Mexico",
    summary:
      "Desarrollador full-stack especializado en agentes de IA con Claude. Diseno, construyo y opero sistemas en produccion: agentes conversacionales multicanal (WhatsApp, Telegram, web) con RAG y guardrails, SaaS multi-tenant, ecommerce sincronizado e integraciones con hardware real (CCTV, GPS). Todo corre sobre infraestructura que administro yo mismo: VPS Linux, PostgreSQL, Docker, PM2, Cloudflare. Antes del codigo: 10 anos fundando y operando REDV6, un WISP con clientes 24/7 en zonas rurales de San Luis Potosi.",
    projects: [
      {
        name: "Agente 080",
        note: "en fase beta",
        dates: "2026",
        description:
          "Agente de IA multicanal (WhatsApp, Telegram, web) que no solo responde: razona, decide y ejecuta acciones reales de negocio -- cobranza, ventas, soporte, agendamiento, inventario inmobiliario -- con multiples agentes especialistas, memoria, RAG y guardrails. Autonomia acotada: cada accion tiene limites definidos y es auditable.",
        chips: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Claude API"],
        url: "/projects/agente-080",
      },
      {
        name: "Plataforma interna: Debates IA + Manager",
        note: "uso interno, en produccion",
        dates: "2025-2026",
        description:
          "Dos APIs que gobiernan mi operacion: (1) gateway unificado sobre 8 providers de IA (OpenAI, Gemini, DeepSeek, Grok, Groq, Qwen, Kimi + busqueda web) con conversaciones persistentes, debates multi-IA con consenso automatico, knowledge base que intercepta consultas, auth por proyecto con rotacion de keys y servidor MCP consumible desde Claude Code; (2) project manager centralizado: catalogo y health checks de toda la flota, tracking de progreso git, gestion de Cloudflare (DNS/SSL/cache) con permisos granulares por key, y RAG con pgvector (busqueda hibrida vector + full-text con fusion RRF).",
        chips: ["Python", "PostgreSQL + pgvector", "MCP", "REST APIs", "Cloudflare API"],
        url: "/projects/debates-ia-manager",
      },
      {
        name: "Automatizaciones con n8n",
        note: "en produccion",
        dates: "2025-2026",
        description:
          "Cinco automatizaciones de ciclo completo sobre n8n: captacion y calificacion de prospectos por WhatsApp, clasificador de correo entrante con ruteo polimorfico, parser de reservas de Airbnb, desencriptado y archivo de estados de cuenta bancarios (PDF) y un puente WhatsApp-Telegram auto-sanador. Patterns compartidos: idempotencia, reintentos con backoff, rescate de mensajes atascados y alertas ante fallo.",
        chips: ["n8n", "WhatsApp Business API", "Telegram", "Gmail", "Webhooks"],
        url: "/projects/automatizaciones-n8n",
      },
      {
        name: "Integraciones ecommerce: Shopify + WooCommerce",
        note: "en produccion",
        dates: "2026",
        description:
          "Plugins de WooCommerce a la medida (gateway de pago custom, HPOS, admin UI) y apps/extensiones de Shopify desplegadas con Shopify CLI (Checkout UI Extension en 7 idiomas, metafields via GraphQL). Bridge bidireccional entre plataformas con validacion HMAC y reintentos, gestion de tiendas de clientes via Shopify Partners (OAuth, scopes minimos), pasarelas Stripe y RedSys en produccion, y aprovisionamiento 1-click de tiendas con wp-cli + Cloudflare API sobre flota multi-tenant.",
        chips: ["Shopify (CLI, Admin API)", "WooCommerce", "PHP 8", "Node.js", "Stripe", "RedSys"],
        url: "/projects/integraciones-ecommerce",
      },
      {
        name: "citas-bot-universal",
        note: "open source, MIT",
        dates: "2026",
        description:
          "Template Python para asistentes de citas por WhatsApp con Claude: FastAPI + SQLite + APScheduler. Destilado de un sistema privado en produccion para consultorios medicos; listo para fork-and-deploy.",
        chips: ["Python", "FastAPI", "Anthropic API", "WhatsApp Business API"],
        url: "/projects/citas-bot-universal",
      },
      {
        name: "Video Frame Analyzer",
        dates: "2026",
        description:
          "CLI que extrae frames de video con FFmpeg scene detection, los analiza con Gemini Flash (vision) y genera narrativa con Claude. Pipeline multi-modelo con costo de ~$0.008 USD por video.",
        chips: ["Python", "FFmpeg", "Gemini Vision", "Claude", "Pydantic"],
        url: "/projects/video-frame-analyzer",
      },
      {
        name: "Domus Rentas: SaaS multi-tenant",
        dates: "2025-2026",
        description:
          "Evolucion de un sitio catalogo de casas amuebladas en renta, en produccion, a un SaaS multi-tenant de 9 microservicios poliglota: Django donde conviene, FastAPI donde el tiempo real importa, frontend Next.js como gateway.",
        chips: ["Django", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker"],
        url: "/projects/domus-saas-microservicios",
      },
      {
        name: "Tienda Django Sync",
        dates: "2026",
        description:
          "Ecommerce cuyo verdadero motor no es el storefront: sincronizacion automatica de catalogo, precios, inventario y tipo de cambio contra la API del mayorista Syscom.",
        chips: ["Django", "Next.js", "Celery", "PostgreSQL", "Docker"],
        url: "/projects/tienda-django-sync",
      },
      {
        name: "Call Blocker",
        note: "open source, publicada en F-Droid",
        dates: "2026",
        description:
          "App Android de bloqueo de llamadas no deseadas, publicada en F-Droid (pasa la revision de reproducibilidad y licencias de la tienda). Kotlin + Jetpack Compose + Clean Architecture.",
        chips: ["Kotlin", "Jetpack Compose", "Material 3", "Hilt", "Room"],
        url: "/projects/call-blocker",
      },
    ],
    jobs: [
      {
        role: "Full-Stack Developer & AI Agent Architect",
        org: "Independiente",
        dates: "2024 - actual",
        summary:
          "Desarrollo y opero sistemas de produccion para clientes en Mexico y Europa con un workflow AI-native: desarrollo spec-driven con Claude Code como herramienta principal, skills y comandos reutilizables portables entre proyectos, memoria persistente, integraciones MCP (servidores propios y clientes) y orquestacion de 8 modelos de IA segun costo y contexto. Ciclo completo: arquitectura, implementacion, deploy y operacion en servidores propios, con pipeline de publicacion segura (gitleaks + sanitizacion propia). Ademas de los proyectos seleccionados: backends de videovigilancia (Hikvision ISAPI, 19 endpoints REST) y fleet tracking GPS (Tracksolid, 26 endpoints), verificados contra hardware real de mi propia operacion.",
      },
      {
        role: "Fundador y Director Tecnico",
        org: "REDV6 (WISP)",
        dates: "2015 - actual",
        summary:
          "Proveedor de internet inalambrico para comunidades rurales de SLP no atendidas por grandes operadores. Operacion 24/7 con clientes residenciales y PYMES.",
        bullets: [
          "Enlaces punto a punto de larga distancia en 2.4/5/60 GHz (Cambium, MikroTik, Altai).",
          "Redes empresariales, WiFi de supercobertura, conmutadores IP, CCTV y rastreo GPS de flotillas.",
          "Sistemas de respaldo de energia solar para sitios remotos.",
          "Hoy es el laboratorio de hardware real contra el que verifico mis integraciones de software.",
        ],
      },
      {
        role: "Ejecutivo de Ventas",
        org: "AT&T Mexico",
        dates: "2013 - 2015",
        summary: "Venta consultiva de servicios de tecnologia e internet a empresas.",
      },
      {
        role: "Ejecutivo de Ventas",
        org: "Axtel Telecomunicaciones",
        dates: "2010 - 2013",
        summary: "Venta consultiva de servicios de tecnologia e internet a empresas.",
      },
      {
        role: "Consultor en Marketing Digital y Negocios en Linea",
        org: "Consultoria e Internet para Empresas (franquicia WSI)",
        dates: "2005 - 2010",
        summary:
          "Consultoria de mercadotecnia digital y desarrollo de negocios en linea para PYMES bajo la metodologia de la franquicia internacional WSI.",
      },
      {
        role: "Instructor de Informatica y Redes",
        org: "Tec. en Sistemas (Salinas de Hidalgo) / Inst. Quetzal (Zacatecas)",
        dates: "2001 - 2003",
        summary:
          "Clases de redes LAN, Windows 2000 Server, Linux (Red Hat 8, Mandrake 9); ensamblado y mantenimiento de equipo.",
      },
    ],
    skills: [
      { category: "Lenguajes", keywords: "Python, TypeScript, SQL, Kotlin (Android)" },
      {
        category: "IA y agentes",
        keywords:
          "Claude API (agents, tool use), Claude Code, MCP (servidores y clientes), RAG (pgvector, busqueda hibrida), orquestacion multi-provider (8 modelos), spec-driven development, Whisper, Gemini Vision, context engineering",
      },
      {
        category: "Backend",
        keywords:
          "FastAPI, Django, Flask, Celery, Redis, PostgreSQL, n8n (automatizacion de workflows), WhatsApp Business API, webhooks (HMAC, retry queues), Stripe, RedSys, Shopify (Admin API, CLI, Partners), WooCommerce (plugins a la medida, HPOS)",
      },
      { category: "Frontend", keywords: "Next.js, React, Tailwind CSS, Astro" },
      {
        category: "Infra / DevSecOps",
        keywords:
          "Linux (VPS propios), Docker, PM2, Cloudflare, Vercel, GitHub Actions, gitleaks + sanitizacion pre-publicacion",
      },
    ],
    certifications: [
      { name: "MTCNA - Network Associate", issuer: "MikroTik, 2018" },
      { name: "MTCRE - Routing Engineer", issuer: "MikroTik, 2018" },
      { name: "ePMP - Enlaces inalambricos", issuer: "Cambium Networks, 2018" },
      { name: "Supercobertura WiFi", issuer: "Altai Technologies, 2018" },
    ],
    education:
      "Ingenieria en Sistemas Computacionales -- Instituto Tecnologico de Zacatecas (cursada parcialmente), 2000-2004",
    languagesLine: "Espanol: nativo · Ingles: tecnico -- lectura fluida, conversacion funcional",
  },
  en: {
    labels: {
      profile: "Profile",
      projects: "Recent projects",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      educationLanguages: "Education & languages",
      print: "Print / PDF",
      pdfHref: "/abelardo-diaz-cv-en.pdf",
      otherLocale: "Version en espanol",
      otherLocaleHref: "/cv",
    },
    name: "Abelardo Diaz Sanchez",
    title: "Full-Stack Developer & AI Agent Architect",
    location: "San Luis Potosi, Mexico",
    summary:
      "Full-stack developer specialized in AI agents built on Claude. I design, build, and operate production systems: multichannel conversational agents (WhatsApp, Telegram, web) with RAG and guardrails, multi-tenant SaaS, synced ecommerce, and integrations with real hardware (CCTV, GPS). Everything runs on infrastructure I manage myself: Linux VPS, PostgreSQL, Docker, PM2, Cloudflare. Before code: 10 years founding and operating REDV6, a WISP serving rural communities in San Luis Potosi, Mexico, 24/7.",
    projects: [
      {
        name: "Agente 080",
        note: "in beta",
        dates: "2026",
        description:
          "Multichannel AI agent (WhatsApp, Telegram, web) that goes beyond replying: it reasons, decides, and executes real business actions -- collections, sales, support, scheduling, real-estate inventory -- with multiple specialist agents, memory, RAG, and guardrails. Bounded autonomy: every action has defined limits and is auditable.",
        chips: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Claude API"],
        url: "/projects/agente-080",
      },
      {
        name: "Internal platform: Debates IA + Manager",
        note: "internal use, in production",
        dates: "2025-2026",
        description:
          "Two APIs that govern my operation: (1) a unified gateway over 8 AI providers (OpenAI, Gemini, DeepSeek, Grok, Groq, Qwen, Kimi + web search) with persistent conversations, multi-AI debates with automatic consensus, a knowledge base that intercepts queries, per-project auth with key rotation, and an MCP server consumable from Claude Code; (2) a centralized project manager: fleet-wide catalog and health checks, git progress tracking, Cloudflare management (DNS/SSL/cache) with granular per-key permissions, and RAG on pgvector (hybrid vector + full-text search with RRF fusion).",
        chips: ["Python", "PostgreSQL + pgvector", "MCP", "REST APIs", "Cloudflare API"],
        url: "/projects/debates-ia-manager",
      },
      {
        name: "n8n automations",
        note: "in production",
        dates: "2025-2026",
        description:
          "Five full-cycle automations built on n8n: WhatsApp lead capture and qualification, inbound email classifier with polymorphic routing, Airbnb reservation parser, password-protected bank statement (PDF) decryption and filing, and a self-healing WhatsApp-to-Telegram bridge. Shared patterns: idempotency, retries with backoff, stuck-message rescue, and failure alerting.",
        chips: ["n8n", "WhatsApp Business API", "Telegram", "Gmail", "Webhooks"],
        url: "/projects/automatizaciones-n8n",
      },
      {
        name: "Ecommerce integrations: Shopify + WooCommerce",
        note: "in production",
        dates: "2026",
        description:
          "Custom WooCommerce plugins (custom payment gateway, HPOS, admin UI) and Shopify apps/extensions deployed with Shopify CLI (Checkout UI Extension in 7 languages, metafields via GraphQL). Bidirectional cross-platform bridge with HMAC validation and retries, client store management via Shopify Partners (OAuth, minimal scopes), Stripe and RedSys payment gateways in production, and 1-click store provisioning with wp-cli + Cloudflare API over a multi-tenant fleet.",
        chips: ["Shopify (CLI, Admin API)", "WooCommerce", "PHP 8", "Node.js", "Stripe", "RedSys"],
        url: "/projects/integraciones-ecommerce",
      },
      {
        name: "citas-bot-universal",
        note: "open source, MIT",
        dates: "2026",
        description:
          "Python template for WhatsApp appointment assistants built on Claude: FastAPI + SQLite + APScheduler. Distilled from a private production system for medical practices; ready to fork and deploy.",
        chips: ["Python", "FastAPI", "Anthropic API", "WhatsApp Business API"],
        url: "/projects/citas-bot-universal",
      },
      {
        name: "Video Frame Analyzer",
        dates: "2026",
        description:
          "CLI that extracts video frames with FFmpeg scene detection, analyzes them with Gemini Flash (vision), and generates a narrative with Claude. Multi-model pipeline at ~$0.008 USD per video.",
        chips: ["Python", "FFmpeg", "Gemini Vision", "Claude", "Pydantic"],
        url: "/projects/video-frame-analyzer",
      },
      {
        name: "Domus Rentas: multi-tenant SaaS",
        dates: "2025-2026",
        description:
          "Evolution of a production catalog site for furnished rental homes into a multi-tenant SaaS built as 9 polyglot microservices: Django where it fits, FastAPI where real time matters, and a Next.js frontend acting as gateway.",
        chips: ["Django", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker"],
        url: "/projects/domus-saas-microservicios",
      },
      {
        name: "Tienda Django Sync",
        dates: "2026",
        description:
          "Ecommerce whose real engine is not the storefront: automatic sync of catalog, prices, inventory, and exchange rate against the Syscom wholesaler API.",
        chips: ["Django", "Next.js", "Celery", "PostgreSQL", "Docker"],
        url: "/projects/tienda-django-sync",
      },
      {
        name: "Call Blocker",
        note: "open source, published on F-Droid",
        dates: "2026",
        description:
          "Android app for blocking unwanted calls, published on F-Droid (passes the store's reproducibility and licensing review). Kotlin + Jetpack Compose + Clean Architecture.",
        chips: ["Kotlin", "Jetpack Compose", "Material 3", "Hilt", "Room"],
        url: "/projects/call-blocker",
      },
    ],
    jobs: [
      {
        role: "Full-Stack Developer & AI Agent Architect",
        org: "Independent",
        dates: "2024 - present",
        summary:
          "I build and operate production systems for clients in Mexico and Europe with an AI-native workflow: spec-driven development with Claude Code as my primary tool, reusable skills and commands portable across projects, persistent memory, MCP integrations (own servers and clients), and orchestration of 8 AI models by cost and context. Full cycle: architecture, implementation, deployment, and operations on my own servers, with a secure publication pipeline (gitleaks + custom sanitization). Beyond the selected projects: video surveillance backends (Hikvision ISAPI, 19 REST endpoints) and GPS fleet tracking (Tracksolid, 26 endpoints), verified against real hardware from my own operation.",
      },
      {
        role: "Founder & Technical Director",
        org: "REDV6 (WISP)",
        dates: "2015 - present",
        summary:
          "Wireless ISP bringing connectivity to rural communities in San Luis Potosi underserved by major carriers. 24/7 operations with residential and SMB customers.",
        bullets: [
          "Design and operation of long-distance point-to-point links at 2.4/5/60 GHz (Cambium, MikroTik, Altai).",
          "Enterprise networks, high-coverage WiFi, IP PBX systems, CCTV, and GPS fleet tracking.",
          "Off-grid solar backup power systems for remote sites.",
          "Today it serves as the real-hardware lab where I verify my software integrations.",
        ],
      },
      {
        role: "Sales Executive",
        org: "AT&T Mexico",
        dates: "2013 - 2015",
        summary: "Consultative sales of technology and internet services to businesses.",
      },
      {
        role: "Sales Executive",
        org: "Axtel Telecomunicaciones",
        dates: "2010 - 2013",
        summary: "Consultative sales of technology and internet services to businesses.",
      },
      {
        role: "Digital Marketing & Online Business Consultant",
        org: "Consultoria e Internet para Empresas (WSI franchise)",
        dates: "2005 - 2010",
        summary:
          "Digital marketing consulting and online business development for SMBs under the international WSI franchise methodology.",
      },
      {
        role: "IT & Networking Instructor",
        org: "Tec. en Sistemas (Salinas de Hidalgo) / Inst. Quetzal (Zacatecas)",
        dates: "2001 - 2003",
        summary:
          "Taught LAN networking, Windows 2000 Server, and Linux (Red Hat 8, Mandrake 9); PC assembly and maintenance.",
      },
    ],
    skills: [
      { category: "Languages", keywords: "Python, TypeScript, SQL, Kotlin (Android)" },
      {
        category: "AI & agents",
        keywords:
          "Claude API (agents, tool use), Claude Code, MCP (servers and clients), RAG (pgvector, hybrid search), multi-provider orchestration (8 models), spec-driven development, Whisper, Gemini Vision, context engineering",
      },
      {
        category: "Backend",
        keywords:
          "FastAPI, Django, Flask, Celery, Redis, PostgreSQL, n8n (workflow automation), WhatsApp Business API, webhooks (HMAC, retry queues), Stripe, RedSys, Shopify (Admin API, CLI, Partners), WooCommerce (custom plugins, HPOS)",
      },
      { category: "Frontend", keywords: "Next.js, React, Tailwind CSS, Astro" },
      {
        category: "Infra / DevSecOps",
        keywords:
          "Linux (self-hosted VPS), Docker, PM2, Cloudflare, Vercel, GitHub Actions, gitleaks + pre-publication sanitization",
      },
    ],
    certifications: [
      { name: "MTCNA - Network Associate", issuer: "MikroTik, 2018" },
      { name: "MTCRE - Routing Engineer", issuer: "MikroTik, 2018" },
      { name: "ePMP - Wireless links", issuer: "Cambium Networks, 2018" },
      { name: "Super-coverage WiFi", issuer: "Altai Technologies, 2018" },
    ],
    education:
      "Computer Systems Engineering -- Instituto Tecnologico de Zacatecas (partial coursework), 2000-2004",
    languagesLine: "Spanish: native · English: technical -- fluent reading, working conversation",
  },
};
