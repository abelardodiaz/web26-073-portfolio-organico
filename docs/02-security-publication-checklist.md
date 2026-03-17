# Security Publication Checklist - 073 Portfolio Organico

**Agente:** security-architect
**Fecha:** 2026-03-17
**Clasificacion de riesgo:** CRITICO

> Este es el documento MAS IMPORTANTE del proyecto. El riesgo #1 es filtrar datos
> sensibles de ~40 proyectos privados a repositorios publicos en GitHub.

---

## 1. Pre-Publication Checklist

Ejecutar TODOS estos pasos antes de cada `git push` a un repo publico.

### 1.1 Scanning automatizado

```bash
# gitleaks - secret scanning
gitleaks detect --source . --verbose

# Custom regex patterns (ver seccion 2)
python tools/sanitize_check.py --dir .
```

### 1.2 Grep manual de IPs internas

```bash
# IPs VPN (CRITICO)
grep -rn "10\.254\.0\." .
grep -rn "192\.168\." .

# IPs publicas de servers
grep -rn "51\.222\.207" .
grep -rn "51\.79\." .
grep -rn "149\.56\." .
```

### 1.3 Grep de hostnames internos

```bash
# Hostnames de servers (CRITICO)
grep -rni "server003" .
grep -rni "server005" .
grep -rni "server002" .
grep -rni "srv009" .
grep -rni "srv00" .

# Hostnames de servicios
grep -rni "redv6\.com" .
grep -rni "domusrentas" .
grep -rni "quierounenlace" .
grep -rni "wp602" .
grep -rni "shapps602" .
```

### 1.4 Grep de API keys y tokens

```bash
# API keys del ecosistema (CRITICO)
grep -rn "900-996-" .
grep -rn "pm-996-" .
grep -rn "pm-[0-9]*-" .
grep -rn "6d4411dfb6d3ff8954f013ae3827362dbc566212a97f505f" .
grep -rn "e5a335be82ff2799353a6a865d4ae3f23bbd16c901d81415" .

# Tokens genericos
grep -rn "shpss_" .
grep -rn "shpat_" .
grep -rn "sk-[a-zA-Z0-9]" .
grep -rn "Bearer " .
grep -rn "X-API-Key" .
```

### 1.5 Grep de credenciales de base de datos

```bash
grep -rni "postgres://" .
grep -rni "redis://" .
grep -rni "mongodb://" .
grep -rni "mysql://" .
grep -rn "DB_PASSWORD" .
grep -rn "DATABASE_URL" .
```

### 1.6 Grep de paths internos

```bash
# Paths de servers (CRITICO)
grep -rn "/home/ubuntu" .
grep -rn "/mnt/c/Users/abela" .
grep -rn "C:\\\\Users\\\\abela" .
grep -rn "C:/Users/abela" .

# Paths de proyectos
grep -rn "/var/www/redv6" .
grep -rn "/var/www/web25" .
grep -rn "web25-" .
grep -rn "web26-" .
```

### 1.7 Grep de puertos internos

```bash
# Puertos de servicios internos (CRITICO)
grep -rn ":3900" .     # API 99999
grep -rn ":8900" .     # API 900
grep -rn ":51803" .    # WireGuard wg0
grep -rn ":51900" .    # WireGuard wg-inter
grep -rn ":8500" .     # Otros servicios internos
```

### 1.8 Grep de WireGuard

```bash
# Keys WireGuard (CRITICO)
grep -rn "LOeG5RVSShmXG7ymDq5aK4ks857vcjwTwqis974dQSg=" .
grep -rn "giCh5Htu9JnKDkmegz" .
grep -rn "kL5FteUcW+dyBVKrfPhk2" .
grep -rn "wg-inter" .
grep -rn "wg-trust" .
grep -rn "PrivateKey" .
grep -rn "PublicKey" .
```

---

## 2. Custom Regex Patterns para sanitize_check.py

