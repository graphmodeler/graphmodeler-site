---
title: "Documentation and user guide"
description: "Documentation for Graph Modeler: how rows, styles and views become Graphviz diagrams and Knowledge Graphs, with a page for every tab of the app."
---

# Documentation

Graph Modeler™ turns rows of data into a graph. Three things do the work, and the tabs of the app are laid out around them.

**The rows** are on the [Data](/docs/data/) tab. Each row is an item, or a relationship between two items, or a marker that
opens or closes a cluster. A row can name a style.

**The styles** say how things look, and what they are. A style has a name and a format, and the format is a set of Graphviz attributes such as
`shape`, `color` and `fontname`. It also has a description and properties, which do not change the drawing but go into the Knowledge Graph. The Styles tab
lists the styles, and the [Designer](/docs/designer/) builds one from menus.

**The output** comes from the rows and the styles together. The app writes them as DOT, the text Graphviz reads, and draws
the DOT with Graphviz. It can also publish the same rows as a [Knowledge Graph](/docs/knowledge-graph/), a JSON file that states what each node and edge is, with its
style's description and properties, for programs and AI tools. One model gives you the picture and the data behind it.

## Start here

- [Getting started](/docs/getting-started/): a first graph, from a blank project to a published file.

## Navigating the app

The window has three parts, and each has its own pages.

**[The title bar](/docs/title-bar/)** is the strip across the top. Its switches turn on the dark theme and [Simple mode](/docs/simple-mode/), a smaller window for people who only run a finished model. Its **About** button opens [the About page](/docs/about/): the version, the license and the credits.

**[The left pane](/docs/left-pane/)** is on every tab. It has the project buttons, the values a script asks for, undo and redo, the choice of view, Publish, and the messages about what the app found. [Save a copy for sharing](/docs/sharing/) makes a copy of a project for someone else.

**The tabs** are in three named groups, in the order they are in the app. Each group has its name, with a colored dot, above its tabs: **Data** is for bringing data in and writing the graph, **Look** for how it looks, and **Output** for what comes out. **Settings** and **SVG** come last, after a thin line, with no name.

Data:

- [Data](/docs/data/): the rows, what each kind of row means, and how to edit them.
- [Mappings](/docs/mappings/): choosing the columns of a spreadsheet, CSV file or database, and letting Graph Modeler write the SQL.
- [SQL](/docs/sql/): building the rows from spreadsheets, CSV files and databases with queries, and running the script.

Look:

- [Designer](/docs/designer/): building a style from menus, and how pictures inside nodes behave.
- [Styles](/docs/styles/): the styles, their previews, and views.

Output:

- [Diagram](/docs/diagram/): drawing the graph, and the buttons that change the layout.
- [Knowledge Graph](/docs/knowledge-graph/): the JSON file for programs and AI tools, and its viewer.
- [DOT](/docs/dot/): the text Graphviz is given.

* [Settings](/docs/settings/): the choices that apply to the whole project.
* [SVG](/docs/svg/): post-processing, and why it is a security matter.

## Topics

- [Coming from the Excel tool](/docs/from-excel/): for people who know Relationship Visualizer, also called Excel to Graphviz.
- [Publishing](/docs/publishing/): how a file name is built from the prefix, the template, the counter and the style, and what Publish will not write over.
- [Placeholders](/docs/placeholders/): the words in braces, such as `{label}` and `{rsc}`, that are replaced in labels and in SQL, and how to make your own.
- [SQL extensions](/docs/sql-extensions/): the special columns a `SELECT` can return, for clusters, long labels split into lines, counters, chains of edges, trees, loops and joined values.
- [Units and packing](/docs/units-and-packing/): inches or millimeters for the lengths you type, and how the separate parts of a graph are packed together.
- [Fonts](/docs/fonts/): how the app finds the fonts on your computer, what to do after installing one, and what happens to it in a shared picture.
- [Find and replace](/docs/find-and-replace/): one search bar for the Data, Styles, SQL, DOT and Knowledge Graph tabs, and Replace in the tabs where you type.
- [Languages](/docs/languages/): choosing the language of the program, and using a language file of your own.
- [What's new](/docs/changelog/): what each version changed.

## What you need

Graph Modeler runs on its own. To draw pictures it also needs [Graphviz](https://graphviz.org/download/) installed, which
is free. Without it the tabs that draw say so and offer to look again, and everything else works, including the Knowledge
Graph.
