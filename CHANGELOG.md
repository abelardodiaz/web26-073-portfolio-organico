# Changelog

All notable changes to this project will be documented in this file.

## [0.29.0] - 2026-07-22

### Added
- Pagina de proyecto: "Integraciones ecommerce: Shopify, WooCommerce y
  pasarelas de pago" (categoria portfolio, featured, 2 diagramas Mermaid).
  Bridge Shopify-WC, plugins WooCommerce a la medida, extensiones con Shopify
  CLI, gestion de clientes via Shopify Partners, Stripe/RedSys (incl. el caso
  callback RedSys vs proxy Cloudflare) y aprovisionamiento 1-click de flota.
  Fuente sanitizada: proyecto hermano 602 (sin clientes, dominios ni sector).
- CV (ES/EN): proyecto "Integraciones ecommerce" en posicion 4 + skills
  Backend ampliados (RedSys, Shopify Admin API/CLI/Partners, WooCommerce
  plugins a la medida/HPOS). PDFs regenerados; borradores docs/cv/ sincronizados.

## [0.28.2] - 2026-07-22

### Added
- CV (ES/EN): proyecto "Automatizaciones con n8n" / "n8n automations" con link
  al case study, y n8n en skills de Backend. PDFs regenerados (ahora 3 paginas).
  Borradores locales docs/cv/ sincronizados (cv.html, cv-en.html, cv.json).

## [0.28.1] - 2026-07-22

### Changed
- debates-ia-manager: diagrama ASCII de arquitectura convertido a Mermaid
  (agentes -> Debates IA / Manager con features por caja).

## [0.28.0] - 2026-07-22

### Added
- Pagina de proyecto: "Automatizaciones con n8n" (categoria portfolio,
  featured). Cinco automatizaciones en produccion con diagramas Mermaid:
  captacion de prospectos por WhatsApp, clasificador de correo, parser de
  Airbnb, parser de estados de cuenta bancarios (PDF) y puente
  WhatsApp-Telegram auto-sanador. Fuente: resumen sanitizado del proyecto
  058 (server005).
