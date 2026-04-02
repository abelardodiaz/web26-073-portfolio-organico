# Plan: Publicacion Incremental de clean-arch-fastapi-template

**Origen:** web25-048-crm en server005 (~/projects/web25-048-crm/) + web25-031 (Domus SaaS)
**Destino GitHub:** github.com/abelardodiaz/clean-arch-fastapi-template
**Destino local:** C:/Users/abela/prweb/public/clean-arch-fastapi-template/
**Periodo:** 10 dias (del 19 al 28 de abril 2026, 1 commit/dia)
**Licencia:** MIT
**Empieza:** ~5 dias despues de que termine tinymedia-compress (14 abril)

---

## Contexto

El CRM (048) tiene 11 microservicios en FastAPI con arquitectura hexagonal (ports & adapters),
multi-tenancy con PostgreSQL, Redis Streams, Alembic migrations, JWT+RBAC auth, y shared libraries.
El template extrae los patterns genericos (sin datos del CRM) como un scaffold reutilizable.

No se va a copiar el CRM completo. Se va a crear un template NUEVO usando los patterns de 048
como referencia. Esto es mas limpio y evita filtraciones de datos.

## Que incluye el template

Un microservicio FastAPI completo con:
- Clean Architecture (domain / application / infrastructure / api)
- Repository pattern con PostgreSQL (asyncpg)
- Service layer con use cases
- Alembic migrations
- JWT auth middleware
- Pydantic v2 schemas
- Health check endpoint
- Structured logging (structlog)
- Settings con pydantic-settings
- Docker + docker-compose
- Tests con pytest + httpx

## Estructura final del repo

```
clean-arch-fastapi-template/
  src/
    domain/
      entities/
        user.py              # Entity base + User example
        __init__.py
      exceptions.py          # Domain exceptions
      repositories/
        user_repository.py   # Repository interface (port)
        __init__.py
    application/
      use_cases/
        create_user.py       # Use case example
        get_user.py
        __init__.py
      dto/
        user_dto.py          # Input/Output DTOs
        __init__.py
    infrastructure/
      database/
        connection.py        # Async PostgreSQL pool
        models.py            # SQLAlchemy models (with mixins)
        __init__.py
      repositories/
        pg_user_repository.py  # PostgreSQL implementation (adapter)
        __init__.py
      auth/
        jwt_handler.py       # JWT encode/decode
        middleware.py         # Auth middleware
        __init__.py
      config.py              # pydantic-settings
      logging.py             # structlog setup
    api/
      routes/
        health.py            # Health check
        users.py             # CRUD endpoints
        __init__.py
      dependencies.py        # FastAPI dependency injection
      main.py                # App factory
      __init__.py
  migrations/
    alembic.ini
    env.py
    versions/
      001_initial.py
  tests/
    conftest.py
    test_health.py
    test_users.py
  docker/
    Dockerfile
    docker-compose.yml
  requirements.txt
  requirements-dev.txt
  README.md
  LICENSE
  .env.example
  .gitignore
```

---

## Sanitizacion CRITICA

El template se escribe DESDE CERO usando patterns de 048 como referencia.
NO se copia codigo directamente. Pero verificar que no se filtre:

| Buscar | Accion |
|--------|--------|
| Nombres de tablas del CRM (contacts, tickets, conversations, funnels) | Usar "users" generico |
| Endpoints del CRM (/api/v1/contacts, /tickets, etc) | Usar /api/v1/users generico |
| Redis Streams topics del CRM | Usar ejemplos genericos |
| Credenciales, connection strings | Solo en .env.example con placeholders |
| Referencias a 048, 031, 996, server005 | Eliminar |
| Nombres de clientes o tenants | Eliminar |

Comando de verificacion:
```bash
grep -rn "048\|031\|996\|crm\|domus\|tenant.*real\|server00\|10\.254\|gitlab\|abela" C:/Users/abela/prweb/public/clean-arch-fastapi-template/ --include="*.py" --include="*.md" --include="*.yml" --include="*.txt"
```

---

## Plan dia por dia

### DIA 1 (19 abril) - Scaffold + Domain Layer

**Que hacer:**
1. Crear directorio en prweb/public/clean-arch-fastapi-template/
2. README.md (explicando clean architecture en espanol)
3. LICENSE (MIT), .gitignore, .env.example
4. domain/entities/user.py - Entity base con User de ejemplo
5. domain/exceptions.py - DomainError, NotFoundError, ValidationError
6. domain/repositories/user_repository.py - ABC (port/interface)
7. git init + crear repo GitHub + push

**Commit:**
```
feat: scaffold + domain layer (entities, exceptions, repository port)
```

### DIA 2 (20 abril) - Application Layer (Use Cases + DTOs)

**Que hacer:**
1. application/dto/user_dto.py - CreateUserDTO, UserResponseDTO
2. application/use_cases/create_user.py - CreateUserUseCase
3. application/use_cases/get_user.py - GetUserUseCase
4. push

**Commit:**
```
feat: add application layer (use cases and DTOs)
```

