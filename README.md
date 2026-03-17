# Portfolio Organico

Presencia publica tecnica via portfolio site, micro-repos y contenido social.

## Structure

```
site/       # Next.js 16 portfolio (pnpm)
tools/      # Python extraction/publication scripts
templates/  # Templates for micro-repos, TILs, social posts
docs/       # Planning and documentation
```

## Stack

- **Site:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui
- **Tools:** Python 3.12, httpx, rich
- **Content:** MDX/YAML (no CMS, no DB)
- **Deploy:** Vercel

## Setup

### Site
```bash
cd site
pnpm install
pnpm dev
```

### Tools
```bash
cd tools
python3 -m venv .venv
source .venv/bin/activate  # or .venv/Scripts/activate on Windows
pip install -r requirements.txt
cp .env.example .env
```

## Security

Before pushing to any public repository:
1. Run `python tools/sanitize_check.py --dir .`
2. Run `gitleaks detect --source . --verbose`
3. Manual review of each file

See `docs/02-security-publication-checklist.md` for the full checklist.

## License

MIT
