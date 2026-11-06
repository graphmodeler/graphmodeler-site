---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: false
title: "Musicians and bands: a force-directed graph"
tagline: "Who played with whom, in one picture."
description: "A force-directed graph of 443 rock musicians and the 131 bands they joined, with its Knowledge Graph, a large file of about 78,000 tokens."
thumbnail: /examples/musicians-and-bands/thumbnail.webp
order: 4
facts:
  - "443 musicians, 131 bands"
  - "627 connections"
  - "neato layout"
---

# Musicians and bands: a force-directed graph

<ExampleFacts />

<!--
NOTE FOR THE AUTHOR: the Knowledge Graph section describes version 1.0.1 and later. Numbers were checked in the file: 575 nodes (131 bands, 443 musicians, 1 legend), 627 edges (397 member, 131 side_project, 92 founder, 7 guest), 288,085 characters compact
(about 77,800 tokens), 416,081 indented; Eric Clapton and Peter Brockbanks are in 6 bands each. The AI story stays on your blog; the page links to it.
-->

This is a graph of 443 rock musicians and the 131 bands they joined. Bands are circles colored by genre, musicians are small shapes colored by instrument, and the lines say whether a musician was a member, a founder, in a side project or a guest. The data was compiled by hand
from publicly available information on [bandtoband.com](https://bandtoband.com) and typed into a spreadsheet. It is not an export or a mirror of that site's data, and the site is not affiliated with this example.

<ExampleDiagram image="/examples/musicians-and-bands/band-graph.svg" interactive="/examples/musicians-and-bands/band-graph-interactive.svg" alt="A force-directed graph of rock bands and musicians: bands as circles colored by genre, musicians as small shapes colored by instrument, joined by lines for members, founders, side projects and guests, in a branching network" caption="It is made to be explored: the interactive version opens in a new tab, where it can be zoomed and hovered." />

## Key aspects

- **A force-directed layout.** Graphviz's `neato` engine treats every connection as a spring and pushes unconnected nodes apart, so a band and its members cluster together, and a musician who joined several bands sits between them and pulls the clusters toward each other. See [Settings](/docs/settings/).
- **Instruments as shapes.** Each family of instruments has its own shape and color: vocals are orange ellipses, guitars and bass blue boxes, drums red diamonds, keyboards purple hexagons, brass, woodwinds and harmonica teal triangles, and violins green octagons.
- **Short style names.** Every node and edge repeats the name of its style, so the SQL turns the words in the spreadsheet into short ones (`founding_member_of` becomes `founder`), which keeps the Knowledge Graph smaller.

## Knowledge Graph

The graph as a Knowledge Graph: 575 nodes and 627 edges, about 288,000 characters written compactly, or an estimated 78,000 tokens. It is a large file, and the counts under the viewer's toolbar show what a file will cost before it is pasted anywhere. Tooltips and labels repeat what the properties
already say, about a quarter of the file; the include settings can trim them. The graph can answer questions such as which musician is in the most bands: Eric Clapton and Peter Brockbanks, with six each.
Two AIs were given this graph and asked to find a story in it, which is told in [I Let an AI Read My Knowledge Graph](https://exceltographviz.com/blog/posts/ai-reads-my-knowledge-graph.html).

<ExampleKnowledgeViewer light="/examples/musicians-and-bands/band-knowledge-graph-viewer-light.html" dark="/examples/musicians-and-bands/band-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the musician to band graph, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/musicians-and-bands/band-example.zip" size="156 KB">
The project, the spreadsheet and the Knowledge Graph.
</ExampleDownload>

If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
