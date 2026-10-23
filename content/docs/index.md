# Documentation

Graph Modeler turns rows of data into a graph. Three things do the work, and the tabs of the app are laid out around them.

**The rows** are on the [Data](/docs/data/) tab. Each row is an item, or a relationship between two items, or a marker that
opens or closes a cluster. A row can name a style.

**The styles** say how things look. A style has a name and a format, and the format is a set of Graphviz attributes such as
`shape`, `color` and `fontname`. The Styles tab lists them, and the [Designer](/docs/designer/) builds one from menus.

**The output** comes from the rows and the styles together. The app writes them as DOT, the text Graphviz reads, draws
the DOT with Graphviz, and can also publish the same rows as a Knowledge Graph in JSON.

## Start here

- [Getting started](/docs/getting-started/): a first graph, from a blank project to a published file.

## The left pane

[The left pane](/docs/left-pane/) is on every tab. It has the project buttons, undo and redo, the choice of view, Publish, and the
messages about what the app found.

## The tabs

The tabs are in the order they are in the app.

- [Data](/docs/data/): the rows, what each kind of row means, and how to edit them.
- [Diagram](/docs/diagram/): drawing the graph, and the buttons that change the layout.
- [Knowledge Graph](/docs/knowledge-graph/): the JSON file for programs and AI tools, and its viewer.
- [DOT](/docs/dot/): the text Graphviz is given.
- [Designer](/docs/designer/): building a style from menus, and how pictures inside nodes behave.
- [Styles](/docs/styles/): the styles, their previews, and views.
- [SQL](/docs/sql/): building the rows from Excel and Access with queries.
- [SVG](/docs/svg/): post-processing, and why it is a security matter.
- [Settings](/docs/settings/): the choices that apply to the whole project.
- [About](/docs/about/): the version, the credits and the license.

## Topics

- [Fonts](/docs/fonts/): how the app finds the fonts on your computer, what to do after installing one, and what happens to it in a shared picture.
- [Coming from the Excel tool](/docs/from-excel/): for people who know Relationship Visualizer, also called Excel to Graphviz.

## What you need

Graph Modeler runs on its own. To draw pictures it also needs [Graphviz](https://graphviz.org/download/) installed, which
is free. Without it the tabs that draw say so and offer to look again, and everything else works, including the Knowledge
Graph.
