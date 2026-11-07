---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: false
title: "A kanban board from a spreadsheet"
tagline: "Post-it Notes® in columns, from rows of tasks."
description: "A kanban board of 49 tasks in To Do, Doing and Done columns, drawn with the osage layout from a spreadsheet, with its Knowledge Graph."
thumbnail: /examples/kanban-board/thumbnail.webp
order: 6
facts:
  - "49 tasks, 3 columns"
  - "5 kinds of work"
  - "osage layout"
---

# A kanban board from a spreadsheet

<ExampleFacts />

This is a kanban board: 49 tasks in three columns, `To Do`, `Doing` and `Done`, each task styled as a Post-it Note® with its name, a short description, its importance and its ID. 

The color of a note says the kind of work (feature work, bug fix, research, customer request or dependency), and a legend at the bottom lists them. 

The tasks are made-up data in a spreadsheet, one row for each task.

<ExampleDiagram image="/examples/kanban-board/kanban.svg" interactive="/examples/kanban-board/kanban-interactive.svg" alt="A kanban board with the columns To Do, Doing and Done, each holding colored Post-it Notes® with a task name, a description, an importance and an ID, and a legend of the five colors below" caption="The board is tall: the interactive version opens in a new tab, where it can be zoomed and hovered." />

## Key aspects

- **The osage layout.** Graphviz's `osage` engine lays out clusters as boxes and packs what is inside them into rows and columns, without any edges to draw. The board is a box of three boxes, and each box packs its notes two across. See [Units and packing](/docs/units-and-packing/#the-osage-layout-and-clusters).
- **Clusters from the data.** Each task has a status, and the status is the cluster it goes into, so a task that moves from Doing to Done moves to another column when the board is drawn again. See [Clusters, sequences and trees](/docs/sql/#clusters-sequences-and-trees).
- **Colors from styles.** Every kind of work is a style with a fill and a border color, and the query puts the kind of work in the style name of each note. See [Styles](/docs/styles/).
- **Text made from several columns.** The label of a note is made from the task's name, description, importance and ID, with bold and italic text and line breaks, and the SQL cuts long lines to fit the note.

## Knowledge Graph

The board as a Knowledge Graph: 55 nodes and no edges. The tasks are nodes that say which column they are in, so a program can answer questions the picture only shows, such as how many tasks are in To Do (22) and which kind of work is the largest (research and spikes, with 11 tasks). It is a small file, 17 KB.

<ExampleKnowledgeViewer light="/examples/kanban-board/kanban-knowledge-graph-viewer-light.html" dark="/examples/kanban-board/kanban-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the kanban board, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/kanban-board/kanban-example.zip" size="24 KB">
The project, the spreadsheet and the Knowledge Graph.
</ExampleDownload>

The tasks are made-up test data. If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
