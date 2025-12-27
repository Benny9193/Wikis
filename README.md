# Fallout Universe Fandom Wiki

A comprehensive fan wiki dedicated to the Fallout video game series, built with [Astro](https://astro.build/) for fast performance and easy content management.

## Features

- **11 Content Categories**: Games, Characters, Factions, Locations, Weapons, Armor, Items, Creatures, Quests, Lore, and Perks
- **Markdown-based Content**: Easy to write and contribute using simple Markdown files
- **Responsive Design**: Fallout-themed UI that works on desktop and mobile
- **SEO Optimized**: Built-in sitemap and meta tags for search engine visibility
- **Fast Performance**: Static site generation for lightning-fast page loads

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.x
- **Content**: Markdown/MDX with typed content collections
- **Styling**: Scoped CSS with CSS variables
- **Build**: Static site generation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Benny9193/Wikis.git
cd Wikis

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

## Project Structure

```
Wikis/
├── public/
│   ├── favicon.svg
│   └── images/           # Add images here
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── ArticleCard.astro
│   │   ├── InfoBox.astro
│   │   └── TableOfContents.astro
│   ├── content/          # Wiki content (Markdown files)
│   │   ├── config.ts     # Content collection schemas
│   │   ├── games/
│   │   ├── characters/
│   │   ├── factions/
│   │   ├── locations/
│   │   ├── weapons/
│   │   ├── armor/
│   │   ├── items/
│   │   ├── creatures/
│   │   ├── quests/
│   │   ├── lore/
│   │   └── perks/
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── WikiArticle.astro
│   └── pages/            # Route pages
│       ├── index.astro
│       ├── games/
│       ├── characters/
│       └── ...
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Adding Content

### Creating a New Article

1. Choose the appropriate category folder in `src/content/`
2. Create a new `.md` file with a URL-friendly name (e.g., `vault-101.md`)
3. Add the required frontmatter at the top of the file
4. Write your content in Markdown

### Frontmatter Examples

#### Character Article

```yaml
---
title: "Three Dog"
description: "The charismatic DJ of Galaxy News Radio in the Capital Wasteland."
image: "/images/characters/three-dog.jpg"
tags:
  - npc
  - radio
games:
  - fallout3
race: human
affiliation:
  - Galaxy News Radio
status: alive
voice_actor: "Erik Dellums"
draft: false
---
```

#### Location Article

```yaml
---
title: "Vault 101"
description: "A Vault-Tec vault located in the Capital Wasteland, designed as a social experiment."
image: "/images/locations/vault-101.jpg"
tags:
  - vault
  - starting-location
games:
  - fallout3
type: vault
region: "Capital Wasteland"
map_marker: true
quests:
  - Escape!
  - Trouble on the Homefront
draft: false
---
```

#### Weapon Article

```yaml
---
title: "Laser Rifle"
description: "A standard energy weapon used by various factions across the wasteland."
image: "/images/weapons/laser-rifle.jpg"
tags:
  - energy-weapon
  - rifle
games:
  - fallout3
  - fallout-new-vegas
  - fallout4
type: energy
damage: "22-25"
ammo_type: "Microfusion Cell"
weight: 8
value: 300
unique: false
draft: false
---
```

### Game Identifiers

When specifying games in frontmatter, use these identifiers:

- `fallout1` - Fallout (1997)
- `fallout2` - Fallout 2 (1998)
- `fallout3` - Fallout 3 (2008)
- `fallout-new-vegas` - Fallout: New Vegas (2010)
- `fallout4` - Fallout 4 (2015)
- `fallout76` - Fallout 76 (2018)
- `fallout-tactics` - Fallout Tactics (2001)
- `fallout-shelter` - Fallout Shelter (2015)
- `fallout-brotherhood` - Fallout: Brotherhood of Steel (2004)

## Adding Images

1. Place images in `public/images/` organized by category
2. Reference them in frontmatter as `/images/category/filename.jpg`
3. Recommended image sizes:
   - Article headers: 1200x630px
   - Infobox images: 300x400px
   - Card thumbnails: 600x338px (16:9)

## Customization

### Theme Colors

Edit CSS variables in `src/layouts/BaseLayout.astro`:

```css
:root {
  --color-vault-blue: #0a4b8c;
  --color-pip-green: #18ff6d;
  --color-pip-amber: #ffb000;
  --color-wasteland-brown: #3d3225;
  --color-nuka-red: #e31c23;
}
```

### Adding New Categories

1. Define the collection schema in `src/content/config.ts`
2. Create the content directory in `src/content/`
3. Add list and detail pages in `src/pages/`
4. Update the navigation in `BaseLayout.astro`

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Add your content or improvements
4. Submit a pull request

## Disclaimer

This is a fan-made wiki and is not affiliated with, endorsed by, or connected to Bethesda Softworks, ZeniMax Media, or Microsoft. Fallout and all related marks are trademarks of Bethesda Softworks LLC.

## License

Content is provided under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Code is MIT licensed