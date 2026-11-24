# Graph Modeler website

The site at https://graphmodeler.com, built with VitePress. `README.md` says how it is laid out and how the examples, screenshots and downloads are made: read it first. This file adds the rules for working on it.

**This repository is public, and so is this file.** Nothing private goes in any file or commit message: unreleased plans, business details, personal names or addresses that are not already on the site, folder paths, keys.

## Git and publishing

The owner is not a git expert. Explain what a git step does, in plain words, before doing it.

- **Pushing `main` publishes the site.** It is public within minutes. Never push or merge to `main`; the owner does that, or asks for it.
- Commit only when the owner says so. Stage files by name, never `git add -A`.
- At the start, say which branch is checked out and whether anything is uncommitted. Leave changes you did not make alone and ask.
- Never use `reset --hard`, `clean`, force push or amend a pushed commit. To undo a commit, use `git revert`.
- If a publish hangs or times out, make a new commit. Rerunning the same one has failed.

## The site never runs ahead of the app

- Pages that describe an unreleased version stay on a branch until release day, so that `main` can always be published.
- In What's new (`content/docs/changelog/`), an entry for an unreleased version stays inside an HTML comment until then.
- On release day: the version, date, links and sizes on the Download page, and the What's new entry with its date. Check the live pages afterwards.
- Verify what a page says in the app. Do not describe a feature from memory.

## Pages

- Each page is a folder with an `index.md` and its own `description` in the front matter. Link with the closing slash.
- **The app's Help buttons open these, so never rename them:** under `/docs/`, `data`, `mappings`, `sql`, `designer`, `styles`, `diagram`, `knowledge-graph`, `dot`, `settings`, `svg` and `about`. The app also opens `/`, `/download/`, `/license/`, `/pricing/` and `/docs/builtin-graphviz/`.
- A link to a file that is not a page, such as the release key, is written as HTML (`<a href>`).
- Do not change the wording of the License, Terms, Privacy, Refunds or Pricing pages unless asked.
- The Privacy page says the site uses no cookies, advertising or analytics. Add no script, font, embed or tracker from another site.
- The name carries the trademark sign ™, never ®.

## Writing

- US English only. The site is not translated.
- Plain, short and descriptive. Original wording: never copied from Graphviz's documentation, which is linked instead.
- Order things by how much they are used, not by when they were built.
- An example's file and table names match what its rows hold.
- Screenshots are taken from the real app, as a light and dark pair, and never drawn. No private folder path may show.

## Before saying a change is done

Run `npm run build`, which fails on dead links, and look at the changed pages in light and dark and at phone width. Say what you checked.
