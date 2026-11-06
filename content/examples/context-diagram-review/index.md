---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: true
title: "System context diagram of a notifications application"
tagline: "Icons in the nodes, and a graph an AI can review."
description: "A system context diagram of a hypothetical Consumer Notifications application, with a picture in every node, drawn from the Context Diagram Toolkit, with its Knowledge Graph."
thumbnail: /examples/context-diagram-review/thumbnail.webp
order: 3
facts:
  - "163 styles"
  - "6 views"
  - "18 icons"
---

# System context diagram of a notifications application

<ExampleFacts />

<!--
NOTE FOR THE AUTHOR: the Knowledge Graph section describes version 1.0.1 and later. Numbers were checked in the file: the Diagram view has 24 nodes (9 of them clusters), 10 edges and 21 styles; 21,095 characters compact (about 5,700 tokens).
-->

This is a system context diagram of a hypothetical Consumer Notifications application: the people, applications, queue and systems around it, grouped into the corporate applications, the perimeter network and the internet. Each kind of thing has an icon and a color, and each
connection says how the two sides talk. It is drawn from the [Context Diagram Toolkit](https://github.com/jjlong150/rv-kgf-context-diagram), a free, MIT-licensed set of workbooks, and its data was seeded with errors on purpose.

<ExampleDiagram image="/examples/context-diagram-review/context-diagram.svg" interactive="/examples/context-diagram-review/context-diagram-interactive.svg" alt="A system context diagram of a hypothetical Consumer Notifications application: icons for the people, applications, queue and systems, grouped in boxes for the corporate applications and the internet, with a legend at the top right" caption="It opens in a new tab, where it can be zoomed and hovered." />

## Key aspects

- **Pictures in the nodes.** A style puts a picture in a node with `image="images/person.png"`, and Graph Modeler shows it on screen. A published PNG or PDF contains the pictures; a published SVG only links to them, so the pictures on this page were put into the SVG file itself.
- **A vocabulary of styles.** 163 styles define the kinds of thing (a person, a cloud application, a queue) and of connection (REST over HTTPS, email over SMTP), each with a description and typed properties such as `contains_pii`. See [Styles](/docs/styles/).
- **Clusters as boundaries.** The boxes are clusters, nested from the whole system down to the cloud service provider, so the diagram shows which parts sit inside which trust zone.
- **Views.** Six views draw the diagram with or without the legend, the notes, the clusters or the edges.

## Knowledge Graph

The Diagram view as a Knowledge Graph: 24 nodes (nine of them clusters), 10 edges and 21 styles. The file describes itself: each style has a description and names its properties, so facts such as `contains_pii` or `auth_mechanism` need no separate dictionary. A program can answer
which connections carry personal data (three) or have no authentication (two). The toolkit also has a review prompt and a sample assessment report, in [its repository](https://github.com/jjlong150/rv-kgf-context-diagram).

<ExampleKnowledgeViewer light="/examples/context-diagram-review/context-diagram-knowledge-graph-viewer-light.html" dark="/examples/context-diagram-review/context-diagram-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the context diagram, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/context-diagram-review/context-diagram-example.zip" size="42 KB">
The project, its icons and the Knowledge Graph. The toolkit's data workbook is in its repository.
</ExampleDownload>

The icons are from [Tabler Icons](https://tabler.io/icons), MIT licensed. If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
