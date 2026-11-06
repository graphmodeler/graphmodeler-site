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

The **Examples** page (`content/examples/`, the menu item "Examples") is a gallery: a card for each example, with a picture, a title and one line. Each example is a short page: what was drawn, the diagram, the key aspects with links to the documentation, the Knowledge Graph in a viewer, and a zip to download. It is meant to show, not to teach: the downloaded project is the how-to.

- **A new example:** copy `templates/example.md` to `content/examples/<short-name>/index.md` and fill it in. Its card appears on the gallery, in the order given by `order`.
- **Drafts:** `draft: true` in the front matter leaves the example out of the finished site altogether (no page, no card, no sitemap entry), so a half-finished one can be committed. Look at it with `npm run dev`. Its files in `content/public/examples/` are still copied to the site, unlinked.
- **The pieces** (`content/.vitepress/theme/components/`): `<ExampleGallery />` (the cards), `<ExampleFacts />` (the small facts from `facts` in the front matter), `<ExampleDiagram image interactive alt />` (a plain SVG picture on white, with a button that opens the interactive one in a new tab), `<ExampleKnowledgeViewer light dark title />` (the app's Knowledge Graph viewer with a published Knowledge Graph in it, in a sandboxed frame; it shows the page that matches the site's theme) and `<ExampleDownload file size />` (the box with the download).
- **Files** go in `content/public/examples/<short-name>/`: the diagram published twice, as `diagram.svg` with SVG post-processing off (the picture on the page) and as `diagram-interactive.svg` with it on (zoom, filters and hover, opened in a new tab; it is not framed in the page, because its controls need the whole window and a frame would capture the mouse wheel), the Knowledge Graph (`.json`) and its two viewer pages, the thumbnail and the `.zip`.
- **Pictures in nodes:** a published SVG only links to its pictures (`images/person.png`), and a page cannot load the links, so the two SVGs are made with the pictures put into them (the app's own code does that for the Diagram tab; see the notes of the context diagram example).
- **Thumbnails** are 960 by 600 WebP images, cropped from the diagram so that its best part fills the card (a few tens of KB each; the SVGs are too big for a gallery). They were made by showing the SVG in a browser window of that size and saving the picture.
- **The Knowledge Graph viewer pages** are made with `node tools/make-knowledge-viewer.mjs <file.json> <output folder> <name>` in the app's repository (it writes `<name>-light.html` and `<name>-dark.html`). They are a copy of the app's viewer, so make them again after the viewer changes.
- **Zips** are made with `node tools/make-zip.mjs <folder> <output.zip>` in the app's repository, because Windows PowerShell's `Compress-Archive` writes backslashes, which Mac and Linux unpack into one flat folder. An exchange file from the Excel tool is turned into a project with `node tools/convert-exchange.mjs`.
- **Wording:** descriptive and plain ("This is a ..."), with a few numbers that were checked in the file. The stories behind an example belong on the blog of the Excel tool, which the page can link to.

## Before the launch

The site is `noindex` until `LAUNCHED` in `content/.vitepress/config.mts` is set to `true`. Every page needs its own `description` in its frontmatter. The
license wording is for an attorney, and the Download page names the current beta in several places.

## Publishing

Pushing to `main` builds the site and publishes it (`.github/workflows/deploy.yml`). The custom domain is set by
`content/public/CNAME`, and needs the domain's DNS pointed at GitHub Pages and Pages turned on for the repository.
