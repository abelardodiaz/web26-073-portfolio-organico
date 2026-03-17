# Design System & Branding - 073 Portfolio Organico

**Agente:** design-system-architect
**Fecha:** 2026-03-17

---

## 1. Paleta OKLCH

### Tokens principales

```css
@theme {
  /* Primary - Tech-forward blue */
  --color-primary-50: oklch(0.97 0.01 240);
  --color-primary-100: oklch(0.93 0.03 240);
  --color-primary-200: oklch(0.86 0.06 240);
  --color-primary-300: oklch(0.76 0.10 240);
  --color-primary-400: oklch(0.65 0.15 240);
  --color-primary-500: oklch(0.55 0.18 240);
  --color-primary-600: oklch(0.48 0.18 240);
  --color-primary-700: oklch(0.40 0.15 240);
  --color-primary-800: oklch(0.33 0.12 240);
  --color-primary-900: oklch(0.27 0.08 240);

  /* Accent - CTAs y highlights */
  --color-accent-400: oklch(0.75 0.15 160);
  --color-accent-500: oklch(0.65 0.18 160);
  --color-accent-600: oklch(0.55 0.18 160);

  /* Neutral - zinc-based */
  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.96 0.005 260);
  --color-neutral-200: oklch(0.92 0.005 260);
  --color-neutral-300: oklch(0.85 0.005 260);
  --color-neutral-400: oklch(0.70 0.01 260);
  --color-neutral-500: oklch(0.55 0.01 260);
  --color-neutral-600: oklch(0.45 0.01 260);
  --color-neutral-700: oklch(0.35 0.01 260);
  --color-neutral-800: oklch(0.25 0.01 260);
  --color-neutral-900: oklch(0.17 0.01 260);
  --color-neutral-950: oklch(0.12 0.01 260);

  /* Semantic */
  --color-success: oklch(0.65 0.18 145);
  --color-warning: oklch(0.75 0.15 80);
  --color-error: oklch(0.60 0.20 25);
}
```

### Dark mode (default)

```css
:root {
  --background: var(--color-neutral-950);
  --foreground: var(--color-neutral-100);
  --card: var(--color-neutral-900);
  --card-foreground: var(--color-neutral-100);
  --border: var(--color-neutral-800);
  --muted: var(--color-neutral-800);
  --muted-foreground: var(--color-neutral-400);
  --accent: var(--color-accent-500);
}

.light {
  --background: var(--color-neutral-50);
  --foreground: var(--color-neutral-900);
  --card: white;
  --card-foreground: var(--color-neutral-900);
  --border: var(--color-neutral-200);
  --muted: var(--color-neutral-100);
  --muted-foreground: var(--color-neutral-500);
  --accent: var(--color-accent-600);
}
```

---

## 2. Tipografia

### Fuentes

| Uso | Font | Fallback | CSS Variable |
|-----|------|----------|-------------|
| UI text | Inter | system-ui, sans-serif | --font-sans |
| Code, metrics, IDs | JetBrains Mono | ui-monospace, monospace | --font-mono |

### Escala tipografica

```css
@theme {
  --text-xs: 0.75rem;    /* 12px - captions, badges */
  --text-sm: 0.875rem;   /* 14px - secondary text, metadata */
  --text-base: 1rem;     /* 16px - body text */
  --text-lg: 1.125rem;   /* 18px - lead paragraphs */
  --text-xl: 1.25rem;    /* 20px - section headers */
  --text-2xl: 1.5rem;    /* 24px - page titles */
  --text-3xl: 1.875rem;  /* 30px - hero subtitle */
  --text-4xl: 2.25rem;   /* 36px - hero title */
}
```

### Pesos

- 400 Regular: body text, descriptions
- 500 Medium: labels, nav items, badges
- 600 Semibold: headings, card titles
- 700 Bold: hero title, emphasis

---

## 3. Spacing

Base unit: 4px (0.25rem)

```
4px   (1)   - inline spacing
8px   (2)   - tight gaps
12px  (3)   - element spacing
16px  (4)   - section padding (mobile)
24px  (6)   - card padding
32px  (8)   - section gaps
48px  (12)  - section padding (desktop)
64px  (16)  - page margins
```

---

## 4. GitHub Profile Aesthetic

### Banner
- Dimensiones: 1280x640px
- Contenido: nombre + headline + stack icons
- Fondo: gradiente oscuro sutil (neutral-950 a neutral-900)
- Texto en Inter, iconos de tecnologias principales

### Badges consistentes
Usar shields.io con estilo `flat-square` y colores de la paleta:

```markdown
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
```

### README structure para GitHub profile
```
1. Banner image
2. Bio (1-2 lineas, bilingue)
3. Stack badges
4. Featured repos (auto-updated via GitHub Actions)
5. Recent TILs
6. Contact links
```

---

## 5. OG Image Templates

### Proyecto OG (1200x630)
```
+---------------------------------------+
|                                       |
|  [Logo/Avatar]                        |
|                                       |
|  TITULO DEL PROYECTO                  |
|  Descripcion corta en 1 linea        |
|                                       |
|  [stack badges]                       |
|  github.com/user/repo-name           |
|                                       |
+---------------------------------------+
```

- Background: neutral-950
- Texto titulo: Inter Bold, text-3xl, neutral-100
- Descripcion: Inter Regular, text-lg, neutral-400
- Badges: colores del stack
- Generado via Satori (@vercel/og)

### TIL OG (1200x630)
```
+---------------------------------------+
|                                       |
|  TIL                                  |
|  [categoria badge]                    |
|                                       |
|  TITULO DEL TIL                       |
|                                       |
|  [fecha]                              |
|                                       |
+---------------------------------------+
```

---

## 6. shadcn/ui Customizaciones

### Componentes clave

| Componente | Customizacion |
|-----------|---------------|
| Card | border-neutral-800, hover:border-primary-500/50 transition |
| Badge | Variantes por categoria (ai=primary, python=accent, etc.) |
| Button | Primary: bg-primary-500 hover:bg-primary-600 |
| Toggle | Para dark/light mode |
| NavigationMenu | Header nav responsive |

### Radii
```css
@theme {
  --radius-sm: 0.375rem;  /* 6px */
  --radius-md: 0.5rem;    /* 8px - default */
  --radius-lg: 0.75rem;   /* 12px - cards */
  --radius-xl: 1rem;      /* 16px - modals */
}
```

---

## 7. Principios de Diseno

1. **Content-first:** El contenido tecnico es el protagonista, no la decoracion
2. **Consistencia:** Misma paleta y tipografia en site, repos, OG images, social
3. **Legibilidad:** Contraste alto, line-height generoso (1.6-1.75 para prosa)
4. **Minimalismo:** Bordes sutiles, sin gradientes agresivos, sin glassmorphism
5. **Code-friendly:** Syntax highlighting con tema que respete la paleta neutral
