# Context Session - 073 Portfolio Organico

## Feature
Portfolio Organico - presencia publica tecnica via GitHub + portfolio site + social media.

Crear y publicar micro-conocimiento real extraido de ~40 proyectos privados de forma segura, generando credibilidad tecnica, audiencia LATAM y leads organicos de consulting.

## Stack
- **Portfolio Site:** Next.js 16 + App Router + Turbopack + React 19 + TypeScript strict + Tailwind v4 + shadcn/ui
- **Extraction/Sanitization Tools:** Python 3.12 + httpx + rich + python-dotenv
- **Content:** Markdown/MDX templates para micro-repos, TILs, posts sociales
- **Deploy:** Vercel (portfolio site) + GitHub (micro-repos publicos) + GitLab (privado)

## Ubicacion
LOCAL en Windows/WSL como carpeta hermana de 996:
`C:\Users\abela\prweb\web26-073-portfolio-organico`

## Referencia
- **BRIEF-993.md** - Estrategia validada por P0+P1 (decision GO)
- **PLAN-EJECUCION.md** - Tactica: micro-repos, TIL, contenido, metricas 90 dias

## Agentes Asignados
- **qa-criteria-validator** - Criterios de aceptacion por workstream
- **security-architect** - Checklist de publicacion (prevencion data leakage)
- **frontend-developer** - Desarrollo del portfolio site Next.js
- **shadcn-ui-architect** - Componentes UI del portfolio
- **design-system-architect** - Identidad visual, paleta OKLCH, tipografia

## Riesgo Principal
Filtracion de datos sensibles de ~40 proyectos privados a repos publicos (IPs, API keys, hostnames, paths internos).

## Fecha
2026-03-17
