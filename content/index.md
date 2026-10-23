---
layout: home

hero:
  name: Graph Modeler
  text: Turn relationships into insight
  tagline: Coming Soon - A desktop application for creating graph models, generating Graphviz diagrams, and publishing standards-based knowledge graphs.
  actions:
    - theme: brand
      text: Get started
      link: /docs/getting-started/
    - theme: alt
      text: Download
      link: /download/

features:
  - title: Rows, not boxes
    details: Type the things in your graph and how they connect, one row at a time, in a grid that works like a spreadsheet. Paste from Excel, fill down, undo. A dot at the start of each row shows whether it is a node, an edge or a cluster.
  - title: Styles you can see
    details: A style holds the look of a node, an edge or a cluster, and a row picks its style by name. The Style Designer builds one from menus, with a preview that redraws as you choose.
  - title: Drawn by Graphviz
    details: Every layout engine Graphviz has, on buttons. Publish the diagram as SVG, PNG, PDF or any other format your Graphviz offers, one view or all of them.
  - title: A Knowledge Graph for AI tools
    details: The same rows are published as a JSON Knowledge Graph, with the styles and the properties you attach to each item, and a viewer to read it. It does not need Graphviz at all.
  - title: Data from queries
    details: Write SQL against an Excel workbook or an Access database, and let the results become the rows. A script can build every view and publish them in one run.
  - title: Plain files
    details: A project is a JSON file you can read, compare and generate. The app has a light and a dark theme, and it keeps working, apart from pictures, when Graphviz is not installed.
---

## What it looks like

The rows of a graph, with the style of each in the last column.

<img class="shot shot-light" src="/shots/data-light.png" alt="The Data tab: rows of items and the style each uses">
<img class="shot shot-dark" src="/shots/data-dark.png" alt="The Data tab in the dark theme">

The same rows, drawn.

<img class="shot shot-light" src="/shots/diagram-light.png" alt="The Diagram tab: the graph drawn, with buttons for layout, edge routing and direction">
<img class="shot shot-dark" src="/shots/diagram-dark.png" alt="The Diagram tab in the dark theme">

And the same rows again, published as a Knowledge Graph: JSON that lists every node, edge and style with its properties, for programs and
AI tools to read, in the published [RV-KGF format](https://github.com/jjlong150/rv-kgf), and a viewer to read it yourself.

<img class="shot shot-light" src="/shots/knowledge-graph-home-light.png" alt="The Knowledge Graph tab: the graph as JSON, with a search box and a count of nodes, edges and tokens">
<img class="shot shot-dark" src="/shots/knowledge-graph-home-dark.png" alt="The Knowledge Graph tab in the dark theme">