- Soporte de diagramas Mermaid en MDX: componente cliente Mermaid.tsx
  (carga dinamica, tema dark/light) + deteccion de bloques ```mermaid en
  MdxContent.tsx.

## [0.27.3] - 2026-07-20

### Changed
- gmail-mcp-config de regreso a categoria tools (decision final: es micro-repo
  de herramientas, no case study; vive en /projects y categoria/tools).

## [0.27.2] - 2026-07-20

### Changed
- gmail-mcp-config movido de categoria tools a portfolio (el nav Proyectos
  apunta a categoria/portfolio; en tools quedaba invisible desde el menu).

## [0.27.1] - 2026-07-20

### Changed
- CV: la entrada de la plataforma interna ahora se llama "Plataforma interna:
  Debates IA + Manager" y linkea a su case study /projects/debates-ia-manager
  (web ES/EN, HTMLs sobrios y PDFs regenerados).

## [0.27.0] - 2026-07-20

### Added
- Pagina de proyecto: "Plataforma interna: Debates IA + Manager" (categoria
  portfolio, featured). Case study combinado y sanitizado de las dos APIs
  internas: gateway multi-IA (debates con consenso, KB interceptora, ciclos de
  automejora, MCP server, keys por proyecto) y manager de flota (health checks,
  progreso git, Cloudflare con permisos por key, RAG pgvector HNSW + RRF).
  Sin codigos internos, IPs ni hostnames; capacidades, no infraestructura.

## [0.26.0] - 2026-07-20

### Added
- Pagina de proyecto: "Gmail MCP Config: multi-cuenta para agentes" (categoria
  tools, micro-repo publico web26-091-gmail-mcp-config). Truco HOME alterno por
  instancia, skill enviar-correos publicada y fallback JSON-RPC; roadmap
  Calendar/Drive multi-cuenta.

## [0.25.4] - 2026-07-20

### Changed
- About: link al CV en linea (/cv, es/en + pdf) en la seccion Trabajemos,
  variantes editorial y terminal.

## [0.25.3] - 2026-07-20

### Fixed
- **Fecha de educacion corregida**: Ingenieria en Sistemas (ITZ) es 2000-2004, no
  1997-2000 (1997-2000 fue preparatoria). Corregido en cv-data.ts (ES/EN),
  docs/cv/*.html, cv.json y PDFs regenerados.

## [0.25.2] - 2026-07-20

### Changed
- **Boton del CV ahora abre PDF real**: PDFs sobrios generados del HTML standalone
  de docs/cv (ES y EN, Playwright de WSL) servidos desde site/public
  (/abelardo-diaz-cv.pdf y /abelardo-diaz-cv-en.pdf). El boton Imprimir/PDF es un
  link con icono de impresora que abre el PDF (se elimina window.print y
  PrintButton). docs/cv actualizado: cv.html al dia + cv-en.html nuevo.

## [0.25.1] - 2026-07-20

### Changed
- **CV siempre en modo claro**: componente ForceLightMode quita la clase dark al
  entrar a /cv o /cv/en (script inline sin flash) y restaura la preferencia del
  usuario al salir.

## [0.25.0] - 2026-07-20

### Added
- **CV online bilingue**: nuevas rutas `/cv` (espanol) y `/cv/en` (ingles), estaticas,
  con diseno sobrio imprimible (boton Print/PDF, print CSS que oculta header/footer).
  Contenido en `site/lib/cv-data.ts` (fuente unica ES/EN), vista compartida
  `components/cv/CvView.tsx`. Entrada "CV" visible en el menu del Header y rutas
  agregadas al sitemap. 8 proyectos seleccionados + experiencia completa (REDV6,
  WSI, AT&T/Axtel, docencia) + certificaciones MikroTik/Cambium/Altai.
- **Borrador local del CV** en `docs/cv/` (`cv.json` formato JSON Resume como fuente
  de verdad + `cv.html` standalone imprimible).

### Fixed
- **pnpm 11.14**: `pnpm-workspace.yaml` con `allowBuilds` explicito (msw, sharp,
  unrs-resolver en false) — el campo `pnpm` de package.json ya no se lee y el dep
  nuevo `msw` bloqueaba `pnpm build` con ERR_PNPM_IGNORED_BUILDS.

## [0.24.1] - 2026-06-26

### Added
- **StickyWhatsAppBar (CTA flotante movil) extendido** a mas paginas. Antes solo
  estaba en 4 landings de servicio; no aparecia al navegar el portfolio. Ahora
  tambien en: `/openclaw-slp` (completa las 5 landings), hub `/servicios`, Home,
  y las paginas de proyectos (`/projects`, `/projects/categoria/[tag]`,
  `/projects/[slug]`). Sigue siendo `sm:hidden` (solo movil) y aparece al scroll.
  Mensaje de WhatsApp contextual: `WHATSAPP_MSG_GENERAL` en proyectos/home,
  `WHATSAPP_MSG_SERVICIOS` en el hub. Excluido a proposito de contenido (TIL/blog).

## [0.24.0] - 2026-06-25

### Added
- **Catalogo de servicios**: nueva pagina `/servicios` como hub real (antes el menu
  "Servicios" apuntaba directo a `/diagnostico-ia`, una sola oferta). El menu del
  Header ahora apunta a `/servicios`.
- **3 landings de servicio nuevas** (editorial + terminal, reusan Timeline/FaqAccordion/
  StickyWhatsAppBar):
  - `/despliegue-vps` (Despliegue VPS): checklist real de hardening derivado del proceso
    de produccion del proyecto 602, sanitizado (sin IPs/dominios/hostnames/codigos).
    Ubuntu 26.04 LTS como base por defecto.
  - `/automatizacion-procesos`: bots, n8n, CRM/ERP; prueba con proyectos reales
    (agente-080, citas-bot-universal, tienda-django-sync, flask-survey-referral).
  - `/sitios-web`: Next.js/Astro; prueba con weedspayments, simulabnb, este portfolio.
- **Blog**: guia general de preparacion/hardening de VPS de produccion
  (`/blog/preparar-vps-produccion-hardening-primero`), enlazada desde `/despliegue-vps`.
- **Banners OG dinamicos** por ruta de servicio (`lib/og-service.tsx` + opengraph-image
  en servicios, despliegue-vps, automatizacion-procesos, sitios-web).
- **Sistema de iconos** compartido (`ServiceIcons.tsx`) y **spot illustrations** SVG por
  servicio (`ServiceArt.tsx`): isometrico para diagnostico/vps, motivo-de-icono para
  automatizacion/sitios.

### Changed
- **Bento grid** en `/servicios` (glanceability): Diagnostico IA como card estrella 2x2
  con badge "El mas pedido", iconos + microcopy en vez de parrafos.
- **Fotos en duotono por servicio** en las cards del bento (Unsplash, licencia libre,
  optimizadas en `public/services`): un color por servicio para dar variedad tonal
  (verde/naranja/ambar/azul/violeta). Tono oscuro unificado entre editorial y terminal
  via `isolate`.
- **Fondos con profundidad** (`hero-bg`) aplicado a todas las paginas de servicio.
- Home: card de Diagnostico IA con su icono.
- **Selector de temas** (ThemeControls) movido del Header al **Footer**.

## [0.23.0] - 2026-06-25

### Changed
- portfolio-organico reusado como case study del SITIO abelardodiaz.dev (privado, en
  Vercel, badge "Repo Privado", link al sitio). Antes describia el sistema open-source;
  ahora es la web en si, con 4 capturas (hero editorial, hero terminal -> tema dual,
  grid de portfolio, pagina de case study) + thumbnail. El template open-source se
  queda como entrada aparte (categoria template).
- weedspayments y simulabnb: agregado boton de link en el encabezado ("Sitio en vivo" /
  "Demo en vivo") via frontmatter `links` (antes el enlace solo estaba en el cuerpo).

## [0.22.0] - 2026-06-25

### Changed
- Call Blocker: movido a categoria portfolio + 5 capturas oficiales de F-Droid
  (datos demo) y thumbnail (montaje de 3 pantallas). Antes no tenia imagenes.

## [0.21.0] - 2026-06-25

### Changed
- Nav principal: el link "Proyectos" ahora apunta a `/projects/categoria/portfolio`
  (los case studies, lo que mas interesa) en vez de `/projects`.
- WeedsPayments: enriquecido el case study -- blog multilingue como motor de SEO
  (Content Collections + tags + RSS por idioma), onboarding por etapas conectado a
  un panel interno con tracking de embudo, y **Lighthouse real** (desktop 99/100/100/100,
  LCP ~0.9s, CLS 0.004) con captura de los gauges.

## [0.20.0] - 2026-06-25

### Added
- Pagina de proyecto: "WeedsPayments" (categoria portfolio), case study del sitio
  publico de una pasarela de pagos para Cannabis/CBD en Europa. Framing "sitio como
  cliente": solo la web de marketing, sin tocar el backend de pagos ni la infra.
  Landing multilingue (6 idiomas) en Astro + islas de React + Tailwind v4, con mapa
  de Europa SVG a medida, animaciones CSS, SEO/sitemap multilingue, alto Lighthouse,
  GA + Microsoft Clarity, blog/RSS y onboarding conectado a seguimiento de prospectos.
  4 capturas del sitio en vivo + thumbnail. Enlace a weedspayments.com.

## [0.19.0] - 2026-06-25

### Added
- SimulaBnB: seccion "El motor real: el panel de gestion" con 4 capturas del panel
  privado del manager (dashboard con desglose en cascada del Regimen 625 + ocupacion
  por casa, reservaciones, reporte contable mensual, liquidacion al dueno). Reframing:
  la calculadora publica es la punta del iceberg de un sistema completo de gestion
  Airbnb; todo cuelga del mismo calculator.ts.
- Capturas obtenidas con un dataset 100% FICTICIO: se restauro una copia de la BD en
  un proyecto Supabase temporal y se anonimizo por completo (nombres, RFC, emails,
  cuentas, codigos Airbnb -> valores demo; montos preservados para coherencia).
  Produccion solo se leyo, nunca se modifico; proyecto demo destruido tras capturar.
  Verificacion: scan de tokens reales = 0, vetado visual de cada imagen.

## [0.18.0] - 2026-06-24

### Added
- Pagina de proyecto: "SimulaBnB" (categoria portfolio), case study de una calculadora
  fiscal para anfitriones de Airbnb en Mexico bajo el Regimen 625 (Plataformas
  Tecnologicas). Encuadre solo de la cara publica del producto (el simulador offline),
  sin tocar la cara privada de gestion. 3 capturas reales del demo en vivo (landing,
  calculadora Simple, calculadora Avanzado con desglose fiscal completo) + thumbnail
  16:9. Enlace al demo publico en Vercel. Stack: Next.js + TypeScript, monorepo pnpm,
  core de calculo puro testeado, 100% offline (localStorage) e instalable como PWA.

### Tooling
- Skill `/capturar-pantallas`: receta para tomar screenshots con el Playwright ya
  montado en WSL (/home/wrr/pw-test) y procesarlos a webp, evitando reconfigurar
  chromium en Windows. Capturar el elemento `<main>` para recortar navs/footers.

## [0.17.1] - 2026-06-25

### Added
- Domus Rentas: seccion "El panel: gestion del lado SaaS" con 4 capturas del panel
  multi-tenant (datos demo, sin PII): dashboard, gestion de propiedades, analytics y
  alta de propiedad. Capturas obtenidas reviviendo el stack docker (9 microservicios
  + frontend) en server003, con cuenta demo temporal; stack y datos restaurados a su
  estado original tras capturar.

### Changed
- Domus Rentas: se suaviza la mencion del chat en tiempo real (servicio existente
  pero aun en desarrollo) para no presentarlo como feature terminada.

## [0.17.0] - 2026-06-25

### Added
- Pagina de proyecto: "Domus Rentas" (web25-031), case study de una plataforma de
  renta de propiedades en produccion y su evolucion a un SaaS multi-tenant construido
  como 9 microservicios poliglota (Django+DRF para CRUD/dominio, FastAPI para chat
  WebSocket y notificaciones), frontend Next.js como gateway, PostgreSQL + Redis +
  Docker. Diagrama SVG inline de la arquitectura + 2 capturas del sitio publico en
  vivo (home y propiedades). category: portfolio, con link vivo a domusrentas.com y
  thumbnail webp.

### Changed
- sanitize_check.py: se retira la regla `domusrentas` (era "Client domain"). Es un
  sitio publico, en produccion y propiedad del autor -> permitido en el portfolio.
  Se mantienen bloqueados los identificadores de infra interna (hostnames, IPs,
  codigos de proyecto), que no son visibles desde el sitio publico.

## [0.16.2] - 2026-06-25

### Added
- Miniaturas (thumbnails) en las cards de proyectos: campo opcional `thumbnail` en
  el frontmatter; la card lo renderiza (16:9, object-top) solo si existe. Con portada:
  agente-080 y tienda-django-sync; el resto se muestra sin imagen, igual que antes.
- Thumbnails redimensionados al tamano de display real (1024x576 webp, ~20-35 KB)
  en vez de servir el screenshot full -- mejor calidad y mucho menos peso.
  Proporciones mantenidas (recorte desde arriba, sin distorsion).

## [0.16.1] - 2026-06-24

### Changed
- Categoria "portfolio" como agrupador compartible de los case studies de proyectos
  reales: agente-080 y tienda-django-sync pasan a `category: portfolio` (antes ai /
  fullstack) y multi-ai-provider-patterns tambien; se suman a portfolio-organico.
  Quedan listables en https://abelardodiaz.dev/projects/categoria/portfolio. Las tech
  tags reales siguen en el campo `stack`.
- Fix de fidelidad en el Stack de Tienda Django Sync: el panel de administracion es
  Django server-rendered (no Next.js). Ahora: backend + panel admin = Django;
  storefront = Next.js que consume la API de Django.

## [0.16.0] - 2026-06-24

### Added
- Pagina de proyecto: "Tienda Django Sync" (web25-0019), case study de un ecommerce
  cuyo motor real es la sincronizacion automatica de catalogo, precios, inventario y
  tipo de cambio contra Syscom (mayorista, nombrado explicito por decision del autor).
  Framing comercial + tecnico: alta de productos en un clic, precios/inventario
  frescos, tipo de cambio automatico, centro de sincronizacion con horarios
  escalonados y observabilidad. Stack Django + Next.js + Docker + PostgreSQL + Celery.
- 8 capturas reales vetadas (datos demo, token Syscom enmascarado, sin telefonos
  reales ni hostnames): catalogo completo, ficha de producto, centro de
  sincronizacion (busqueda Syscom), JSON crudo de la API de Syscom, pagina de
  categoria, gestion de productos (Conectado + Sincronizar Inventario), configuracion
  Syscom, dashboard. Capturas obtenidas reviviendo el stack en server003 (servicios
  restaurados a su estado original tras capturar).

## [0.15.0] - 2026-06-24

### Added
- Pagina de proyecto: "Agente 080" (case study anonimizado de un agente de IA
  multicanal para soporte/cobranza/ventas). Framing comercial + tecnico: modo
  agentico (razonar->actuar->observar), multi-agente especialistas, guardrails,
  RAG, memoria, antifallas, agendamiento, roles configurables y plantillas de
  WhatsApp. 3 diagramas SVG inline (bucle agentico, multiagente, bandeja unica) +
  5 capturas de demo vetadas (datos ficticios, sin cliente/infra/telefonos):
  dashboard, inbox con chat, ticket de soporte, conversacion agentica WhatsApp,
  soporte lado cliente. Enlace al sitio live agente80.abelardodiaz.dev. Repo
  privado (sin codigo publicado). Material extraido via KB 99999 + verificado.

### Fixed
- Hydration mismatch en Header: el markup dependia del estado JS del tema
  (editorial/terminal), que difiere entre server (default) y cliente (localStorage).
  Refactor a variantes CSS `editorial:`/`terminal:` (consistente con el resto del
  sitio); el markup React queda determinista, sin mismatch ni parpadeo.

## [0.14.0] - 2026-06-24

### Added
- Segundo articulo de blog: "Microanimacion 2026: tres librerias chicas para
  toasts, texto y layout" (programado 2026-07-04). Cierra el cluster de
  microanimacion combinando los 3 recursos ya publicados (sileo + slot-text +
  anime.js createLayout) por eje de microinteraccion. Fuentes verificadas en vivo
  (sileo 1.6k, slot-text 807 MIT, anime.js 70.4k v4.5.0) + links inline a repos,
  docs y los 3 TILs internos. Revision editorial DeepSeek v4-pro (ticket #2440):
  corregido claim de tree-shaking en CSS, anadido caveat de flushSync (react-dom)
  y nota de accesibilidad prefers-reduced-motion.

## [0.13.1] - 2026-06-24

### Added
- TIL resource: "createLayout de anime.js: FLIP automatico para transiciones de
  layout imposibles" (programado 2026-07-02). Recurso kind=library + demo_repo
  animejs-createlayout-demo. Cierra el cluster de microanimacion (sileo +
  slot-text + anime.js). Documenta layout.update() + el gotcha de flushSync en React.
- Micro-repo demo publicado: github.com/abelardodiaz/animejs-createlayout-demo
  (Vite 6 + React 19 + TS estricto, build verificado).

## [0.13.0] - 2026-06-24

### Added
- Subsistema Blog (Spec B): tipo `BlogPost` + getters en content.ts, ruta `/blog`
  (indice) + `/blog/[slug]` (articulo) + opengraph-image, link en Header
  (editorial + terminal), wireado en sitemap y search. Fechas escalonadas e ISR
  como TIL.
- Primer articulo: "La oleada OSS del diseno AI-native: el ecosistema abierto tras
  Claude Design" (cluster Open Design + open-pencil + html.to.design +
  awesome-design-md + ui-ux-pro-max-skill). Fuentes verificadas en vivo con links
  inline; revision editorial DeepSeek v4-pro via API 900.
- skill `/publicar`: seccion de blogs (verificar fuentes + revision IA + automejora).

## [0.12.5] - 2026-06-24

### Added
- TIL resource: "Cloudflare Browser Run: scrapear sitios JS-heavy a Markdown para
  pipelines IA" (programado 2026-06-30). Recurso kind=service + demo_repo
  cf-browser-run-demo. VERIFICADO en vivo con token free-tier: /markdown y
  /scrape funcionan y el edge ejecuta JS (probado con quotes.toscrape.com/js).
- Micro-repo demo publicado: github.com/abelardodiaz/cf-browser-run-demo
  (CLI Python + httpx; credenciales solo en .env).

## [0.12.4] - 2026-06-24

### Fixed
- Build de Vercel roto: el TIL validar-llm-json-output-pydantic-extract tenia
  `{ ... }` en prosa plana (sin backticks); MDX lo parseaba como expresion JS y
  fallaba el prerender ("Could not parse expression with acorn"). Envuelto en
  codigo inline. Build local completo verificado antes de pushear.

## [0.12.3] - 2026-06-24

### Added
- TIL resource: "slot-text: animacion text roll sin dependencias para labels"
  (programado para 2026-06-28 via date-filter). Recurso kind=library + demo_repo
  slot-text-react-demo. Documenta el componente declarativo SlotText, el helper
  chromatic(), y los dos gotchas de empaquetado (subpath slot-text/react +
  slot-text/style.css).
- Micro-repo demo publicado: github.com/abelardodiaz/slot-text-react-demo
  (Vite 6 + React 19 + TS estricto, build verificado: copy/copied, contador,
  estado cromatico).

## [0.12.2] - 2026-06-24

### Added
- TIL resource: "sileo: toasts con fisica y morphing SVG para React" (programado
  para 2026-06-26 via date-filter). Recurso kind=library + demo_repo
  sileo-react-demo. Documenta el patron Toaster unico + objeto sileo, los 6
  metodos (show/success/error/warning/info/action), promise, action con boton
  undo, y el gotcha de importar `sileo/styles.css`.
- Micro-repo demo publicado: github.com/abelardodiaz/sileo-react-demo
  (Vite 6 + React 19 + TS estricto, build verificado).

## [0.12.1] - 2026-06-24

### Added
- TIL "HTTP QUERY: el verbo que faltaba entre GET y POST (RFC 10008)"
  (category architecture). Explica el nuevo metodo HTTP estandarizado en
  RFC 10008 (jun 2026): lleva body como POST pero es safe + idempotente +
  cacheable como GET; tabla comparativa GET/POST/QUERY y caveat de soporte.

## [0.12.0] - 2026-06-16

### Added
- Sistema de Recursos: TILs pueden marcar un recurso descubierto (libreria,
  herramienta, servicio o template) con un bloque `resource:` en frontmatter
  (name/url/kind) + `demo_repo` opcional. Badge "recurso: <nombre>" en el feed
  de TILs (editorial + terminal) y pagina nueva `/recursos` que agrupa los TILs
  de recurso por tipo, con link al repo original y al micro-repo demo si existe.
- `tools/til_entry.py`: flags `--resource-name/--resource-url/--resource-kind/`
  `--demo-repo` para generar TILs de recurso.
- TIL piloto de PDFSlick (visor de PDF en React con estado via Zustand).
- `docs/recursos-backlog.md` (local): inbox de captura rapida de recursos.

### Changed
- Categorias de TIL unificadas: `IA` -> `ai` (9 archivos migrados).
- `tools/til_entry.py`: `category` y `date` ahora se emiten entre comillas en el
  frontmatter generado, consistente con los TILs existentes.

## [0.11.0] - 2026-06-12

### Added
- WhatsApp como CTA primario en todo el sitio: boton en el hero del home,
  en el header (desktop + menu movil) y barra sticky inferior en movil para
  /diagnostico-ia (aparece tras scroll). Numero y mensajes centralizados en
  `site/lib/whatsapp.ts` + icono compartido `WhatsAppIcon`.
- FAQ en /diagnostico-ia (4 preguntas) reutilizando `FaqAccordion`.
- Tipografia display Syne (variable `--font-display`) en titulares editoriales
  del home y /diagnostico-ia; enfasis por color en vez de italica sintetica.
- Textura de fondo en el hero (`.hero-bg`, solo CSS) por theme: glow calido +
  patron de puntos (editorial) y grid blueprint + glow (terminal).

### Changed
- Hero copy reescrito: "Construyo agentes de IA que trabajan mientras tu
  duermes"; bridge line convertido en pregunta directa para negocios en SLP.

## [0.10.1] - 2026-05-06

### Added
- Endpoint `GET /api/content-feed.json`: returns published TILs and
  projects as JSON for downstream consumers (Twitter Publisher 994,
  OpenClaw 850). ISR 86400s with 7-day stale-while-revalidate.
  Implements Step 1 of docs/plan-content-feed-994-850.md.
- 8 plan stubs in docs/citas-bot-universal-content/ (P02, T02-T08) so
  the publication workflow is fully traced per POLICIES.md.

### Memory
- feedback_deepseek_review_diminishing_returns.md: editorial review
  loses signal after the 3rd piece in a series; skip the rest.
- feedback_til_no_accents_deliberate.md: portfolio writes Spanish
  without accents on purpose; reject reviewer corrections that ask
  for them.

## [0.10.0] - 2026-05-06

### Added
- Project page: citas-bot-universal (public, MIT, v0.1.0 released)
- Comparative page: clinica-bot-public-vs-private (privado vs publico)
- 8 scheduled TILs (2026-06-05 to 2026-06-21) derived from citas-bot-universal:
  - Hybrid intent classifier (keyword + LLM JSON fallback)
  - State machine implicita en columna JSON
  - dateparser ES locale para fechas naturales
  - Pydantic + 1 env var JSON vs N env vars sueltas
  - APScheduler ephemeral (BD como source of truth)
  - Reminders idempotentes con flags booleanas
  - Validar JSON output del LLM con Pydantic + extract helper
  - UV_PYTHON env var en GHA matrix

### Documentation
- docs/POLICIES.md (v1.0): codifica milestone workflow, commit cadence,
  DeepSeek validation, security pre-flight, decision tree para nuevos
  trabajos en 073. Referenciado desde CLAUDE.md como onboarding step 1.

### External
- New public repo: github.com/abelardodiaz/citas-bot-universal v0.1.0
  (template Python para asistentes WhatsApp de citas; 87% coverage,
  6 intents, MetaSender real, APScheduler reminders, ~1700 LOC)
- 14 GitHub Issues opened on github.com/abelardodiaz/web26-050-call-blocker
  (9 backlog items + 5 pending features)

## [0.9.6] - 2026-05-06

### Added
- Project page: Call Blocker (web26-050) - public Android app GPL-3, F-Droid published
- 8 scheduled TILs (2026-05-19 to 2026-06-02) extracted from Call Blocker codebase:
  - CallScreeningService vs BroadcastReceiver (Android 9 vs 10+ APIs)
  - Forced dark theme in Compose Material 3
  - Hilt @Binds vs @Provides (RepositoryModule vs AppModule)
  - Room: 7 incremental migrations without data loss
  - AES-256-GCM + PBKDF2 backup encryption with magic header
  - Multi-SIM detection: 3 permission tiers across Android versions
  - Prefix blocking: SQL LIKE wins over Trie on Android
  - F-Droid auto-publish pipeline via tags

### Changed
- sanitize_check.py: added `gitlab.com/abelardodiaz/` to ALLOWLIST_PATTERNS (public mirror of GitHub repos)

## [0.9.5] - 2026-05-06

### Fixed
- Scheduled publishing for TILs and projects: pages with date-based filtering
  (lib/content.ts) were SSG-frozen at build time, so 16 TILs scheduled
  2026-04-10..2026-04-30 never appeared on the live site after the last
  deploy on 2026-04-09.

### Added
- ISR daily revalidation (`revalidate = 86400`) on app/page.tsx,
  app/til/page.tsx, app/til/[slug]/page.tsx, app/projects/page.tsx so
  Vercel regenerates with current date and scheduled content publishes
  automatically without requiring a commit.

## [0.9.4] - 2026-04-09

### Added
- Animated theme toggle using View Transitions API (circular reveal effect)

## [0.9.3] - 2026-04-08

### Added
- Project page: Live Conference Translator (public repo)
  - Real-time audio capture + Whisper transcription + translation
  - github.com/abelardodiaz/live-conference-translator
- 17 scheduled TILs (2026-04-18 to 2026-05-17)
  - 5 Hikvision (digest auth, discovery, snapshots, recordings, storage)
  - 6 GPS tracking (OAuth MD5, adaptive polling, haversine, geofences, commands, track summary)
  - 6 Live Conference Translator (WASAPI, threading, subtitles, deep-translator, signals, PyAudioWPatch)
- TIL: MD + SVG as AI documentation technique (with inline rendered SVG example)

### Security
- Sanitized live-conference-translator public repo (removed API keys, internal IPs, private paths from git history)

## [0.9.2] - 2026-04-03

### Added
- Project page: Hikvision ISAPI Patterns (scheduled 2026-04-07)
  - 5 production patterns for Hikvision NVR/DVR integration via ISAPI
  - Public repo: github.com/abelardodiaz/hikvision-isapi-patterns
- Project page: Hikvision CCTV Backend (scheduled 2026-04-12)
  - 19-endpoint private backend, full system overview
- Project page: De Patterns a Plataforma (scheduled 2026-04-17)
  - Public vs private comparative case study
- Project page: GPS Tracking Patterns (scheduled 2026-04-22)
  - 6 production patterns for GPS fleet tracking via Tracksolid
  - Public repo: github.com/abelardodiaz/gps-tracking-patterns
- Project page: GPS Fleet Monitor (scheduled 2026-04-27)
  - 26-endpoint private fleet tracking system
- Project page: De Patterns a Fleet (scheduled 2026-05-02)
  - GPS public vs private comparative case study

## [0.9.1] - 2026-03-31

### Changed
- Diagnostico IA price updated from $5,000 MXN to $10,000 MXN across all pages (home, diagnostico-ia, SEO meta)
- Bonificable copy updated to reflect new price ($10,000 se descuentan del proyecto)

## [0.9.0] - 2026-03-24

### Added
- AutonomyMeter component: interactive meter/gauge with 4 HBR autonomy levels on /openclaw-slp
  - Bar + dots + cards synchronized, always progressive (can't light 4 without 3)
  - Hover/touch interaction on bar and cards
  - Pointer "Aqui empezamos" fixed at level 02
  - Dual-theme (Editorial/Terminal)
- HITL "autonomia supervisada" section on /openclaw-slp (sug 15)
- "Diagnostico bonificable" block in price card on /diagnostico-ia (sug 14)
- Archived 11 preview HTMLs in previews/ (muestras graficas + autonomy variants)

### Changed
- "Quien lo hace" on /diagnostico-ia rewritten as "ingeniero de automatizacion B2B" (sug 5 adjusted)
- /diagnostico-ia SEO: title includes "| San Luis Potosi", description updated
- Copy rewritten for business audience: "guardrails" -> "validaciones", "output asistido" -> "te sugiere, tu decides"

## [0.8.2] - 2026-03-23

### Added
- Social proof block (McKinsey/HBR) on homepage after services section
- Bridge paragraph on homepage connecting developer work to local services
- Microsoft LATAM data point (94% efficiency) on /diagnostico-ia hero
- Urgency block ("maximo 4 diagnosticos/mes") on /diagnostico-ia
- HBR reference blockquote on /openclaw-slp
- Highlight on "OpenClaw configurado" column in comparison table (bg-primary/5)
- 2 FAQs open by default on /openclaw-slp (security + shadow AI)
- SLP paragraph with /diagnostico-ia link on /about

### Changed
- Rewrite sector savings with specific data points on /diagnostico-ia
- Rewrite "Quien lo hace" bio with consulting/distribuidora examples on /diagnostico-ia
- Expand /about bio: telecom background, 10+ years tech, business experience
- Add 135K exposed instances data to "why help" on /openclaw-slp

## [0.8.1] - 2026-03-23

### Added
- FAQs expandibles con shadcn/ui Accordion en `/openclaw-slp` (reemplaza texto estatico)
- Seccion "Servicios IA en San Luis Potosi" en homepage entre hero y proyectos (2 cards dual-theme)
- Logo OpenClaw (lobster) en hero de `/openclaw-slp` y card del homepage
- Componente `FaqAccordion` reutilizable (client component)

### Changed
- Fix texto "ensenarlo" -> "entrenarlo" en `/openclaw-slp`

## [0.8.0] - 2026-03-23

### Added
- Seccion `/diagnostico-ia` - landing de servicio IA local SLP con hero, 3 pasos, ejemplos por sector, precio, mini bio y CTA WhatsApp
- Seccion `/openclaw-slp` - pagina educativa OpenClaw para PyMEs con capacidades, proceso, tabla comparativa y CTA WhatsApp
- Nav item "Servicios" en header (editorial + terminal)
- CTA WhatsApp con mensaje pre-llenado en ambas paginas
- Seccion FAQ con 8 preguntas de negocio en `/openclaw-slp` (fuente: 850 via 993)
- Ambas paginas con dual-theme (Editorial + Terminal) y SEO metadata

## [0.7.3] - 2026-03-20

### Added
- Category filter for /projects with SEO-friendly URLs (`/projects/categoria/[tag]`)
- `ProjectGrid` shared component with tag bar (editorial + terminal variants)
- OG images for project category pages
- Category badge link in project detail pages
- Project category URLs in sitemap

## [0.7.2] - 2026-03-19

### Added
- New micro-repo: `flask-multi-step-survey-and-referral-system` (open source, sanitized from production)
- Project entry `flask-survey-referral-system.mdx` in portfolio site

## [0.7.1] - 2026-03-19

### Changed
- Remove Google Analytics (redundant with Vercel Analytics + Speed Insights, saves ~89 KiB JS)
- Convert Inter, JetBrains Mono, Space Grotesk to variable fonts (fewer font files)
- Add preconnect hint for Vercel Analytics domain

### Performance
- Target: mobile PageSpeed 80 -> 90+ (LCP 4.5s -> reduced, FCP 2.5s -> reduced)

## [0.7.0] - 2026-03-19

### Added
- 30 TIL entries across 7 categories (Next.js 16, Tailwind v4, React 19, shadcn/Base-UI, Python & Security, Architecture, Claude Code & DevX)
- All TILs based on real lessons from this codebase with actual code snippets

## [0.6.1] - 2026-03-19

### Added
- Vercel Analytics (`@vercel/analytics`) - first-party, privacy-friendly web analytics
- Vercel Speed Insights (`@vercel/speed-insights`) - real user Core Web Vitals monitoring
- Connected GitHub repo to Vercel project for auto-deploy on push
- Project entry `portfolio-organico-template.mdx` added to site content

## [0.6.0] - 2026-03-19

### Added
- Public template repo `portfolio-organico-template` created and published
  - GitHub: https://github.com/abelardodiaz/portfolio-organico-template
  - Centralized `siteConfig` in `site/lib/config.ts` (edit 1 file, everything changes)
  - All personal data replaced with generic placeholders
  - Sanitized sanitize_check.py (removed real IPs, hostnames, WireGuard keys)
  - Sanitized docs (removed server003, abelardodiaz, project codes, client names)
  - Generic Claude Code commands (check-security, new-til)
  - Example MDX content (1 project, 1 TIL)
  - docs/GETTING-STARTED.md with step-by-step setup guide
  - Full README with Quick Start, personalization, deploy instructions
  - MIT License
- Security verification passed:
  - grep "abelardodiaz" -> 0 results
  - grep "server003" -> 0 results
  - grep "G-B1XR6RGWG3" -> 0 results
  - grep "redv6" -> 0 results
  - grep "10.254." -> 0 results
  - pnpm build -> 12/12 pages OK

### Fixed
- content.ts: added toDateString() helper for gray-matter Date object conversion

## [0.5.0] - 2026-03-19

### Added
- Google Analytics (G-B1XR6RGWG3) via next/script afterInteractive

### Changed
- Footer and ButtonLink converted to Server Components (reduced JS bundle)
- Header: solid bg-background replacing bg-background/85 backdrop-blur
- RotatingLabel: solid accent bg replacing bg-primary/10 (a11y fix)
- Editorial dark --primary-foreground: #ffffff -> #0c0a09 (dark text on orange buttons, 5.36:1 contrast)
- Editorial dark --accent: #431407 -> #3a1207 (text-primary on accent passes 4.65:1)
- Editorial dark --fg-subtle: #78716c -> #9b9490 (contrast 4.12 -> ~6.5:1)
- Editorial light --fg-subtle: #a8a29e -> #6e6863 (contrast 2.39 -> 4.81:1)
- Terminal light --fg-subtle: #94a3b8 -> #586879 (contrast 2.42 -> 5.00:1)

### Fixed
- aria-label on all nav landmarks (desktop, mobile, footer social)
- aria-expanded on mobile menu toggle button
- aria-hidden="true" on all decorative SVGs (Header, Footer, ThemeSelector, ThemeToggle, Contact)

### Lighthouse Scores (post-deploy)
- /: 99 / 100 / 100 / 100
- /projects: 99 / 100 / 100 / 100
- /about: 98 / 100 / 100 / 100
- /contact: 98 / 100 / 100 / 100
- /til: 100 / 100 / 100 / 100

## [0.4.0] - 2026-03-18

### Added
- Micro-repo `multi-ai-provider-patterns` creado y publicado en GitHub
  - 6 patterns de produccion para gateways multi-IA
  - 2 ejemplos integrados (minimal-gateway, ai-debate)
  - Tabla de context windows reales vs marketing
  - Todos los ejemplos ejecutables standalone (solo stdlib)
  - Anonimizado y verificado (grep scan, sanitize check, gitleaks)
  - Topics: ai, multi-ai, gateway, circuit-breaker, python, design-patterns, llm
- Project entry en site/content/projects/multi-ai-provider-patterns.mdx

## [0.3.1] - 2026-03-18

### Added
- TIL entry: "OpenClaw vs DIY: mismos problemas, diferentes soluciones"
  - Comparativa de 5 problemas fundamentales de agentes autonomos
  - Anti-recursion de 4 capas vs heartbeat suppression basica
  - Links al repo claude-agent-patterns y docs de OpenClaw

## [0.3.0] - 2026-03-17

### Added
- Micro-repo `claude-agent-patterns` creado y publicado en GitHub
  - 8 patterns de produccion para agentes IA autonomos
  - 2 ejemplos integrados (minimal-daemon, multi-agent-project)
  - Todos los ejemplos ejecutables standalone (solo stdlib)
  - Anonimizado y verificado (grep scan, sanitize check)
  - Topics: spanish, claude-code, ai-agents, patterns, python, asyncio
- Project entry en site/content/projects/claude-agent-patterns.mdx

## [0.2.0] - 2026-03-17

### Added
- Pre-commit hooks: gitleaks + sanitize_check.py (.pre-commit-config.yaml)
- Content system: lib/content.ts with gray-matter for MDX frontmatter parsing
- MDX rendering via next-mdx-remote/rsc (MdxContent component)
- TIL listing page with category grouping (/til)
- TIL detail pages with MDX rendering (/til/[slug])
- Projects grid page with stack tags (/projects)
- Project detail pages with MDX rendering (/projects/[slug])
- 2 example TIL entries: Next.js 16 proxy vs middleware, pnpm vs npm monorepos
- 1 example project entry: Portfolio Organico
- Landing page now shows featured projects and recent TILs from content system
- Static generation (SSG) for all content pages via generateStaticParams

## [0.1.0] - 2026-03-17

### Added
- Initial project structure (hybrid: Next.js + Python + Markdown)
- Documentation: PLAN, ROADMAP, acceptance criteria, security checklist, architecture, design system
- Claude Code configuration and slash commands
- PROJECT.yaml metadata
- Next.js 16 portfolio site scaffold (Turbopack, Tailwind v4, shadcn/ui)
- All page stubs: landing, projects, TIL, about, contact, 404
- Layout: Header with nav, Footer with social links, ThemeToggle (dark default)
- Python tools: sanitize_check.py, extract_pattern.py, repo_scaffold.py, til_entry.py, social_post.py
- Templates: micro-repo (README, LICENSE, .gitignore), TIL entry, social posts (X, LinkedIn)
- .gitignore, .env.example, README.md
- Deploy inicial a Vercel (production)
- GitHub Profile README (abelardodiaz/abelardodiaz)
- Security: excluidos .claude/, docs/, PROJECT.yaml del repo publico
