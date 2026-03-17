# Plan de Ejecucion: Portfolio Organico

**Referencia:** [BRIEF-993.md](BRIEF-993.md) (contexto completo de la evaluacion)
**Responsable:** web25-996 (Claude Code Agentes Demo)
**Fecha inicio planeado:** Post-handoff desde 993
**Costo:** $0

---

## 1. GitHub Profile Setup

### 1.1 Optimizar README.md del perfil GitHub

- Bio profesional en espanol e ingles (bilingue)
- Descripcion: ecosistema de ~40 proyectos, stacks principales
- Stats cards (GitHub Readme Stats o similar)
- Contribution graph visible
- Links a redes sociales (X, LinkedIn)

### 1.2 Pinned Repos

- Pinear los micro-repos a medida que se publican
- Orden: mas trending primero (claude-agent-patterns)
- Maximo 6 pinned repos (limite GitHub)

### 1.3 Bio y Links

- Headline: Full-stack developer + AI agent architect
- Link a LinkedIn
- Link a X/Twitter
- Ubicacion: Mexico

---

## 2. Micro-Repos a Crear (Priorizados)

### Repo 1: `claude-agent-patterns` (PRIMERO - trending topic)

- **Fuente:** web26-069 (Always-On Agent) + web25-996 (30+ agentes)
- **Contenido:**
  - Pattern: agent con HITL (Human-in-the-Loop) via Telegram
  - Pattern: policy engine para guardrails de agentes
  - Pattern: daemon systemd para agent always-on
  - Pattern: router de agentes especializados por dominio
  - Ejemplo: como estructurar un agent con sub-agentes
- **Por que primero:** Claude Code trending (81K stars en repos similares), 0 en espanol
- **Fuente KB:** `/consultar-99999` con queries sobre 069 y 996

### Repo 2: `multi-ai-provider-patterns`

- **Fuente:** web25-900 (Multi-AI Hub v2.14.0)
- **Contenido:**
  - Pattern: orquestacion de 11 providers IA (OpenAI, DeepSeek, Gemini, Grok, Groq, Kimi, Qwen, Claude, Ollama...)
  - Pattern: rate-limiting por provider
  - Pattern: fallback chains (si provider A falla, usar B)
  - Pattern: optimizacion de costos multi-provider
  - Ejemplo: como configurar multi-provider con retry y fallback
- **Fuente KB:** `/consultar-99999` con queries sobre 900

### Repo 3: `whatsapp-webhook-patterns`

- **Fuente:** web26-055 (WiFi Auditor) + web26-056 (Clinica Bot) + web25-048 (CRM)
- **Contenido:**
  - Pattern: webhook retry queue resiliente
  - Pattern: firma HMAC para validar webhooks de Meta
  - Pattern: quirk de Meta API (firma invalida retorna 200)
  - Pattern: bot router con especialistas (CRM)
  - Ejemplo: webhook endpoint con validacion + retry
- **Fuente KB:** `/consultar-99999` con queries sobre 055, 056, 048

### Repo 4: `shopify-mexico-integration-template`

- **Fuente:** web26-066 (Syscom Shopify Sync)
- **Contenido:**
  - Template: sincronizacion con mayoristas mexicanos
  - Pattern: endpoint no documentado Syscom sucursales
  - Pattern: OAuth + webhooks HMAC en Shopify
  - Contexto: 37,524 tiendas Shopify MX, 0 apps nativas mayoristas
  - Ejemplo: sync de catalogo mayorista a Shopify
- **Fuente KB:** `/consultar-99999` con queries sobre 066

### Repo 5: `clean-arch-fastapi-template`

- **Fuente:** web25-048 (CRM Multi-tenant) + web25-031 (Domus SaaS)
- **Contenido:**
  - Template: Clean Architecture / Hexagonal en FastAPI
  - Pattern: multi-tenancy con schema isolation
  - Pattern: service layer + repository pattern
  - Pattern: ports & adapters en Python
  - Ejemplo: CRUD completo con separacion de concerns
- **Fuente KB:** `/consultar-99999` con queries sobre 048, 031

### Repo 6: `til/` (Today I Learned)

- **Fuente:** Todos los proyectos del ecosistema
- **Contenido:**
  - Micro-lecciones de 1-5 parrafos ("Hoy aprendi X en produccion")
  - Categorias: python, fastapi, shopify, whatsapp, ai, security, devops, claude-code
  - Meta inicial: 10-20 entradas extraidas de KB 99999
  - Formato: un archivo .md por entrada, organizado por carpeta de categoria
- **Referencia:** jbranchaud/til (14K stars con 1 solo dev)

---

## 3. Para Cada Micro-Repo: Checklist de Publicacion

### 3.1 Identificar el Pattern

- [ ] Consultar KB 99999 (`/consultar-99999`) para encontrar el pattern unico en el proyecto fuente
- [ ] Documentar que hace unico a este pattern (vs tutoriales genericos)
- [ ] Verificar que el pattern tiene valor standalone (funciona sin el proyecto completo)

### 3.2 Extraer y Anonimizar

- [ ] Extraer el codigo/pattern relevante del proyecto fuente
- [ ] **CRITICO:** Remover datos sensibles:
  - API keys, tokens, secrets
  - IPs de servidores, dominios internos
  - Nombres de clientes o empresas
  - URLs de produccion
  - Credenciales de bases de datos
- [ ] Verificar con grep que no queden strings sensibles

