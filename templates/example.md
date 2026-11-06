---
# Copy this file to content/examples/<short-name>/index.md (a folder with an index page, like every page of the site).
# `draft: true` keeps the example out of the finished site (no page, no card in the gallery, no sitemap entry) while you work on it:
# look at it with `npm run dev`. Set it to false to publish it with the next push.
draft: true
# What was drawn, in a few words. The same title is on the card and the page.
title: "System context diagram of a notifications application"
# One line under the title on the card.
tagline: "Icons in the nodes, and a graph an AI can review."
# Shown in search results and when the link is shared.
description: "One or two sentences that say what was drawn and what comes with it."
# The card's picture: a 960 by 600 image made from the diagram (see the README, "Thumbnails").
thumbnail: /examples/short-name/thumbnail.webp
# The place on the Examples page (1 is first).
order: 5
# Small facts under the title: the numbers, and the layout.
facts:
  - "24 nodes, 10 edges"
  - "dot layout, top to bottom"
---

# System context diagram of a notifications application

<ExampleFacts />

State what was drawn, in two or three sentences: what the picture shows, and what it was drawn from. Say it plainly ("This is a ..."), without a story; the stories are on the blog.

<!--
The diagram, in two files in content/public/examples/<short-name>/: publish it from Graph Modeler once with SVG post-processing OFF (diagram.svg, the picture on the page)
and once with it ON (diagram-interactive.svg, which opens in a new tab with zoom, filters and hover). The page shows the picture and a button to the interactive one.
-->
<ExampleDiagram image="/examples/short-name/diagram.svg" interactive="/examples/short-name/diagram-interactive.svg" alt="What the diagram shows, for someone who cannot see it" />

## Key aspects

Two to four points, each naming one feature the example shows (views, tree queries, clusters, pictures in nodes, a layout engine) in a sentence, with a link to the page of the documentation that explains it (with the closing slash). Do not explain how to click through it: the downloaded project is the how-to.

- **The feature.** What it does here, in one sentence. See [Styles](/docs/styles/).

## Knowledge Graph

One or two sentences: how many nodes and edges, how big the file is (the viewer's counts), and one thing a program can answer from it that the picture only shows (check it against the file).

<!-- Made with: node tools/make-knowledge-viewer.mjs <knowledge-graph.json> <folder> <name>, in the app's repository. -->
<ExampleKnowledgeViewer light="/examples/short-name/knowledge-graph-viewer-light.html" dark="/examples/short-name/knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the example, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<!-- A zip of the project (.json), its data files and the Knowledge Graph, in content/public/examples/<short-name>/. Make it with tools/make-zip.mjs (forward slashes). -->
<ExampleDownload file="/examples/short-name/short-name.zip" size="0 KB">
The project, the spreadsheet and the Knowledge Graph.
</ExampleDownload>

Say where the data and any pictures come from, and their licenses. If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
