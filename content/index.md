---
layout: home

hero:
  name: Graph Modeler™
  text: See the connections
  tagline: <i>Coming Soon</i> - A desktop application for creating graph models, generating Graphviz diagrams, and publishing standards-based knowledge graphs.
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
    title: Data from queries
    details: Use SQL to turn data in Excel and LibreOffice workbooks, CSV extracts and Access databases into graph models.<br/><br/>Chain queries into a pipeline that generates and publishes every view in a single run.
    link: /docs/sql/
    linkText: SQL
  - icon:
      dark: /file-dark.svg
      light: /file-light.svg
    title: Plain Files. Any Desktop.
    details: Projects are stored as readable JSON that you can version, compare, and generate.<br/><br/>Runs on <b>Windows</b>, <b>macOS</b>, and <b>Linux</b>, with light and dark themes.
    link: /docs/
    linkText: Documentation
---

## What it looks like

The rows of a graph, with the style assignments.

<img class="shot shot-light" src="/shots/data-light.png" alt="The Data tab: rows of items and the style each uses">
<img class="shot shot-dark" src="/shots/data-dark.png" alt="The Data tab in the dark theme">

The same rows, drawn.

<img class="shot shot-light" src="/shots/diagram-light.png" alt="The Diagram tab: the graph drawn, with buttons for layout, edge routing and direction">
<img class="shot shot-dark" src="/shots/diagram-dark.png" alt="The Diagram tab in the dark theme">

And the same rows again, published as a Knowledge Graph: structured JSON containing the same nodes, edges, styles, descriptions, and properties in the open [RV-KGF format](https://github.com/jjlong150/rv-kgf), available in both text and tree representations.

<img class="shot shot-light" src="/shots/knowledge-graph-home-light.png" alt="The Knowledge Graph tab: the graph as JSON, with a search box and a count of nodes, edges and tokens">
<img class="shot shot-dark" src="/shots/knowledge-graph-home-dark.png" alt="The Knowledge Graph tab in the dark theme">