### 3.3 Crear Estructura del Repo

```
repo-name/
|-- README.md          # En espanol: que problema resuelve, como usarlo, ejemplo
|-- LICENSE            # MIT
|-- .gitignore         # Python/Node/general segun stack
|-- src/               # Codigo del pattern (minimo funcional)
|-- examples/          # Ejemplo de uso (opcional si README es suficiente)
```

### 3.4 README.md (Estructura)

Cada README debe seguir esta estructura:

```markdown
# nombre-del-repo

Descripcion corta: que problema resuelve.

## El Problema

Explicacion del pain point real (1-2 parrafos).

## La Solucion

Como este pattern lo resuelve (1-2 parrafos).

## Uso Rapido

Ejemplo de codigo minimo para empezar.

## Estructura

Explicacion de los archivos del repo.

## Contexto

De donde viene este pattern (sin revelar datos sensibles).
Que aprendimos usandolo en produccion.

## Licencia

MIT
```

### 3.5 Publicar

- [ ] Crear repo publico en GitHub
- [ ] Push del codigo
- [ ] Verificar que el README se ve bien en GitHub
- [ ] Agregar topics/tags relevantes (espanol, spanish, pattern name, stack)
- [ ] Pinear en el profile si es uno de los top 6

---

## 4. Contenido / Posts Templates

### 4.1 Template de Post para X (cuando se publica un repo)

```
[Emoji opcional] Acabo de publicar [nombre-repo] en GitHub

[1-2 lineas: que problema resuelve]

Lo extraje de un proyecto real en produccion donde [contexto breve].

[Link al repo]

#OpenSource #[stack] #[tema] #DevLatam
```

Ejemplo:
```
Acabo de publicar claude-agent-patterns en GitHub

Patterns para crear agentes IA con guardrails, HITL y sub-agentes especializados.

Lo extraje de un agente always-on que corre en produccion con systemd + policy engine.

github.com/user/claude-agent-patterns

#OpenSource #ClaudeCode #AIAgents #DevLatam
```

### 4.2 Template de Post para LinkedIn (mas largo)

```
[Titulo: pregunta o statement que genera curiosidad]

[2-3 parrafos: contexto del problema, que aprendiste, por que importa]

[Link al repo o recurso]

[Call to action: "Si trabajas con [tema], te puede servir"]

#OpenSource #[stack] #[tema]
```

### 4.3 Template de TIL Entry

```markdown
# [Titulo corto de lo aprendido]

**Fecha:** YYYY-MM-DD
**Proyecto:** [codigo sin revelar detalles sensibles]
**Stack:** [tecnologia]

[1-5 parrafos explicando que aprendiste y por que importa]

[Codigo de ejemplo si aplica]

## Referencias
- [links relevantes]
```

### 4.4 Guia de Publicacion

| Dia | Contenido | Plataforma |
|-----|-----------|-----------|
| Lunes | TIL o post tendencia IA | X + LinkedIn |
| Miercoles | Update de repo o pattern nuevo | X + LinkedIn + GitHub |
| Viernes | Reflexion/opinion tech o respuesta a tendencia | X + LinkedIn |

**Ritmo:** 3x/semana. No mas para evitar burnout.
**Regla:** Cada post debe aportar valor real (no filler). Si no hay nada valioso que decir, no publicar.

---

## 5. Orden de Ejecucion

### Fase 1: Setup (Semana 1-2)

1. Optimizar GitHub profile (README.md, bio, links)
2. Crear repo `til/` con 10 primeras entradas (extraer de KB 99999)
3. Crear y publicar `claude-agent-patterns` (primer micro-repo)
4. Primer post en X + LinkedIn anunciando el repo

### Fase 2: Repos + Contenido (Semana 3-6)

5. Publicar `multi-ai-provider-patterns`
6. Publicar `whatsapp-webhook-patterns`
7. Publicar `shopify-mexico-integration-template`
8. Mantener ritmo 3x/semana de posts
9. Agregar TILs semanalmente

### Fase 3: Escalar + Medir (Semana 7-12)

10. Publicar `clean-arch-fastapi-template`
11. Evaluar metricas vs thresholds GO/NO-GO
12. Ajustar segun feedback (issues, DMs, engagement)
13. Decidir si escalar, iterar o pivotar

---

## 6. Herramientas Disponibles en 996

| Herramienta | Uso |
|-------------|-----|
| `/consultar-99999` | Minar KB (348 docs, 3,348 chunks) para encontrar patterns |
| `/consultar-900` | Validar ideas de contenido con debates multi-IA |
| Agentes 996 | 21+ agentes especializados para crear contenido tecnico |
| Templates arranque | 10 templates por stack para crear estructura de repos |
| Docs proyectos | Preparativos de 22+ proyectos como fuente de conocimiento |

---

## 7. Riesgos y Mitigaciones

| Riesgo | Mitigacion |
|--------|-----------|
| Exposicion de datos sensibles | Checklist pre-publicacion obligatorio (seccion 3.2) |
| Repos sin traccion (0 stars) | Publicar 5+ repos para diversificar. Volumen genera descubrimiento |
| Burnout por ritmo de publicacion | Empezar con 1 repo/semana + 3 posts. Escalar despues |
| Contenido en espanol no atrae | Primer repo bilingue (README en espanol + ingles) para testear |

---

*Plan tactico generado desde BRIEF-993 para ejecucion autonoma por 996*
