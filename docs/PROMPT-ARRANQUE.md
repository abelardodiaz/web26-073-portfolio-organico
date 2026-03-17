# Prompt de Arranque - 073 Portfolio Organico

```
Eres el agente 073 - Portfolio Organico.
Proyecto hibrido: portfolio site Next.js + herramientas Python de extraccion/sanitizacion + templates para micro-repos publicos.

Lee CLAUDE.md y PROJECT.yaml para entender el contexto.
Lee docs/PLAN.md para el plan completo.
Lee docs/ROADMAP.md para el checklist por fase.
Lee docs/02-security-publication-checklist.md ANTES de publicar cualquier contenido.

## PRIMERA TAREA: Crear estructura base

ANTES de cualquier codigo:

1. cd C:\Users\abela\prweb\web26-073-portfolio-organico
2. git init
3. Crear estructura base (ver abajo)
4. git add .
5. git commit -m "feat: initial commit - estructura base hibrida portfolio"
6. Crear repo en GitLab: web26-073-portfolio-organico (privado)
7. git remote add origin https://gitlab.com/abelardodiaz/web26-073-portfolio-organico.git
8. Crear repo en GitHub: portfolio-organico (publico, para el site)
9. git remote add github https://github.com/abelardodiaz/web26-073-portfolio-organico.git
10. git push -u origin main
11. git push github main

## SEGUNDA TAREA: Crear estructura de carpetas

```
web26-073-portfolio-organico/
  site/                          # Next.js portfolio (pnpm)
    app/
      page.tsx                   # Landing
      projects/
        page.tsx                 # Grid de proyectos
        [slug]/
          page.tsx               # Detalle proyecto (MDX)
      til/
        page.tsx                 # Index TILs
        [slug]/
          page.tsx               # TIL entry
      about/
        page.tsx                 # Bio extendida
      contact/
        page.tsx                 # Contacto
      layout.tsx                 # Root layout
      globals.css                # Tailwind + @theme
      not-found.tsx              # 404
    components/
      ui/                        # shadcn/ui components
      layout/                    # Header, Footer, MobileNav
      projects/                  # ProjectCard, ProjectGrid, StarCount
      til/                       # TilCard, TilList, CategoryBadge
      shared/                    # ThemeToggle, MDXComponents
    lib/
      utils.ts                   # cn() utility
      github.ts                  # getRepoStars con ISR
      content.ts                 # getProjects, getTils
    content/
      projects/                  # YAML/MDX por proyecto
      til/                       # MDX por TIL
    public/
      og/                        # OG images base
    next.config.ts
    package.json
    tsconfig.json
    tailwind.config.ts
  tools/                         # Python extraction/publication
    extract_pattern.py           # Query KB 99999 -> draft MD
    sanitize_check.py            # Security scanning
    repo_scaffold.py             # Crear estructura micro-repo
    til_entry.py                 # Crear TIL entry
    social_post.py               # Draft posts X/LinkedIn
    requirements.txt
    .env.example
  templates/                     # Templates para micro-repos
    micro-repo/
      README.md.template
      LICENSE
      .gitignore.template
    til/
      entry.md.template
    social/
      x-post.md.template
      linkedin-post.md.template
  docs/                          # Preparativos de 996
    BRIEF-993.md
    PLAN-EJECUCION.md
    PLAN.md
    ROADMAP.md
    context_session.md
    01-acceptance-criteria.md
    02-security-publication-checklist.md
    03-portfolio-site-architecture.md
    04-content-extraction-tooling.md
    05-design-system-branding.md
  .claude/
    commands/
      consultar-900.md
      consultar-99999.md
    settings.local.json
  CLAUDE.md
  PROJECT.yaml
  CHANGELOG.md
  README.md
  .gitignore
  .env.example
```

## TERCERA TAREA: Scaffold Next.js

1. cd site/
2. pnpm create next-app . --typescript --tailwind --eslint --app --turbopack --src-dir=false --import-alias="@/*"
3. pnpm dlx shadcn@latest init (dark mode, zinc, CSS variables)
4. Configurar next.config.ts con security headers
5. Configurar design system (paleta OKLCH de 05-design-system-branding.md)
6. Configurar fonts (Inter + JetBrains Mono via next/font)
7. Crear layout base: Header + Footer + ThemeToggle
8. Crear landing page placeholder
9. Verificar: pnpm build pasa

## CUARTA TAREA: Setup Python tools

1. cd tools/
2. python -m venv .venv
3. pip install -r requirements.txt
4. Crear .env desde .env.example
5. Implementar sanitize_check.py (PRIORIDAD - es el script de seguridad)
6. Verificar: python sanitize_check.py --dir .. retorna PASS

## QUINTA TAREA: Templates base

1. Crear templates/micro-repo/README.md.template con secciones:
   - El Problema, La Solucion, Uso Rapido, Estructura, Contexto, Licencia
2. Crear templates/micro-repo/LICENSE (MIT)
3. Crear templates/micro-repo/.gitignore.template
4. Crear templates/til/entry.md.template con frontmatter
5. Crear templates/social/x-post.md.template (< 280 chars)
6. Crear templates/social/linkedin-post.md.template (2-3 parrafos)

## Reglas

Sigue TODAS las reglas en CLAUDE.md:
- Commits: tipo(scope): descripcion
- Push despues de cada feature completado
- Push a AMBOS remotes: git push github main && git push origin main
- Actualizar CHANGELOG.md en cada commit significativo
- Variables sensibles SOLO en .env (NUNCA en codigo)
- Actualizar PROJECT.yaml version + updated_at en cada sesion
- pnpm (NUNCA npm) para todo Node.js
- Scripts Python SIN emojis (compatibilidad PowerShell)
- Forward slashes en paths cuando sea posible

## Documentacion Disponible

- PLAN.md - Plan completo con fases y decisiones
- ROADMAP.md - Checklist por fase con criterios de exito
- 01-acceptance-criteria.md - Criterios GO/NO-GO por workstream
- 02-security-publication-checklist.md - CRITICO: checklist pre-publicacion
- 03-portfolio-site-architecture.md - Stack y estructura Next.js
- 04-content-extraction-tooling.md - Scripts Python specs
- 05-design-system-branding.md - Paleta OKLCH, tipografia, branding

## SEGURIDAD - REGLA PRINCIPAL

ANTES de hacer push a CUALQUIER repo publico en GitHub:
1. Ejecutar: python tools/sanitize_check.py --dir .
2. Ejecutar: gitleaks detect --source . --verbose
3. Review manual de cada archivo
4. Solo si los 3 pasos pasan: git push

Referencia completa: docs/02-security-publication-checklist.md

## Slash Commands

- /consultar-900 - Consultar API Multi-IA para validar ideas
- /consultar-99999 - Consultar KB para extraer patterns de proyectos

## Verificacion Post-Setup

Cuando termines la estructura base:
1. Verificar que site/ compila: cd site && pnpm build
2. Verificar que sanitize_check.py funciona: python tools/sanitize_check.py --dir .
3. Verificar que templates existen con contenido
4. Verificar que .env.example tiene todas las variables
5. git add . && git commit -m "feat: initial commit - estructura base portfolio"
6. git push -u origin main && git push github main
```
