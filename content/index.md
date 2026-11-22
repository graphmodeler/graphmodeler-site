---
layout: home
title: Graph Modeler™ – model graphs in a grid, draw them with Graphviz
titleTemplate: false
description: Graph Modeler turns a spreadsheet, CSV file or database into Graphviz diagrams and Knowledge Graphs. A desktop app for Windows, macOS and Linux; free for personal use.

hero:
  name: Graph Modeler™
  text: Rows in. Graphs out.
  tagline: Turn a spreadsheet, CSV file or database into a Graphviz diagram and an open Knowledge Graph. Choose the columns, style what you see, publish.
  image:
    light: /hero-light.svg
    dark: /hero-dark.svg
    alt: Rows of data in a grid become a graph of nodes and edges, and a Knowledge Graph in JSON
  actions:
    - theme: brand
      text: Get started
      link: /docs/getting-started/
    - theme: alt
      text: Download
      link: /download/

features:
  - icon:
      dark: /data-table-dark.svg
      light: /data-table-light.svg
    title: Rows, not boxes
    details: Forget manually drawing boxes and connecting lines.<br/><br/>Build your graph in a spreadsheet-style grid, with Excel paste, fill down, undo, and clear visual cues for nodes, edges, and clusters.
    link: /docs/data/
    linkText: Data
  - icon:
      dark: /palette-dark.svg
      light: /palette-light.svg
    title: Styles you can see
    details: Live-preview node, edge, and cluster styles in the Style Designer. Assign styles to rows and update entire diagrams instantly.<br/><br/>Add descriptions and properties that travel with your knowledge graph.
    link: /docs/designer/
    linkText: Designer
  - icon:
      dark: /share-dark.svg
      light: /share-light.svg
    title: Drawn by Graphviz
    details: Explore your model through every Graphviz layout engine at the push of a button.<br/><br/>Export diagrams as SVG, PNG, PDF, and more. Generate one view or many from the same model.
    link: /docs/diagram/
    linkText: Diagram
  - icon:
      dark: /knowledge-graph-dark.svg
      light: /knowledge-graph-light.svg
    title: Knowledge Graph Output
    details: Publish a JSON Knowledge Graph from the same model, including styles, descriptions, and properties.<br/><br/>View it locally, copy it, or save it for AI and analytics.
    link: /docs/knowledge-graph/
    linkText: Knowledge Graph
  - icon:
      dark: /database-search-dark.svg
      light: /database-search-light.svg
    title: From your own data
    details: Choose the columns of an Excel or LibreOffice workbook, a CSV file, or an Access or SQLite database, and Graph Modeler writes the SQL for you.<br/><br/>Prefer to write it yourself? Chain queries into a pipeline that generates and publishes every view in a single run.
    link: /docs/mappings/
    linkText: Mappings
  - icon:
      dark: /file-dark.svg
      light: /file-light.svg
    title: Plain Files. Any Desktop.
    details: Projects are stored as readable JSON that you can version, compare, and generate.<br/><br/>Runs on <b>Windows</b>, <b>macOS</b>, and <b>Linux</b>, with light and dark themes.<br/><br/>Explore the examples to get started.
    link: /examples/
    linkText: Examples
---

## What it looks like

This is the complete application window, showing the title bar, action pane, graph data, and diagram workspace.

<img class="shot shot-light" src="/shots/full-app-light.png" alt="The full application window: Title bar, action pane, and tabs">
<img class="shot shot-dark" src="/shots/full-app-dark.png" alt="he full application window: Title bar, action pane, and tabs in the dark theme">

The [Data](/docs/data/) tab shows the rows that define the graph, and the [style](/docs/styles) applied to each item. Styles are created with the [Style Designer](/docs/designer/). Data can be entered manually, and imported from external files using file [mappings](/docs/mappings) or [SQL](/docs/sql).

<img class="shot shot-light" src="/shots/home-data-light.png" alt="The Data tab: rows of items and the style each uses">
<img class="shot shot-dark" src="/shots/home-data-dark.png" alt="The Data tab in the dark theme">

The [Diagram](/docs/diagram/) tab is showing those rows as a graph, laid out from left to right with configurable layout, routing, and direction options.

<img class="shot shot-light" src="/shots/diagram-light.png" alt="The Diagram tab: the graph drawn, with buttons for layout, edge routing and direction">
<img class="shot shot-dark" src="/shots/diagram-dark.png" alt="The Diagram tab in the dark theme">

The [Knowledge Graph](/docs/knowledge-graph/) tab is showing the graph published as portable JSON. The export preserves nodes, edges, styles, descriptions, and properties using the open [RV-KGF format](https://github.com/jjlong150/rv-kgf), making the graph easy to share with AI tools, other applications, and custom workflows.

<img class="shot shot-light" src="/shots/knowledge-graph-home-light.png" alt="The Knowledge Graph tab: the graph as JSON, with buttons to copy and save it and a count of characters, tokens, lines, nodes and edges">
<img class="shot shot-dark" src="/shots/knowledge-graph-home-dark.png" alt="The Knowledge Graph tab in the dark theme">
