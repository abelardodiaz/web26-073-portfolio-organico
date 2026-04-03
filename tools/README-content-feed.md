# Content Feed para Twitter Publisher (994) y OpenClaw (850)

## Que es

Un JSON con todo el contenido publicable de 073 (TILs y proyectos), listo para que
994 o 850 lo consuman y publiquen tweets automaticamente.

## Como acceder

```
GET https://abelardodiaz.dev/api/content-feed.json
```

No requiere auth. Es publico.

## Estructura del JSON

```json
{
  "generated_at": "2026-04-02T...",
  "site_url": "https://abelardodiaz.dev",
  "items": [
    {
      "type": "til",                    // "til" o "project"
      "slug": "whatsapp-webhook...",    // identificador unico
      "title": "WhatsApp Cloud...",     // titulo completo
      "date": "2026-04-02",            // fecha de publicacion en el sitio
      "category": "whatsapp",           // categoria
      "stack": ["python", "fastapi"],   // tecnologias
      "project": "whatsapp-webhook-patterns",  // proyecto relacionado (solo TILs)
      "url": "https://abelardodiaz.dev/til/...",  // URL del contenido
      "github_url": "https://github.com/...",     // repo si aplica
      "tweet_draft": "Texto listo...",  // tweet principal (< 280 chars)
      "tweet_alt": "Texto alterno...",  // variante del tweet
      "published_to_twitter": false,    // ya se tuiteo?
      "scheduled_date": "2026-04-02"   // cuando publicar en Twitter
    }
  ]
}
```

## Como usarlo desde 994

```bash
# 1. Leer feed
curl -s https://abelardodiaz.dev/api/content-feed.json | jq '.items[] | select(.scheduled_date == "2026-04-02" and .published_to_twitter == false)'

# 2. Publicar (dry_run primero)
curl -X POST http://994-server/api/tweet \
  -H "Content-Type: application/json" \
  -H "X-API-Key: TU_KEY" \
  -d '{"text": "TWEET_DRAFT_DEL_FEED", "dry_run": true}'

# 3. Si OK, publicar de verdad
curl -X POST http://994-server/api/tweet \
  -H "Content-Type: application/json" \
  -H "X-API-Key: TU_KEY" \
  -d '{"text": "TWEET_DRAFT_DEL_FEED", "dry_run": false}'
```

## Como usarlo desde 850 (OpenClaw)

850 tiene un skill `twitter-content-073` que:
1. Lee este feed con cron diario a las 10:00 AM CDMX
2. Filtra items de hoy no publicados
3. Llama a 994 con dry_run primero
4. Si OK, publica y notifica por Telegram

## Como regenerar el feed

Desde 073:
```bash
cd /mnt/c/Users/abela/prweb/web26-073-portfolio-organico
python tools/generate_content_feed.py
```

Esto lee todos los MDX en site/content/til/ y site/content/projects/,
genera tweets con templates, y escribe site/public/api/content-feed.json.

El feed se actualiza automaticamente en cada deploy a Vercel.

## Reglas de publicacion

- Max 2 tweets por dia
- Horarios: 10:00 AM y 5:00 PM CDMX
- dry_run SIEMPRE antes de publicar
- No repetir proyecto en menos de 3 dias
- Siempre incluir URL y al menos 1 hashtag
- Max 280 caracteres por tweet
- El schedule esta en tools/tweet_schedule.yaml

## Documentacion completa

Ver: docs/plan-content-feed-994-850.md
