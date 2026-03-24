# Changelog

All notable changes to this project will be documented in this file.

## [0.8.0] - 2026-03-23

### Added
- Seccion `/diagnostico-ia` - landing de servicio IA local SLP con hero, 3 pasos, ejemplos por sector, precio, mini bio y CTA WhatsApp
- Seccion `/openclaw-slp` - pagina educativa OpenClaw para PyMEs con capacidades, proceso, tabla comparativa y CTA WhatsApp
- Nav item "Servicios" en header (editorial + terminal)
- CTA WhatsApp con mensaje pre-llenado en ambas paginas
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
