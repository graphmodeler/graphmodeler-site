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

## Pages that need the owner's eye

The `/license/` page sets out the Personal Use License in plain words, and has no sale mechanism to describe yet. The `/download/`
page says that there is no release. Both need updating when that changes, and the license wording is for an attorney.

## Publishing

Pushing to `main` builds the site and publishes it (`.github/workflows/deploy.yml`). The custom domain is set by
`content/public/CNAME`, and needs the domain's DNS pointed at GitHub Pages and Pages turned on for the repository.
