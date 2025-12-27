# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fallout Universe Fandom Wiki built with Astro. Static site with typed Markdown content collections for 11 wiki categories (games, characters, factions, locations, weapons, armor, items, creatures, quests, lore, perks).

## Commands

```bash
npm install          # Install dependencies (Node 18+)
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

## Architecture

### Content System

All wiki content lives in `src/content/` as Markdown files with typed frontmatter:

- **`src/content/config.ts`** - Zod schemas defining frontmatter for each collection. Base schema has: title, description, image, tags, games[], draft. Each collection extends this with category-specific fields.

- **Game identifiers** for the `games` frontmatter field: `fallout1`, `fallout2`, `fallout3`, `fallout-new-vegas`, `fallout4`, `fallout76`, `fallout-tactics`, `fallout-shelter`, `fallout-brotherhood`

### Page Routing

Dynamic routes use `[slug].astro` pattern with `getStaticPaths()` to generate pages from content collections:
```
src/pages/characters/[slug].astro  ->  /characters/nick-valentine
src/pages/games/[slug].astro       ->  /games/fallout4
```

Each category has an `index.astro` (list page) and `[slug].astro` (detail page).

### Layouts

- **`BaseLayout.astro`** - Site shell with header nav, footer, global styles. Theme colors defined as CSS variables (--color-vault-blue, --color-pip-green, --color-pip-amber, etc.)
- **`WikiArticle.astro`** - Article template with infobox support

### Components

- `ArticleCard.astro` - Card for list pages
- `InfoBox.astro` - Sidebar info panel for articles
- `TableOfContents.astro` - Auto-generated TOC

### Adding New Content

1. Create `.md` file in appropriate `src/content/{category}/` folder
2. Include required frontmatter per schema in `config.ts`
3. Use `draft: true` to hide from production

### Adding New Categories

1. Define collection schema in `src/content/config.ts`
2. Create content directory `src/content/{category}/`
3. Add `src/pages/{category}/index.astro` and `[slug].astro`
4. Update nav in `BaseLayout.astro`
