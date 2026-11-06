# graphmodeler-site

The website and documentation of Graph Modeler, at https://graphmodeler.com. Built with VitePress and published with GitHub
Pages. This repository holds the site only; the app's source is in a private repository.

## Working on it

```
npm install
npm run dev        # the site at http://localhost:5173, which updates as pages change
npm run build      # the finished site, in content/.vitepress/dist
npm run preview    # the finished site, served the way it will be
```

Node 24 is used. The pages are in `content/`.

## How the pages are laid out

- **A folder for every page.** A page is `content/docs/data/index.md`, and its address is `/docs/data/`. The app links to the
  address with the closing slash, so no link is answered with a redirect. Keep it that way for a new page, and link to other
  pages with the closing slash too.
- **The addresses the app uses** are the help buttons of its tabs: `/docs/data/`, `/docs/styles/`, `/docs/designer/`,
  `/docs/sql/`, `/docs/settings/`, `/docs/diagram/`, `/docs/dot/`, `/docs/knowledge-graph/`, `/docs/svg/` and `/docs/about/`,
  and the home page. Do not rename these without changing the app.
- **Screenshots** are in `content/public/shots/`, each in a light and a dark version, shown with the classes `shot shot-light`
  and `shot shot-dark` (see `content/.vitepress/theme/custom.css`).
- **Wording is original.** Nothing is copied from Graphviz's documentation; link to Graphviz's own page where an attribute
  needs explaining.

## The examples

The **Examples** section (`content/examples/`, the menu item "Examples") holds worked examples: a short article, a published diagram in a frame, and a zip of the project and its data to download.

- **A new example:** copy `templates/example.md` to `content/examples/<short-name>/index.md` and fill it in. It lists itself, and gets an entry in `/feed.xml`, an article block for search engines and the sitemap.
- **Drafts:** `draft: true` in the front matter leaves the example out of the finished site altogether, so a half-written one can be committed. Look at it with `npm run dev`.
- **The pieces** (`content/.vitepress/theme/components/`): `<ExampleMeta />` (byline and tags), `<ExampleDiagram image interactive alt />` (a plain SVG picture on white, with a button that opens the interactive one in a new tab), `<ExampleDownload file size />` (the box with the download), `<ExampleKnowledgeViewer light dark title />` (the app's Knowledge Graph viewer with a published Knowledge Graph in it, in a sandboxed frame; it shows the page that matches the site's theme) and `<ExampleList />` (the list on `/examples/`, with a filter by group).
- **Files** go in `content/public/examples/<short-name>/`: the diagram published twice, as `diagram.svg` with SVG post-processing off (the picture on the page) and as `diagram-interactive.svg` with it on (zoom, filters and hover, opened in a new tab; it is not framed in the page, because its controls need the whole window and a frame would capture the mouse wheel), and the `.zip`.
- **The Knowledge Graph viewer pages** are made from a published Knowledge Graph (`.json`) with `node tools/make-knowledge-viewer.mjs <file.json> <output folder> <name>` in the app's repository (it writes `<name>-light.html` and `<name>-dark.html`; put them in `content/public/examples/<short-name>/`). They are a copy of the app's viewer, so make them again after the viewer changes.
- **Groups** a reader can filter by are in `content/.vitepress/theme/examples-audiences.ts`. The examples use made-up data and no one's real names.

## Before the launch

The site is `noindex` until `LAUNCHED` in `content/.vitepress/config.mts` is set to `true`. Every page needs its own `description` in its frontmatter. The
license wording is for an attorney, and the Download page names the current beta in several places.

## Publishing

Pushing to `main` builds the site and publishes it (`.github/workflows/deploy.yml`). The custom domain is set by
`content/public/CNAME`, and needs the domain's DNS pointed at GitHub Pages and Pages turned on for the repository.
