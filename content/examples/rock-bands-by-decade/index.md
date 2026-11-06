---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: false
title: "Rock bands by decade and genre"
tagline: "131 bands in boxes inside boxes."
description: "131 rock bands drawn with the osage layout, in a box for each decade from the 1960s to the 2010s and a box for each genre inside it, with its Knowledge Graph."
thumbnail: /examples/rock-bands-by-decade/thumbnail.webp
order: 7
facts:
  - "131 bands, 6 decades"
  - "18 genres"
  - "osage layout"
---

# Rock bands by decade and genre

<ExampleFacts />

<!--
NOTE FOR THE AUTHOR: the Knowledge Graph section describes version 1.0.1 and later. Checked in the file: 185 nodes (131 bands, 54 clusters: the page, 6 decades and 47 genre boxes), no edges, 78 KB;
bands per decade: '60s 39, '70s 32, '80s 33, '90s 16, '00s 9, '10s 2; Rock is the biggest genre style with 22 bands. The data was compiled by you from public information on bandtoband.com.
-->

This is a map of 131 rock bands. There is a box for each decade, from the 1960s to the 2010s, and inside it a box for each genre that had bands in that decade, with the bands as circles colored by genre. It shows at a glance which genres a decade was made of, and how the
genres come and go. The data was compiled by hand from publicly available information on [bandtoband.com](https://bandtoband.com) and typed into a spreadsheet. It is not an export or a mirror of that site's data, and the site is not affiliated with this example.

<ExampleDiagram image="/examples/rock-bands-by-decade/rock-bands-by-decade.svg" interactive="/examples/rock-bands-by-decade/rock-bands-by-decade-interactive.svg" alt="Rock bands in boxes: one box for each decade from the 1960s down to the 2010s, each holding a box for each genre with the bands of that genre as colored circles" caption="The interactive version opens in a new tab, where it can be zoomed, and where hovering over a band shows its details." />

## Key aspects

- **Clusters inside clusters.** The query gives every band a cluster for its decade and a subcluster for its genre, and the boxes are made from them. See [Clusters, sequences and trees](/docs/sql/#clusters-sequences-and-trees).
- **The osage layout.** The `osage` engine packs the contents of each box into rows and columns, and a pack mode on each kind of box sets how: the decades in one column, and up to six genres across inside a decade. See [Units and packing](/docs/units-and-packing/#the-osage-layout-and-clusters).
- **Sorting.** The boxes and the bands in them are ordered by a number the query writes in an attribute, so the decades run from the oldest down and the genres follow in alphabetical order. See [Placeholders](/docs/placeholders/).
- **Details in tooltips.** Each band's tooltip holds its genre, origin, years active and description, and each genre box's tooltip holds the definition of the genre, both from other sheets joined by the query.

## Knowledge Graph

The map as a Knowledge Graph: 185 nodes and no edges, 131 bands and 54 boxes, with each band saying which decade and genre box it is in. It is about 78 KB, so the counts under the viewer's toolbar are worth a look before it is pasted anywhere. A program can count what the picture only shows: the 1960s hold 39 bands, the 1970s 32 and the 1980s 33, and the 2010s only 2.

<ExampleKnowledgeViewer light="/examples/rock-bands-by-decade/rock-bands-by-decade-knowledge-graph-viewer-light.html" dark="/examples/rock-bands-by-decade/rock-bands-by-decade-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the bands by decade, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/rock-bands-by-decade/rock-bands-by-decade-example.zip" size="94 KB">
The project, the spreadsheet and the Knowledge Graph.
</ExampleDownload>

The data was compiled by hand from public sources and is test data for learning. If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
