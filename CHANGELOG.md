# Changelog

All notable changes to this project will be documented in this file.

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
