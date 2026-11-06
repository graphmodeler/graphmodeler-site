---
# Ready to publish (draft: false). Set it to true to keep it out of the finished site.
draft: false
title: "Order process, drawn by hand"
tagline: "No SQL: every row typed into the grid."
description: "A flow diagram of an order process typed into Graph Modeler row by row, with no SQL and no spreadsheet behind it, with its Knowledge Graph."
thumbnail: /examples/order-process-by-hand/thumbnail.webp
order: 1
facts:
  - "6 nodes, 5 edges"
  - "dot layout, left to right"
  - "typed by hand, no SQL"
---

# Order process, drawn by hand

<ExampleFacts />

<!--
NOTE FOR THE AUTHOR: the Knowledge Graph section describes version 1.0.1 and later. Numbers were checked in the file: 7 nodes (one of them the Warehouse cluster), 5 edges, 1,431 characters compact (about 390 tokens). The data is the order process used across the documentation.
-->

This is a flow diagram of an order process: an order is received, a credit check looks the customer up and passes an approved order to the warehouse, where it is picked and packed, and then it is shipped. It is typed into the grid row by row. There is no SQL and no spreadsheet behind
it, which is how a small diagram is made.

<ExampleDiagram image="/examples/order-process-by-hand/order-process.svg" interactive="/examples/order-process-by-hand/order-process-interactive.svg" alt="A flow diagram: Order received, then a Credit check diamond that looks up Customers and, when approved, passes the order to a Warehouse box holding Pick items and Pack order, and then to Ship order" caption="It opens in a new tab, where it can be zoomed and hovered." />

## Key aspects

- **Rows, not boxes.** A row with one item is a node. A row with an item and a related item is an edge from the first to the second. The whole diagram is the fourteen rows below. See [The Data tab](/docs/data/).
- **Styles decide how it looks.** Step, Decision and Store are node styles, and Flow and Lookup are edge styles. Change a style and every node or edge that uses it changes with it. See [Styles](/docs/styles/).
- **A cluster is a pair of rows.** The Warehouse box is made by a row that opens it (`cluster_Warehouse {`) and a row that closes it (`}`); the nodes between them are inside. See [Clusters](/docs/data/#clusters).
- **A row can be a comment.** The last row has the `#` flag, so it is kept but ignored.

<img class="shot shot-light" src="/shots/data-light.png" alt="The Data tab: the rows of the order process, with the item, label, related item and style of each">
<img class="shot shot-dark" src="/shots/data-dark.png" alt="The Data tab in the dark theme: the rows of the order process, with the item, label, related item and style of each">

*The Data tab. These rows are the whole model.*

## Knowledge Graph

The diagram as a Knowledge Graph: six nodes and the Warehouse cluster, five edges and six styles, only about 1,400 characters written compactly, or an estimated 400 tokens, so the whole file can be read at a glance. It records what each style means, which edge looks up and which one is approved,
and that Pick items and Pack order are inside the Warehouse.

<ExampleKnowledgeViewer light="/examples/order-process-by-hand/order-process-knowledge-graph-viewer-light.html" dark="/examples/order-process-by-hand/order-process-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the order process, in the viewer of Graph Modeler" :height="520" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/order-process-by-hand/order-process-example.zip" size="3 KB">
The project and the Knowledge Graph.
</ExampleDownload>

If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
