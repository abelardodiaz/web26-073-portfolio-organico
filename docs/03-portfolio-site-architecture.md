# Portfolio Site Architecture - 073 Portfolio Organico

**Agentes:** frontend-developer + shadcn-ui-architect
**Fecha:** 2026-03-17

---

## 1. Stack

| Componente | Tecnologia | Version |
|-----------|-----------|---------|
| Framework | Next.js | 16+ |
| Router | App Router | - |
| Bundler | Turbopack | default |
| UI | React | 19+ |
| Language | TypeScript | strict |
| Styling | Tailwind CSS | v4 |
| Components | shadcn/ui | latest |
| Font UI | Inter (o Geist Sans) | variable |
| Font Code | JetBrains Mono (o Geist Mono) | variable |
| Deploy | Vercel | - |
| Package Manager | pnpm | - |

---

## 2. Paginas

```
app/
  page.tsx                    # Landing: bio, repos featured, TILs recientes
  projects/
    page.tsx                  # Grid de proyectos con stars, filtrable
    [slug]/
      page.tsx                # Detalle de proyecto (MDX)
  til/
    page.tsx                  # Index de TILs, filtrable por categoria
    [slug]/
      page.tsx                # TIL entry individual
  about/
    page.tsx                  # Bio extendida, stack expertise, experiencia
  contact/
    page.tsx                  # Formulario de contacto / links
  layout.tsx                  # Root layout (fonts, metadata, ThemeProvider)
  globals.css                 # Tailwind imports + @theme block
  not-found.tsx               # 404 custom
```

### Landing Page (/)
- Hero: nombre, headline bilingue, avatar
- Featured repos: 3-4 cards con stars en tiempo real
- TILs recientes: 5 ultimas entradas
- CTA: "Ver todos los proyectos" + "Contacto"

### Projects (/projects)
- Grid responsive de project cards
- Cada card: nombre, descripcion corta, stack badges, GitHub stars (live)
- Ordenable por: stars, fecha, categoria
- Filtrable por stack/categoria

### Project Detail (/projects/[slug])
- Contenido MDX renderizado
- Sidebar: links a repo, demo (si aplica), stats
- Related projects

### TIL Index (/til)
- Lista de entradas con fecha, categoria badge, titulo
- Filtro por categoria (python, fastapi, shopify, ai, etc.)
- Busqueda por texto

### TIL Entry (/til/[slug])
- Contenido MDX
- Metadata: fecha, categoria, stack
- Navegacion: anterior/siguiente

---

## 3. Estructura de Componentes

```
components/
  ui/                         # shadcn/ui base (Button, Card, Badge, etc.)
  layout/
    Header.tsx                # Nav principal + theme toggle
    Footer.tsx                # Links + copyright
    MobileNav.tsx             # Menu hamburguesa
  projects/
    ProjectCard.tsx           # Card de proyecto con stars
    ProjectGrid.tsx           # Grid responsive
    ProjectFilter.tsx         # Filtros por stack/categoria
    StarCount.tsx             # GitHub stars con ISR
  til/
    TilCard.tsx               # Card de TIL entry
    TilList.tsx               # Lista filtrable
    CategoryBadge.tsx         # Badge de categoria
  shared/
    ThemeToggle.tsx            # Dark/light mode
    SEOHead.tsx                # Meta tags helper
    MDXComponents.tsx          # Custom MDX renderers
```

---

## 4. Data Layer

### Content como archivos (no CMS, no DB)

```
content/
  projects/                   # YAML/MDX por proyecto
    claude-agent-patterns.mdx
    multi-ai-provider-patterns.mdx
    whatsapp-webhook-patterns.mdx
    shopify-mexico-integration.mdx
    clean-arch-fastapi.mdx
  til/                        # MDX por TIL entry
    2026-03-20-meta-api-quirk.mdx
    2026-03-21-pydantic-v2-migration.mdx
```

### Formato de proyecto (frontmatter)

```yaml
---
title: Claude Agent Patterns
slug: claude-agent-patterns
description: Patterns para crear agentes IA con guardrails y sub-agentes
stack: [python, claude-code, asyncio]
github: https://github.com/abelardodiaz/claude-agent-patterns
category: ai
featured: true
date: 2026-03-20
---
```

### Formato de TIL (frontmatter)

```yaml
---
title: Meta API retorna 200 con firma invalida
slug: meta-api-firma-200
category: whatsapp
stack: [python, fastapi]
date: 2026-03-20
---
```

### GitHub Stars via Server Components

```typescript
// lib/github.ts
export async function getRepoStars(repo: string): Promise<number> {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    next: { revalidate: 3600 }, // ISR: cada hora
  });
  const data = await res.json();
  return data.stargazers_count ?? 0;
}
```

---

## 5. SEO

### Metadata API

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Abelardo Diaz - Full-Stack Developer & AI Agent Architect',
    template: '%s | Abelardo Diaz',
  },
  description: 'Patterns de produccion real en espanol. Multi-AI, WhatsApp API, Shopify MX, Claude agents.',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
  },
};
```

### OG Images dinamicas

```
public/og/                    # OG images estaticas base
app/api/og/route.tsx          # Dynamic OG via Satori (@vercel/og)
```

### Sitemap + Robots

```typescript
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = getProjects();
  const tils = getTils();
  // ...generate entries
}
```

---

## 6. UI/UX Specs

### Dark Mode (default)
- Theme toggle en Header
- CSS variables via shadcn/ui theming
- `className="dark"` en `<html>` por defecto
- Persistencia via localStorage

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Paleta (definida en `05-design-system-branding.md`)
- Referencia al design system para tokens OKLCH

---

## 7. Deploy

### Vercel Config
- Framework preset: Next.js (auto-detected)
- Build command: `pnpm build`
- Output: `.next/`
- ISR: habilitado para pages con `revalidate`
- Environment variables: solo `GITHUB_TOKEN` (opcional, para evitar rate limits en stars API)

### Performance Targets
- Lighthouse Performance: >= 90
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

---

*Referencia: nextjs-webapp.md template del ecosistema 996*
