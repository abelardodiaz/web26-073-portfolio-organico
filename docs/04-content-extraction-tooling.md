# Content Extraction Tooling - 073 Portfolio Organico

**Autor:** 996 (directamente, sin agente especializado)
**Fecha:** 2026-03-17

---

## Stack

- Python 3.12
- httpx >= 0.27.0
- rich >= 13.0.0
- python-dotenv >= 1.0.0

---

## Scripts

### 1. `extract_pattern.py`

**Proposito:** Consultar KB 99999 via `/api/knowledge/answer` para generar un draft Markdown del pattern encontrado.

**Funcionalidad:**
- Recibe query y project_filter como argumentos
- Llama a API 99999 (POST /api/knowledge/answer) con RAG
- Genera un archivo Markdown con el pattern extraido
- Marca secciones potencialmente sensibles con `<!-- REVIEW: posible dato sensible -->`
- Ejecuta sanitize_check.py internamente sobre el output
- Output: archivo `.md` en directorio especificado

**Uso:**
```bash
python tools/extract_pattern.py \
  --query "agent architecture HITL pattern" \
  --project "web26-069" \
  --output content/projects/claude-agent-patterns.mdx \
  --provider deepseek
```

**Notas:**
- Requiere SSH a server003 para acceso a API 99999
- API key configurada en .env (NO hardcodeada)
- Provider opcional: deepseek (default), groq, gemini

---

### 2. `sanitize_check.py`

**Proposito:** Escanear un directorio buscando datos sensibles con los regex patterns del checklist de seguridad.

**Funcionalidad:**
- Recibe `--dir` como argumento
- Carga patterns de la seccion 2 de `02-security-publication-checklist.md`
- Excluye: .git/, node_modules/, .venv/, __pycache__/, *.pyc
- Escanea todos los archivos de texto
- Output: tabla con archivo:linea:pattern para cada finding
- Exit code: 0 (PASS) o 1 (FAIL)
- Integrable como pre-commit hook

**Uso:**
```bash
# Escaneo manual
python tools/sanitize_check.py --dir .

# Como pre-commit hook
python tools/sanitize_check.py --dir . --strict
```

**Output ejemplo (FAIL):**
```
SANITIZE CHECK - FAIL

| Archivo | Linea | Pattern | Tipo |
|---------|-------|---------|------|
| src/example.py | 15 | 10.254.0.3 | VPN IP address |
| README.md | 42 | server003 | Internal server hostname |

2 findings. Fix before publishing.
```

**Output ejemplo (PASS):**
```
SANITIZE CHECK - PASS

0 findings. Safe to publish.
```

---

### 3. `repo_scaffold.py`

**Proposito:** Crear la estructura estandar de un micro-repo desde parametros de input.

**Funcionalidad:**
- Recibe: nombre, descripcion, stack, categorias
- Crea estructura: README.md, LICENSE (MIT), .gitignore, src/, examples/
- README.md generado desde template con secciones: El Problema, La Solucion, Uso Rapido, Estructura, Contexto, Licencia
- .gitignore generado segun stack (python, node, mixed)
- Inicializa git repo
- Agrega pre-commit config con gitleaks + sanitize_check

**Uso:**
```bash
python tools/repo_scaffold.py \
  --name "claude-agent-patterns" \
  --description "Patterns para crear agentes IA con guardrails" \
  --stack python,asyncio \
  --category ai \
  --output ~/repos/claude-agent-patterns
```

---

### 4. `til_entry.py`

**Proposito:** Crear una nueva entrada TIL desde template con frontmatter correcto.

**Funcionalidad:**
- Recibe: titulo, categoria, stack
- Genera archivo MDX con frontmatter (title, slug, category, stack, date)
- Slug auto-generado desde titulo (slugify)
- Fecha automatica (hoy)
- Abre el archivo generado con indicador de donde escribir contenido

**Uso:**
```bash
python tools/til_entry.py \
  --title "Meta API retorna 200 con firma invalida" \
  --category whatsapp \
  --stack python,fastapi
```

**Output:** `content/til/2026-03-20-meta-api-firma-200.mdx`

---

### 5. `social_post.py`

**Proposito:** Generar drafts de posts para X y LinkedIn desde templates del PLAN-EJECUCION.

**Funcionalidad:**
- Recibe: tipo (x, linkedin), nombre del repo/TIL, descripcion
- Genera draft usando template correspondiente
- Para X: limita a 280 chars + link
- Para LinkedIn: 2-3 parrafos + CTA
- Incluye hashtags relevantes
- Output a stdout o archivo

**Uso:**
```bash
# Draft para X
python tools/social_post.py \
  --platform x \
  --repo "claude-agent-patterns" \
  --description "Patterns para agentes IA con guardrails y sub-agentes" \
  --link "https://github.com/abelardodiaz/claude-agent-patterns"

# Draft para LinkedIn
python tools/social_post.py \
  --platform linkedin \
  --repo "claude-agent-patterns" \
  --description "Patterns para agentes IA con guardrails y sub-agentes" \
  --link "https://github.com/abelardodiaz/claude-agent-patterns"
```

---

## .env.example

```
# API 99999 (Knowledge Base)
PM_API_KEY=your_pm_api_key_here
PM_SSH_HOST=server003
PM_BASE_URL=http://localhost:3900

# GitHub (opcional, para evitar rate limits)
GITHUB_TOKEN=your_github_token_here
GITHUB_USER=abelardodiaz
```

---

## requirements.txt

```
httpx>=0.27.0
rich>=13.0.0
python-dotenv>=1.0.0
python-slugify>=8.0.0
```
