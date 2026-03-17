# CLAUDE.md - Portfolio Organico (web26-073)

## Descripcion

Proyecto hibrido para crear presencia publica tecnica:
- **Portfolio site** (Next.js 16) deployado en Vercel
- **Tools** (Python 3.12) para extraccion y sanitizacion de contenido
- **Templates** (Markdown) para micro-repos, TILs y posts sociales
- **Micro-repos** (GitHub publico) con patterns de produccion real

## Stack

### Portfolio Site (site/)
- Next.js 16 + App Router + Turbopack
- React 19 + TypeScript strict
- Tailwind CSS v4 + shadcn/ui
- Content: MDX/YAML (no CMS, no DB)
- Deploy: Vercel
- Package manager: pnpm (NUNCA npm)

### Extraction Tools (tools/)
- Python 3.12
- httpx, rich, python-dotenv, python-slugify
- Scripts CLI (sin emojis por compatibilidad PowerShell)

## Estructura

```
web26-073-portfolio-organico/
  site/          # Next.js portfolio
  tools/         # Python extraction/publication
  templates/     # Templates para micro-repos, TILs, posts
  docs/          # Preparativos y documentacion
  .claude/       # Commands y settings
```

## Reglas

### Generales
- Commits: `tipo(scope): descripcion`
- Push a AMBOS remotes: `git push github main && git push origin main`
- Actualizar CHANGELOG.md en cada commit significativo
- Actualizar PROJECT.yaml: version + updated_at + updated_by: claude-073
- Variables sensibles SOLO en .env (NUNCA en codigo)

### Node.js
- SIEMPRE usar pnpm (NUNCA npm): pnpm install, pnpm add, pnpm dlx, pnpm run
- Server Components por defecto, 'use client' solo cuando necesario
- TypeScript strict mode

### Python
- SIN emojis en scripts (compatibilidad PowerShell)
- Forward slashes en paths cuando sea posible
- Usar venv para aislamiento

### SEGURIDAD (CRITICO)
- ANTES de push a repo publico: ejecutar sanitize_check.py + gitleaks
- NUNCA incluir: IPs internas, hostnames de servers, API keys, paths privados, codigos de proyecto
- Referencia completa: docs/02-security-publication-checklist.md
- Todo contenido publico pasa por el workflow de publicacion segura (doc 02, seccion 5)

## Documentacion

| Documento | Contenido |
|-----------|-----------|
| docs/PLAN.md | Plan completo con fases y decisiones |
| docs/ROADMAP.md | Checklist por fase |
| docs/01-acceptance-criteria.md | Criterios GO/NO-GO |
| docs/02-security-publication-checklist.md | Checklist pre-publicacion |
| docs/03-portfolio-site-architecture.md | Arquitectura Next.js |
| docs/04-content-extraction-tooling.md | Specs scripts Python |
| docs/05-design-system-branding.md | Design system |
| docs/BRIEF-993.md | Estrategia original |
| docs/PLAN-EJECUCION.md | Plan tactico |

## Primera vez?

1. Lee este archivo completo
2. Lee docs/PLAN.md para contexto
3. Lee docs/02-security-publication-checklist.md para reglas de seguridad
4. Ejecuta la tarea que te asignen siguiendo el ROADMAP.md
