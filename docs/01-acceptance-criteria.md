# Criterios de Aceptacion - 073 Portfolio Organico

**Agente:** qa-criteria-validator
**Fecha:** 2026-03-17

---

## Workstream A: Micro-Repos

### A1: Estructura de cada repo
- [ ] README.md en espanol con secciones: El Problema, La Solucion, Uso Rapido, Estructura, Contexto, Licencia
- [ ] README.md en ingles (al menos el primer repo para testear traccion bilingue)
- [ ] LICENSE MIT presente
- [ ] .gitignore apropiado al stack
- [ ] Carpeta src/ con codigo standalone funcional (ejecutable sin dependencias del ecosistema)
- [ ] Carpeta examples/ con al menos 1 ejemplo de uso (si aplica)

### A2: Seguridad pre-publicacion
- [ ] Pasa checklist completo de `02-security-publication-checklist.md`
- [ ] Zero secrets, IPs internas, hostnames de servers, API keys, paths privados
- [ ] gitleaks no reporta findings
- [ ] grep manual de patterns sensibles retorna 0 hits

### A3: Calidad de contenido
- [ ] Pattern extraido de produccion real (no ejemplo academico)
- [ ] Valor standalone: funciona sin conocer el proyecto fuente
- [ ] Documentado el "por que" ademas del "como"
- [ ] Topics/tags relevantes en GitHub (espanol, spanish, nombre del pattern, stack)

### A4: Timeline
- [ ] Primer micro-repo (`claude-agent-patterns`) publicado en semana 2
- [ ] 4+ micro-repos publicados antes de semana 6
- [ ] Cada repo pinned en GitHub profile al publicarse

---

## Workstream B: Portfolio Site

### B1: Performance
- [ ] Lighthouse Performance score >= 90 en mobile
- [ ] Tiempo de carga < 2 segundos en 3G simulado
- [ ] Core Web Vitals verdes (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### B2: Contenido
- [ ] Bio bilingue (espanol + ingles) en landing page
- [ ] Project cards auto-generadas desde data YAML/MDX (no hardcoded en JSX)
- [ ] Seccion TIL con index filtrable por categoria
- [ ] About page con experiencia y stack expertise

### B3: SEO y Social
- [ ] Meta tags completos en todas las paginas (title, description, og:image)
- [ ] OG images dinamicas generadas por pagina de proyecto
- [ ] sitemap.xml generado automaticamente
- [ ] robots.txt configurado
- [ ] Canonical URLs

### B4: UI/UX
- [ ] Dark mode por defecto, toggle a light mode
- [ ] Responsive mobile-first (funcional en 320px+)
- [ ] shadcn/ui components (no HTML crudo)
- [ ] Tipografia consistente (Inter/similar + JetBrains Mono para code)
- [ ] Paleta OKLCH definida en design system

### B5: Deploy
- [ ] Deploy exitoso en Vercel
- [ ] ISR configurado para GitHub stars (revalidation cada 1h)
- [ ] Dominio custom (si aplica) o subdominio Vercel funcional

---

## Workstream C: Content Pipeline

### C1: TIL Repository
- [ ] Repo `til/` creado en GitHub
- [ ] 10+ entradas antes del primer post social
- [ ] Categorias definidas: python, fastapi, shopify, whatsapp, ai, security, devops, claude-code
- [ ] Template consistente para cada entrada (titulo, fecha, stack, contenido, referencias)

### C2: Templates reutilizables
- [ ] Template de post para X (< 280 chars + link)
- [ ] Template de post para LinkedIn (2-3 parrafos + CTA)
- [ ] Template de TIL entry
- [ ] Template de README para micro-repo

### C3: Seguridad en pipeline
- [ ] Checklist de seguridad ejecutado antes de cada publicacion
- [ ] Pre-commit hook con gitleaks instalado en repos publicos
- [ ] Script `sanitize_check.py` funcional y probado

### C4: Ritmo de publicacion
- [ ] 3 posts/semana (lunes, miercoles, viernes)
- [ ] Cada post aporta valor real (no filler)
- [ ] Balance: 50% conocimiento tecnico, 50% updates de repos/tendencias

---

## GO/NO-GO (90 dias)

| Metrica | Minimo (CONTINUAR) | Target | Stretch |
|---------|-------------------|--------|---------|
| GitHub stars totales | >= 100 | 300 | 1,000+ |
| GitHub followers | >= 50 | 200 | 500+ |
| X + LinkedIn followers | >= 200 | 500 | 2,000+ |
| Engagement rate | > 1% | > 3% | > 5% |
| DMs/emails | >= 3 | 10 | 25+ |
| Leads consulting | >= 1 | 3 | 5+ |

### Decisiones

- Stars >= 100 AND followers >= 50 AND leads >= 1: **CONTINUAR Y ESCALAR**
- Stars >= 50 AND followers >= 100 AND leads = 0: **ITERAR** (cambiar temas/formato)
- Stars < 50 AND followers < 50: **PIVOTAR** (evaluar si mercado espanol responde)
