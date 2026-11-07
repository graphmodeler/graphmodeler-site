---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: false
title: "System context diagram: IT solution architecture"
tagline: "Node icons for a viewer, a deep knowledge graph for an AI reviewer."
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

This graph depicts a [system context diagram](https://en.wikipedia.org/wiki/System_context_diagram) of a hypothetical Consumer Notifications application: the people, applications, queue and systems around it, grouped into trust zones. **Actors**, **Applications**, and **Data Stores** each have an icon and a color, and each connection says how the two sides talk. 

It is adapted from the [Context Diagram Toolkit](https://github.com/jjlong150/rv-kgf-context-diagram), a free, MIT-licensed set of workbooks. Its data was purposely seeded with small errors and incomplete information to make AI review interesting for the toolkit's case study.

<ExampleDiagram image="/examples/context-diagram-review/context-diagram.svg" interactive="/examples/context-diagram-review/context-diagram-interactive.svg" alt="A system context diagram of a hypothetical Consumer Notifications application: icons for the people, applications, queue and systems, grouped in boxes for the corporate applications and the internet, with a legend at the top right" caption="It opens in a new tab, where it can be zoomed and hovered." />

## Key aspects

- **Standardized pictures in the nodes.** A style puts a picture in a node with `image="images/person.png"`, and Graph Modeler shows it on screen. A published PNG or PDF contains the pictures; a published SVG only links to them (so the pictures were put into the SVG file itself for this page).
- **A vocabulary of styles.** 163 styles define the kinds of thing (a person, a cloud application, a queue) and of connection (REST over HTTPS, email over SMTP), each with a description and [typed properties](https://github.com/jjlong150/rv-kgf-context-diagram/blob/main/docs/style-catalogue.md) such as `contains_pii`. See [Styles](/docs/styles/).
- **Clusters as boundaries.** The boxes are clusters, nested from the whole system down to the cloud service provider, so the diagram shows which parts sit inside which trust zone. SQL statements determine which clusters should be depicted.
- **SQL spanning multiple worksheets in a single query.** SQL statements illustrate how to use `UNION` to build result sets that cluster effortlessly.
- **Views.** Six views draw the diagram with or without the legend, the notes, the clusters or the edges.
- **AI Prompt.** A knowledge graph produced is intended to be paired with the [Context Diagram Toolkit - Architecture Design Review Prompt](https://github.com/jjlong150/rv-kgf-context-diagram/blob/main/prompts/Architecture_Design_Review_Prompt.md) to conduct a solution review.
- **AI Review.** This knowledge graph when paired with the AI prompt received the following [Context Diagram Toolkit - Architecture Design Review Assessment](https://github.com/jjlong150/rv-kgf-context-diagram/blob/main/examples/consumer-notifications/assessment-report.pdf) report.

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
