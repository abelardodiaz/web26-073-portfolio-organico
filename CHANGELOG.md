# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-03-17

### Added
- Pre-commit hooks: gitleaks + sanitize_check.py (.pre-commit-config.yaml)
- Content system: lib/content.ts with gray-matter for MDX frontmatter parsing
- MDX rendering via next-mdx-remote/rsc (MdxContent component)
- TIL listing page with category grouping (/til)
- TIL detail pages with MDX rendering (/til/[slug])
- Projects grid page with stack tags (/projects)
- Project detail pages with MDX rendering (/projects/[slug])
- 2 example TIL entries: Next.js 16 proxy vs middleware, pnpm vs npm monorepos
- 1 example project entry: Portfolio Organico
- Landing page now shows featured projects and recent TILs from content system
- Static generation (SSG) for all content pages via generateStaticParams

## [0.1.0] - 2026-03-17

### Added
- Initial project structure (hybrid: Next.js + Python + Markdown)
- Documentation: PLAN, ROADMAP, acceptance criteria, security checklist, architecture, design system
- Claude Code configuration and slash commands
- PROJECT.yaml metadata
- Next.js 16 portfolio site scaffold (Turbopack, Tailwind v4, shadcn/ui)
- All page stubs: landing, projects, TIL, about, contact, 404
- Layout: Header with nav, Footer with social links, ThemeToggle (dark default)
- Python tools: sanitize_check.py, extract_pattern.py, repo_scaffold.py, til_entry.py, social_post.py
- Templates: micro-repo (README, LICENSE, .gitignore), TIL entry, social posts (X, LinkedIn)
- .gitignore, .env.example, README.md
- Deploy inicial a Vercel (production)
- GitHub Profile README (abelardodiaz/abelardodiaz)
- Security: excluidos .claude/, docs/, PROJECT.yaml del repo publico
