---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: false
title: "A timeline roadmap from a spreadsheet"
tagline: "Events from start to end, one year after another."
description: "A roadmap of 20 events from 2022 to 2030 drawn left to right with dependencies between them, from two sheets of a spreadsheet, with its Knowledge Graph."
thumbnail: /examples/timeline-roadmap/thumbnail.webp
order: 8
facts:
  - "20 events, 9 years"
  - "3 dependencies"
  - "dot layout, left to right"
---

# A timeline roadmap from a spreadsheet

<ExampleFacts />

<!--
NOTE FOR THE AUTHOR: the Knowledge Graph section describes version 1.0.1 and later. Checked in the file: 43 nodes (9 years, 14 start and 14 finish points for events that span quarters, 6 for events that start and end in the same quarter), 31 edges
(20 events, 3 dependencies, 8 links between the years); by status: Completed 6, On Schedule 4, Planned 9, Behind Schedule 1 (E013 DeltaCloud Integration). 13 KB. The events are made-up test data.
-->

This is a roadmap of 20 events between 2022 and 2030. Each event is a line from the quarter it starts in to the quarter it ends in, labeled with its name, and colored by its status. Dashed lines show the events that must finish before another can start.
A row of years runs along the bottom. The data is made up, in two sheets of a spreadsheet: the events with their quarters, and the dependencies between them.

<ExampleDiagram image="/examples/timeline-roadmap/timeline-roadmap.svg" interactive="/examples/timeline-roadmap/timeline-roadmap-interactive.svg" alt="A roadmap from 2022 to 2030: each event is an arrow from its starting quarter to its ending quarter, colored by status, with dashed arrows for dependencies and a row of years along the bottom" caption="The interactive version opens in a new tab, where it can be zoomed and hovered." />

## Key aspects

- **A node for every year.** The `ENUMERATE` command counts from the first year to the last, so a year with no event still gets a node and the row of years has no gaps. See [Enumerate values](/docs/sql-extensions/enumerate/).
- **Events as edges.** An event with a start and an end is an edge between its two quarters, and an event that starts and ends in the same quarter is an edge back to itself. A status picks the color of the edge. See [Styles](/docs/styles/).
- **Dependencies from another sheet.** A query joins the dependencies to the events and draws them as dashed edges.
- **One rank for each year.** `ITERATE` makes a group for each year, and `CREATE RANK` puts the events of a year in line, so they stand at the same distance along the timeline. See [Iterate query results](/docs/sql-extensions/iterate/).
- **A title from the data.** The title is built from the first and last years, in a style that places it at the top. See [Placeholders](/docs/placeholders/).

## Knowledge Graph

The roadmap as a Knowledge Graph: 43 nodes and 31 edges, with a status on each event. It is a small file, 13 KB. A program can answer from it what the picture only suggests: 6 events are completed, 4 on schedule and 9 planned, and one, DeltaCloud Integration, is behind schedule.

<ExampleKnowledgeViewer light="/examples/timeline-roadmap/timeline-roadmap-knowledge-graph-viewer-light.html" dark="/examples/timeline-roadmap/timeline-roadmap-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the roadmap, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/timeline-roadmap/timeline-roadmap-example.zip" size="24 KB">
The project, the spreadsheet and the Knowledge Graph.
</ExampleDownload>

The events are made-up test data. If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
