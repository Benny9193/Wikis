# Wiki Hub

A local, self-contained wiki system for personal knowledge management. Open `index.html` in your browser to get started.

## Structure

```
Wikis/
├── index.html              # Main hub page
├── assets/
│   ├── css/
│   │   ├── hub.css         # Hub page styles
│   │   └── wiki.css        # Wiki page styles
│   └── js/
│       └── hub.js          # Hub functionality
├── templates/
│   ├── new-wiki.html       # Guide for creating new wikis
│   └── wiki-page-template.html  # Copy-paste template
└── wikis/
    ├── projects/           # Project documentation
    ├── notes/              # Notes & research
    └── tutorials/          # How-to guides
```

## Usage

1. Open `index.html` in any browser
2. Click on a wiki to view its contents
3. Use the search bar to filter wikis

## Creating a New Wiki

1. Create a folder in `wikis/` with your wiki name
2. Copy `templates/wiki-page-template.html` as your starting point
3. Add a card to `index.html` linking to your new wiki

## Features

- Fully local - no server required
- Clean, responsive design
- Sidebar navigation
- Search functionality
- Mobile-friendly
- Info boxes (note, tip, warning)
- Code syntax styling
- Tables and blockquotes