```python
SENSITIVE_PATTERNS = [
    # IPs
    (r"10\.254\.0\.\d+", "VPN IP address"),
    (r"192\.168\.\d+\.\d+", "Private network IP"),
    (r"51\.222\.207\.\d+", "Public server IP"),
    (r"51\.79\.\d+\.\d+", "Public server IP"),
    (r"149\.56\.\d+\.\d+", "Public server IP"),

    # Hostnames
    (r"server00[2-9]", "Internal server hostname"),
    (r"srv\d{3}", "Internal server hostname"),
    (r"redv6\.com", "Internal domain"),
    (r"domusrentas", "Client domain"),
    (r"quierounenlace", "Client domain"),

    # API Keys
    (r"900-\d{3}-[a-f0-9]{48}", "API 900 key"),
    (r"pm-\d{3}-[a-f0-9]{40}", "PM 99999 key"),
    (r"shpss_[a-f0-9]+", "Shopify secret"),
    (r"shpat_[a-f0-9]+", "Shopify access token"),
    (r"sk-[a-zA-Z0-9]{20,}", "OpenAI/generic API key"),
    (r"R0sn3ft", "Router credentials"),
    (r"pxrgwqy", "Router username"),

    # Paths
    (r"/home/ubuntu/projects?", "Server path"),
    (r"/mnt/c/Users/abela", "WSL path"),
    (r"C:\\\\?Users\\\\?abela", "Windows path"),
    (r"/var/www/(redv6|web2[56])", "Server web path"),

    # Project codes (no revelar mapping)
    (r"web2[56]-\d{3}", "Internal project code"),

    # Ports
    (r":3900\b", "PM API port"),
    (r":8900\b", "API 900 port"),
    (r":51803\b", "WireGuard port"),
    (r":51900\b", "WireGuard inter port"),

    # WireGuard
    (r"LOeG5RVSShmXG7ymDq5aK4ks857vcjwTwqis974dQSg=", "WireGuard public key"),
    (r"giCh5Htu9JnKDkmegz\+Pm3I8htvnnACl2M9SdxzhQUE=", "WireGuard public key"),
    (r"kL5FteUcW\+dyBVKrfPhk2/mAsBXpH6k5ohTEH/\+TwDs=", "WireGuard public key"),
    (r"PrivateKey\s*=", "WireGuard private key"),

    # Database
    (r"postgres://\S+", "Database connection string"),
    (r"redis://\S+", "Redis connection string"),
    (r"mongodb://\S+", "MongoDB connection string"),
    (r"DB_PASSWORD\s*=\s*\S+", "Database password"),
]
```

---

## 3. Reglas de Contenido

### NUNCA (prohibido)
- Referenciar codigos de proyecto directamente (web25-048, web26-056, etc.)
- Mencionar infraestructura de servers (server003, server005, VPN, WireGuard)
- Incluir endpoints internos (localhost:3900, localhost:8900)
- Nombrar clientes o empresas especificas
- Incluir credenciales de router (MikroTik, passwords)
- Revelar arquitectura de red interna (topologia VPN, subnets)
- Mencionar herramientas internas (API 900, API 99999, KB RAG)

### SI (permitido)
- Describir patterns abstractamente ("en un proyecto de produccion con multi-tenancy...")
- Usar datos anonimizados ("un ecommerce con ~37K tiendas en el pais...")
- Mostrar codigo generico que funcione standalone
- Referenciar tecnologias publicas (FastAPI, Django, Next.js, Claude Code)
- Compartir lecciones aprendidas sin revelar contexto interno
- Mencionar stacks y herramientas open source

### Transformaciones permitidas
| Dato real | Version publica |
|-----------|----------------|
| web25-048 (CRM) | "un CRM multi-tenant" |
| server003 | "el servidor principal" |
| API 900 | "una API de orquestacion multi-IA" |
| Syscom | "un mayorista de tecnologia" |
| 10.254.0.3 | (no mencionar, irrelevante) |
| 37,524 tiendas Shopify MX | "~37K tiendas en Mexico" |

---

## 4. Tooling Recomendado

### 4.1 Pre-commit hook (en cada repo publico)

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.0
    hooks:
      - id: gitleaks

  - repo: local
    hooks:
      - id: sanitize-check
        name: Sanitize Check
        entry: python tools/sanitize_check.py --dir .
        language: python
        pass_filenames: false
        always_run: true
```

### 4.2 Script sanitize_check.py

Ubicacion: `tools/sanitize_check.py`

Funcionalidad:
1. Recibe `--dir` como argumento
2. Escanea todos los archivos del directorio (excluyendo .git/, node_modules/, .venv/)
3. Aplica TODOS los regex patterns de la seccion 2
4. Output: PASS (0 findings) o FAIL (lista de findings con archivo:linea:pattern)
5. Exit code: 0 si PASS, 1 si FAIL
6. Integrable como pre-commit hook

### 4.3 .gitignore base para repos publicos

```
.env
.env.local
.env.*.local
*.pem
*.key
*.crt
.claude/
node_modules/
__pycache__/
.venv/
*.pyc
.DS_Store
```

---

## 5. Workflow de Publicacion Segura

```
1. Extraer pattern del proyecto fuente (via KB 99999 o codigo directo)
2. Anonimizar: reemplazar datos reales con genericos
3. Crear repo con estructura estandar
4. Ejecutar sanitize_check.py -> DEBE pasar
5. Ejecutar gitleaks -> DEBE pasar
6. Review manual: leer CADA archivo buscando contexto implicito
7. Solo si 4+5+6 pasan: git push al repo publico
```

---

## 6. Respuesta a Incidentes

Si se detecta un leak post-publicacion:

1. **Inmediato:** Eliminar/editar el commit con `git filter-branch` o BFG Repo Cleaner
2. **Rotar:** Cambiar la credencial/key expuesta
3. **Verificar:** Buscar uso no autorizado de la credencial
4. **Documentar:** Agregar el pattern al checklist para prevenir recurrencia
5. **Force push:** Reescribir historial del repo publico

---

*Fuente de patterns: agente-security-architect.md del ecosistema 996*
