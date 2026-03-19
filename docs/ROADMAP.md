# ROADMAP - 073 Portfolio Organico

---

## Fase 0: Bootstrap (Dia 1) -- COMPLETADA 2026-03-17

- [x] Scaffold estructura del proyecto 073
- [x] Crear `site/` con `pnpm create next-app` (TypeScript, Tailwind, App Router, Turbopack)
- [x] Crear `tools/` con Python venv + requirements.txt
- [x] Crear `templates/` con templates base
- [x] git init + remote a GitLab (privado)
- [x] git remote add github (publico, solo site/)
- [x] Instalar pre-commit hooks (gitleaks + sanitize_check)
- [x] Crear .env.example con variables necesarias
- [x] Verificar: estructura existe, `pnpm build` pasa, `python tools/sanitize_check.py --dir .` pasa

---

## Fase 1: Foundation (Semanas 1-2)

### GitHub Profile Setup
- [x] Crear/actualizar README.md del perfil GitHub
- [x] Bio bilingue (espanol + ingles)
- [x] Stats cards (GitHub Readme Stats)
- [x] Links a X y LinkedIn
- [x] Headline: "Full-stack developer & AI agent architect"

### TIL Repository
- [ ] Crear repo `til/` publico en GitHub
- [ ] Estructura: categorias como carpetas (python/, fastapi/, ai/, etc.)
- [ ] Escribir 10 primeras entradas (extraer de KB 99999)
- [ ] README.md con index automatico por categoria
- [ ] Pre-commit hooks con gitleaks

### Primer Micro-Repo: `claude-agent-patterns` -- COMPLETADA 2026-03-17
- [x] Extraer patterns de 069 (Always-On Agent) y 996 (30+ agentes)
- [x] Anonimizar: remover TODAS las referencias internas
- [x] Ejecutar sanitize_check.py -> PASS
- [x] Ejecutar gitleaks -> PASS (manual grep scan, gitleaks pendiente instalar)
- [x] Review manual de CADA archivo
- [x] Crear repo publico en GitHub
- [x] README en espanol (+ ingles opcionalmente)
- [x] Agregar topics: spanish, claude-code, ai-agents, patterns
- [ ] Pinear en perfil GitHub (requiere accion manual)

### Portfolio Site Scaffold -- COMPLETADA 2026-03-17
- [x] `pnpm create next-app` con config base
- [x] Instalar shadcn/ui (`pnpm dlx shadcn@latest init`)
- [x] Configurar design system (paleta OKLCH, fonts)
- [x] Crear layout base: Header + Footer + ThemeToggle
- [x] Crear landing page con hero + placeholders
- [x] Crear /projects (vacio, estructura lista)
- [x] Crear /til (vacio, estructura lista)
- [x] Deploy inicial a Vercel

### Primer Post Social
- [ ] Post en X anunciando `claude-agent-patterns`
- [ ] Post en LinkedIn (version larga)
- [ ] Compartir en comunidades relevantes (Reddit, Discord dev LATAM)

---

## Fase 2: Build + Publish (Semanas 3-6)

### Micro-Repos
- [ ] Publicar `multi-ai-provider-patterns` (semana 3)
- [ ] Publicar `whatsapp-webhook-patterns` (semana 4)
- [ ] Publicar `shopify-mexico-integration-template` (semana 5)
- [ ] Cada repo: sanitize -> gitleaks -> review -> publish
- [ ] Pinear repos mas trending en perfil

### Portfolio Site Completo
- [x] Implementar project cards con GitHub stars (ISR)
- [x] Implementar TIL index con filtros
- [x] Implementar project detail pages (MDX)
- [x] Implementar TIL detail pages (MDX)
- [x] Implementar about page
- [x] Implementar contact page
- [x] OG images dinamicas via @vercel/og
- [x] SEO: sitemap.xml, robots.txt, canonical URLs
- [x] Performance: Lighthouse >= 90 (achieved 98-100 across all pages)
- [x] Accessibility: Lighthouse 100 (WCAG AA contrast, aria-labels, semantic HTML)
- [x] Google Analytics (G-B1XR6RGWG3)

### Content Pipeline
- [ ] Mantener ritmo 3x/semana de posts
- [ ] Agregar 2-3 TILs por semana
- [ ] Calendario: Lunes (TIL/tendencia), Miercoles (update repo), Viernes (reflexion)
- [ ] Cada post pasa checklist de seguridad

---

## Fase 3: Scale + Measure (Semanas 7-12)

### Repos Adicionales
- [ ] Publicar `clean-arch-fastapi-template` (semana 8)
- [ ] Evaluar demanda para repos adicionales
- [ ] Considerar repos bilingues si traccion en ingles

### Metricas (evaluar a 90 dias)
- [ ] Recopilar: stars totales, followers GitHub, followers X/LinkedIn
- [ ] Recopilar: engagement rate, DMs/emails, leads consulting
- [ ] Comparar vs thresholds GO/NO-GO

### Decision
- [ ] Stars >= 100 AND followers >= 50 AND leads >= 1: CONTINUAR
- [ ] Stars >= 50 AND followers >= 100 AND leads = 0: ITERAR
- [ ] Stars < 50 AND followers < 50: PIVOTAR

---

## Verificacion por Fase

### Fase 0 Complete Criteria
- Estructura del proyecto existe y es funcional
- `pnpm build` en site/ pasa sin errores
- `python tools/sanitize_check.py --dir .` retorna PASS
- Git inicializado con remotes configurados

### Fase 1 Complete Criteria
- GitHub profile optimizado y visible
- TIL repo con 10+ entradas
- `claude-agent-patterns` publicado y pineado
- Portfolio site deployed en Vercel (aunque sea scaffold)
- Primer post publicado en X y LinkedIn

### Fase 2 Complete Criteria
- 4+ micro-repos publicados
- Portfolio site completo y funcional
- Ritmo de 3x/semana sostenido
- TIL repo con 20+ entradas

### Fase 3 Complete Criteria
- 5+ micro-repos publicados
- Metricas recopiladas y evaluadas
- Decision tomada: CONTINUAR / ITERAR / PIVOTAR