### DIA 3 (21 abril) - Infrastructure: Database

**Que hacer:**
1. infrastructure/database/connection.py - async PostgreSQL pool (asyncpg)
2. infrastructure/database/models.py - SQLAlchemy models + TimestampMixin + SoftDeleteMixin
3. infrastructure/config.py - pydantic-settings (DB_URL, JWT_SECRET, etc)
4. infrastructure/logging.py - structlog config
5. push

**Commit:**
```
feat: add infrastructure - database connection, models, config, logging
```

### DIA 4 (22 abril) - Infrastructure: Repository Implementation

**Que hacer:**
1. infrastructure/repositories/pg_user_repository.py - implementacion PostgreSQL del port
2. Completar connection pool con session factory
3. push

**Commit:**
```
feat: add PostgreSQL repository implementation (adapter)
```

### DIA 5 (23 abril) - Infrastructure: Auth

**Que hacer:**
1. infrastructure/auth/jwt_handler.py - encode/decode JWT
2. infrastructure/auth/middleware.py - FastAPI middleware de auth
3. push

**Commit:**
```
feat: add JWT auth handler and middleware
```

### DIA 6 (24 abril) - API Layer

**Que hacer:**
1. api/main.py - app factory con lifespan
2. api/dependencies.py - dependency injection (repos, use cases)
3. api/routes/health.py - GET /health
4. api/routes/users.py - CRUD /api/v1/users
5. push

**Commit:**
```
feat: add API layer (routes, dependencies, app factory)
```

### DIA 7 (25 abril) - Migrations + Docker

**Que hacer:**
1. migrations/alembic.ini + env.py
2. migrations/versions/001_initial.py
3. docker/Dockerfile (multi-stage)
4. docker/docker-compose.yml (app + postgres)
5. push

**Commit:**
```
feat: add Alembic migrations and Docker setup
```

### DIA 8 (26 abril) - Tests

**Que hacer:**
1. requirements.txt + requirements-dev.txt
2. tests/conftest.py (test database, fixtures)
3. tests/test_health.py
4. tests/test_users.py (CRUD tests con httpx)
5. Verificar que corran: pytest tests/ -v
6. push

**Commit:**
```
test: add pytest suite for health and user CRUD endpoints
```

### DIA 9 (27 abril) - README completo + Diagrama

**Que hacer:**
1. README mejorado:
   - Diagrama ASCII de clean architecture
   - Seccion "Por que Clean Architecture"
   - Guia paso a paso para agregar una nueva entidad
   - Badges (Python, FastAPI, PostgreSQL, License)
2. push

**Commit:**
```
docs: complete README with architecture diagram and entity guide
```

### DIA 10 (28 abril) - CI + Topics + Sitio 073

**Que hacer:**
1. GitHub Action: lint (ruff) + tests (pytest)
2. Topics: python, fastapi, clean-architecture, hexagonal, postgresql, template, spanish
3. Crear MDX en 073
4. Deploy sitio
5. push

**Commit:**
```
ci: add GitHub Actions for lint and tests
```

---

## Verificacion de Compilacion/Ejecucion

Despues del dia 8, verificar que funcione end-to-end:

```bash
# Clonar repo publico
git clone https://github.com/abelardodiaz/clean-arch-fastapi-template.git
cd clean-arch-fastapi-template

# Opcion 1: Docker
docker compose -f docker/docker-compose.yml up -d
curl http://localhost:8000/health

# Opcion 2: Local
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
# Necesita PostgreSQL corriendo
cp .env.example .env
python -m api.main

# Tests
pip install -r requirements-dev.txt
pytest tests/ -v
```

---

## Referencia de Patterns (de 048 y 031)

Archivos de 048 a consultar como REFERENCIA (no copiar directo):

| Pattern | Archivo en 048 | Para que |
|---------|----------------|----------|
| Entity base | services/contacts-service/src/models.py | Mixins, base class |
| Repository port | No existe explicito, pero el patron esta en services/*/src/ | Interface ABC |
| Service layer | services/*/src/main.py | Use case pattern |
| Auth middleware | services/auth-service/src/ | JWT handler |
| DB connection | shared/python/crm_shared/config.py | asyncpg pool |
| Alembic | services/*/alembic/ | Migration setup |
| Docker | docker-compose.dev.yml | Multi-service compose |
| Tests | tests/e2e/ | httpx + pytest pattern |
| Logging | shared/python/crm_shared/logging.py | structlog |

Tambien consultar KB 99999 para detalles:
```
/consultar-99999 kb buscar clean architecture fastapi 048
/consultar-99999 kb buscar repository pattern service layer
```

---

## Timeline Visual

```
Abril 2026
              TinyMedia (051)              Clean Arch (048+031)
              ===============              ====================
Dia 5-14:     [==========>]
Dia 15-18:                    (descanso)
Dia 19-28:                                 [==========>]
```

---

*Plan creado 2 abril 2026. Segundo repo incremental del plan de 15 dias de contribuciones.*
*Nota: este template se ESCRIBE desde cero, no se copia. 048 y 031 son referencia.*
