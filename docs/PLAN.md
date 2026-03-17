# PLAN - 073 Portfolio Organico

## 1. Identidad

| Campo | Valor |
|-------|-------|
| Code | 073 |
| Nombre | Portfolio Organico |
| Full Code | web26-073-portfolio-organico |
| Ubicacion | LOCAL Windows/WSL |
| Path | C:\Users\abela\prweb\web26-073-portfolio-organico |
| Tipo | Hibrido (Next.js + Python + Markdown) |
| Costo | $0 |
| Origen | BRIEF-993.md (evaluacion P0+P1, decision GO) |

---

## 2. Los 3 Workstreams

### Workstream A: Micro-Repos del Ecosistema (PRIORIDAD)
Publicar micro-repos con patterns extraidos de produccion real en espanol. Cada repo es standalone, con README documentado y codigo funcional.

**Repos planeados:**
1. `claude-agent-patterns` (069 + 996)
2. `multi-ai-provider-patterns` (900)
3. `whatsapp-webhook-patterns` (055 + 056 + 048)
4. `shopify-mexico-integration-template` (066)
5. `clean-arch-fastapi-template` (048 + 031)
6. `til/` (todos los proyectos)

### Workstream B: Contenido Multi-Formato LATAM
Posts 3x/semana en X y LinkedIn. TILs en GitHub. Contenido en espanol dirigido a 2M+ devs LATAM.

### Workstream C: CV Publico + Consulting Pipeline
GitHub profile optimizado como CV vivo. Los workstreams A+B generan credibilidad y audiencia que convierte en leads organicos.

### Flywheel
```
Micro-Repos --> Credibilidad --> Contenido --> Audiencia --> Leads --> Proyectos --> Mas conocimiento
```

---

## 3. Arquitectura

```
web26-073-portfolio-organico/
|
|-- site/                      # Next.js portfolio (pnpm)
|   |-- Next.js 16 + App Router + Turbopack
|   |-- React 19 + TypeScript strict
|   |-- Tailwind v4 + shadcn/ui
|   |-- Content: MDX/YAML (no CMS, no DB)
|   |-- Deploy: Vercel
|
|-- tools/                     # Python extraction/publication
|   |-- extract_pattern.py     (query KB 99999 -> draft MD)
|   |-- sanitize_check.py      (security scanning)
|   |-- repo_scaffold.py       (crear estructura micro-repo)
|   |-- til_entry.py           (crear TIL entry)
|   |-- social_post.py         (draft posts X/LinkedIn)
|
|-- templates/                 # Templates reutilizables
|   |-- micro-repo/            (README, LICENSE, .gitignore)
|   |-- til/                   (entry template)
|   |-- social/                (X, LinkedIn post templates)
|
|-- docs/                      # Preparativos de 996
```

### Micro-repos (GitHub, publicos)
Cada micro-repo es un repositorio independiente en GitHub, con su propio README, LICENSE, codigo, y ejemplos. No son parte del monorepo 073.

### TIL repo (GitHub, publico)
Repositorio dedicado con micro-lecciones organizadas por categoria.

---

## 4. Fases

### Fase 0: Bootstrap (1 dia)
- Scaffold estructura del proyecto 073
- git init + push a GitLab (privado)
- Configurar tools/ con Python venv
- Instalar pre-commit hooks con gitleaks

### Fase 1: Foundation (Semanas 1-2)
- Optimizar GitHub profile (README.md, bio, links)
- Crear repo `til/` con 10 primeras entradas (extraer de KB 99999)
- Crear y publicar `claude-agent-patterns` (primer micro-repo)
- Scaffold del portfolio site (Next.js)
- Primer post en X + LinkedIn

### Fase 2: Build + Publish (Semanas 3-6)
- Publicar 3 micro-repos mas
- Mantener ritmo 3x/semana de posts
- Desarrollar portfolio site completo
- Deploy portfolio en Vercel
- Agregar TILs semanalmente

### Fase 3: Scale + Measure (Semanas 7-12)
- Publicar repos restantes
- Evaluar metricas vs GO/NO-GO thresholds
- Ajustar segun feedback
- Decidir: CONTINUAR / ITERAR / PIVOTAR

---

## 5. Seguridad

**Documento de referencia:** `02-security-publication-checklist.md`

El riesgo principal es filtracion de datos sensibles. Todo contenido publico pasa por:
1. Script `sanitize_check.py` (regex patterns)
2. gitleaks (secret scanning)
3. Review manual
4. Pre-commit hooks en repos publicos

Ver checklist completo en doc 02.

---

## 6. Decisiones Arquitecturales

### Por que LOCAL (no server005)
- El producto es contenido publico, no un servicio corriendo
- No necesita uptime, base de datos, ni puertos
- Desarrollo directo en Windows/WSL con acceso a GitHub
- Los tools Python solo necesitan SSH a server003 para KB queries

### Por que Next.js (no Hugo/Astro)
- shadcn/ui components listos para usar
- Server Components para GitHub stars en tiempo real (ISR)
- Deploy optimizado en Vercel
- OG images dinamicas via @vercel/og
- El ecosistema ya tiene experiencia con Next.js (072, 053)

### Por que Python para tooling (no TypeScript)
- Scripts CLI rapidos, no aplicaciones web
- httpx para HTTP, rich para output bonito
- Compatible con PowerShell (sin emojis)
- El equipo tiene mas experiencia en Python para scripting

### Por que content-as-files (no CMS)
- Zero costo (no Sanity/Contentful billing)
- Versionado con git
- MDX permite componentes React inline
- Suficiente para el volumen esperado (<100 pages)
