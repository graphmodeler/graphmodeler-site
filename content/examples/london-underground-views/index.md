---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: true
title: "London Underground: a diagram for every line"
tagline: "One dataset, a diagram for each line."
description: "A model of the London Underground drawn as a diagram for each line, or for several lines together, from one set of stations and connections, with its Knowledge Graph."
thumbnail: /examples/london-underground-views/thumbnail.webp
order: 2
facts:
  - "17 views"
  - "377 stations"
  - "dot layout, left to right"
---

# London Underground: a diagram for every line

<ExampleFacts />

<!--
NOTE FOR THE AUTHOR: where the data comes from, and its license, is still to be filled in here and in the README of the download (placeholder there). The Knowledge Graph section describes version 1.0.1 and later.
-->

This is a model of the London Underground network: its stations, the connections between them on each line, and the districts and postcode areas the stations sit in. Every line has its own color. One project draws a single line, several lines together,
or the whole map, depending on the view chosen.

<ExampleDiagram image="/examples/london-underground-views/jubilee.svg" interactive="/examples/london-underground-views/jubilee-interactive.svg" alt="The Jubilee line from Stanmore to Stratford: stations in hexagons, interchange stations as heavy circles, grouped by district and postcode area" caption="The Jubilee view. It opens in a new tab, where it can be zoomed and hovered." />

<ExampleDiagram image="/examples/london-underground-views/central-and-dlr.svg" interactive="/examples/london-underground-views/central-and-dlr-interactive.svg" alt="The Central line and the Docklands Light Railway drawn together, with the interchanges between them" caption="The Central line and the DLR together, in a view of their own." />

## Key aspects

- **Views.** A view is a named set of styles that are switched on. Every line has a style, so the Jubilee view switches on the Jubilee line's style and leaves out the rest, and Central and DLR switches on two. See [Styles](/docs/styles/).
- **A title for every view.** The `{view}` placeholder puts the name of the view being drawn on each diagram. See [Placeholders](/docs/placeholders/#the-view-and-the-project).
- **Clusters.** The stations are grouped by district and by postcode area, in boxes inside boxes. See [Clusters, sequences and trees](/docs/sql/#clusters-sequences-and-trees).
- **Short queries.** Three short SQL queries make the model from the spreadsheet: one for the connections, one for the stations and one for the title. See [The SQL tab](/docs/sql/).

<img class="shot shot-light" src="/shots/styles-views-light.png" alt="The Styles tab: a row for each tube line, with a picture of its colored line, and a column for each view with a tick where the view uses that line">
<img class="shot shot-dark" src="/shots/styles-views-dark.png" alt="The Styles tab in the dark theme: a row for each tube line, with a picture of its colored line, and a column for each view with a tick where the view uses that line">

*The Styles tab: each style is a row and each view is a column. The ticks form a diagonal, because each line's view uses that line.*

## Knowledge Graph

The Jubilee view as a Knowledge Graph: 27 stations, 17 clusters (the districts and postcode areas) and 26 connections, about 13,300 characters written compactly, or an estimated 3,600 tokens. The file lists every style with its meaning, and each station with its
tooltip and its cluster, so a program can answer what the picture only shows, such as which stations on the line are interchanges (ten).

<ExampleKnowledgeViewer light="/examples/london-underground-views/jubilee-knowledge-graph-viewer-light.html" dark="/examples/london-underground-views/jubilee-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the Jubilee view, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/london-underground-views/london-underground-example.zip" size="93 KB">
The project, the spreadsheet and the Knowledge Graph of the Jubilee view.
</ExampleDownload>

If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
