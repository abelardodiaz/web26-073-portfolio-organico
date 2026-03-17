# ROADMAP - 073 Portfolio Organico

---

## Fase 0: Bootstrap (Dia 1)

- [ ] Scaffold estructura del proyecto 073
- [ ] Crear `site/` con `pnpm create next-app` (TypeScript, Tailwind, App Router, Turbopack)
- [ ] Crear `tools/` con Python venv + requirements.txt
- [ ] Crear `templates/` con templates base
- [ ] git init + remote a GitLab (privado)
- [ ] git remote add github (publico, solo site/)
- [ ] Instalar pre-commit hooks (gitleaks + sanitize_check)
- [ ] Crear .env.example con variables necesarias
- [ ] Verificar: estructura existe, `pnpm build` pasa, `python tools/sanitize_check.py --dir .` pasa

---

## Fase 1: Foundation (Semanas 1-2)

### GitHub Profile Setup
- [ ] Crear/actualizar README.md del perfil GitHub
- [ ] Bio bilingue (espanol + ingles)
- [ ] Stats cards (GitHub Readme Stats)
- [ ] Links a X y LinkedIn
- [ ] Headline: "Full-stack developer & AI agent architect"

### TIL Repository
- [ ] Crear repo `til/` publico en GitHub
- [ ] Estructura: categorias como carpetas (python/, fastapi/, ai/, etc.)
- [ ] Escribir 10 primeras entradas (extraer de KB 99999)
- [ ] README.md con index automatico por categoria
- [ ] Pre-commit hooks con gitleaks

### Primer Micro-Repo: `claude-agent-patterns`
- [ ] Extraer patterns de 069 (Always-On Agent) y 996 (30+ agentes)
- [ ] Anonimizar: remover TODAS las referencias internas
- [ ] Ejecutar sanitize_check.py -> PASS
- [ ] Ejecutar gitleaks -> PASS
- [ ] Review manual de CADA archivo
- [ ] Crear repo publico en GitHub
- [ ] README en espanol (+ ingles opcionalmente)
- [ ] Agregar topics: spanish, claude-code, ai-agents, patterns
- [ ] Pinear en perfil GitHub

### Portfolio Site Scaffold
- [ ] `pnpm create next-app` con config base
- [ ] Instalar shadcn/ui (`pnpm dlx shadcn@latest init`)
- [ ] Configurar design system (paleta OKLCH, fonts)
- [ ] Crear layout base: Header + Footer + ThemeToggle
- [ ] Crear landing page con hero + placeholders
- [ ] Crear /projects (vacio, estructura lista)
- [ ] Crear /til (vacio, estructura lista)
- [ ] Deploy inicial a Vercel

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
- [ ] Implementar project cards con GitHub stars (ISR)
- [ ] Implementar TIL index con filtros
- [ ] Implementar project detail pages (MDX)
- [ ] Implementar TIL detail pages (MDX)
- [ ] Implementar about page
- [ ] Implementar contact page
- [ ] OG images dinamicas via @vercel/og
- [ ] SEO: sitemap.xml, robots.txt, canonical URLs
- [ ] Performance: Lighthouse >= 90

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
