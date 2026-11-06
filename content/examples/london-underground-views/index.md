---
# A DRAFT: it is left out of the finished site until this line is removed (or set to false). Look at it with `npm run dev`.
draft: true
title: "One model, many diagrams: the London Underground, a view for each line"
description: "Build a model of a transport network from two spreadsheet sheets with three short SQL lines, then use views to draw one line, several lines together, or the whole map from the same project."
date: 2026-11-06
audience: [consultants, architects]
---

# One model, many diagrams: the London Underground, a view for each line

<ExampleMeta />

<!--
NOTES FOR THE AUTHOR (these comments are not shown on the page)

This is an outline built from the project in the zip, so that the facts are right. Rewrite it in your own voice. What I checked in the real app: the SQL runs
with no problems when the spreadsheet is in the project's folder; the project has 17 views (one for each line, plus "All", "Central and DLR" and "No Clusters");
about 550 station rows and 500 connection rows; the Jubilee view draws cleanly; the Central view makes Graphviz report "lost North Acton Hanger Lane edge"
(the splines are orthogonal and the direction is left to right), which the app shows as a red notice over a nearly complete drawing.

OPEN QUESTIONS FOR YOU
1. Where does the data in the spreadsheet come from, and under what license? Real stations and connections are facts, but a list copied from a site such as
   Wikipedia or Transport for London's open data comes with its own terms (attribution, and for some sources share-alike). Say so in the article and in the README of the zip.
2. The Knowledge Graph section below is a placeholder: see the note there about the file for one view being much larger than the picture suggests.
3. Do you want the "lost edge" tip in this article, or as its own short article? It is a search people really make.
-->

Opening paragraph: what the reader has (a list of stations, and a list of which station connects to which on which line) and what they want (the Jubilee line on one page, the
Central line and the DLR together on another, from one set of data, without drawing anything).

<ExampleDiagram image="/examples/london-underground-views/jubilee.svg" interactive="/examples/london-underground-views/jubilee-interactive.svg" alt="The Jubilee line from Stanmore to Stratford: stations in hexagons, interchange stations as heavy circles, grouped by district and postcode area" caption="The Jubilee view. Zoom, pan and hover over a station for its details. It opens in a new tab." />

## The data

Two sheets in one workbook:

- **London tube lines**: one row for each connection, with the **From Station**, the **To Station** and the **Tube Line**.
- **London stations**: one row for each station, with its **Station Type**, its **District**, its **Postcode area covered**, its **Ward** and its position.

## The model

The SQL tab has three lines that matter. Show each in a code block and say what it does.

- **The connections.** A `SELECT` that makes an edge from each pair of stations, with the **Tube Line** as the **Style Name**, so that every line has its own color.
- **The stations.** A `SELECT` that makes a node from each station, with the **Station Type** as the style, `8 AS [SPLIT LENGTH]` so that long names wrap, and the district and postcode area as `CLUSTER`s, so that stations are grouped on the map.
- **The title.** `SELECT 'graph' AS [Item], '{view}' AS [Label]` gives the whole graph a label, and [`{view}`](/docs/placeholders/#the-view-and-the-project) is replaced with the name of the view being drawn, so that every diagram says which one it is.

Add a screenshot of the SQL tab (put it in `content/public/shots/`, in a light and a dark version).

## Views: one model, many diagrams

A view is a named set of styles that are switched on. Every line has a style, so the **Jubilee** view switches on the Jubilee line's style and leaves out the rest, and **Central and DLR** switches on two. With **Include stand-alone nodes**
off in the Settings tab, the stations that no connection in the view touches are left out, so each view shows only the stations of its lines. See [Styles](/docs/styles/) for how the views are set up.

On the **Styles** tab, each style is a row and each view is a column. Here the Description, Format and Properties columns are hidden, so that what is left is the style's name, a picture of its colored line, and a mark for every view: the **All** view uses every line, and each line's own view uses only that line, which makes the diagonal of ticks.

<img class="shot shot-light" src="/shots/styles-views-light.png" alt="The Styles tab: a row for each tube line, with a picture of its colored line, and a column for each view with a tick where the view uses that line">
<img class="shot shot-dark" src="/shots/styles-views-dark.png" alt="The Styles tab in the dark theme: a row for each tube line, with a picture of its colored line, and a column for each view with a tick where the view uses that line">

<ExampleDiagram image="/examples/london-underground-views/central-and-dlr.svg" interactive="/examples/london-underground-views/central-and-dlr-interactive.svg" alt="The Central line and the Docklands Light Railway drawn together, with the interchanges between them" caption="Two lines in one view: the Central line and the DLR. It opens in a new tab so that it can be zoomed." />

**Publish all views** in the left pane writes a file for every view in one go, each named after its view.

::: tip When Graphviz says "lost edge"
Draw the **Central** view with the orthogonal edge routing and a left-to-right direction and Graphviz reports `Error: lost North Acton Hanger Lane edge`, yet still draws almost everything. Graph Modeler shows the drawing with a red notice
instead of nothing. Another routing in the Settings tab, or a top-to-bottom direction, draws the view without the error. (Rewrite this in your own words, or make it a short article of its own.)
:::

## The same model as a Knowledge Graph

<!--
NOTE FOR THE AUTHOR: this section describes version 1.0.1 and later, where the Knowledge Graph follows "Include stand-alone nodes" like the diagram does. With 1.0.0 the file for one line
lists every station in the model. Publish this article after 1.0.1 is out. The numbers and the answers below were taken from the actual file in the download (27 stations, 17 clusters, 26 edges,
13,324 characters written compactly, about 3,600 tokens by the viewer's estimate; the indented file in the download is 19,255 characters). The viewer pages are made by tools/make-knowledge-viewer.mjs in the app's repository; make them again if the viewer changes.
-->

The same rows and styles that draw the diagram can be published as a **Knowledge Graph**: a JSON file that states in words and values what the picture only shows, so that a program, or an AI assistant, can read it. Choose the
**Jubilee** view, open the **Knowledge Graph** tab, and the file for that view is there, made by the app with no Graphviz needed. Below is the same viewer, with that file in it. Try the **Tree** view to open and close the parts, **Search** to find a
station, and **Copy Pretty** to put the file on the clipboard. The line under the toolbar shows its size in characters and its estimated tokens, which is what an AI assistant will count: about 13,300 characters and 3,600 tokens.

<ExampleKnowledgeViewer light="/examples/london-underground-views/jubilee-knowledge-graph-viewer-light.html" dark="/examples/london-underground-views/jubilee-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the Jubilee view, in the viewer of Graph Modeler" :height="560" />

The file follows the same settings as the diagram. **Include stand-alone nodes** is off in this project, so the file holds the 27 stations of the line and the 17 districts and postcode areas that group them, not the other 350 stations of the network. In the viewer you can see its three parts:

- **`styles`** lists the styles in use. The line is an edge style, `Station` and `Interchange` are node styles, and `District` and `Postcode area covered` are cluster styles.
- **`nodes`** has one entry for each station, with its style, its label, its tooltip (here the address and position from the spreadsheet) and the cluster it is in, and one entry for each cluster.
- **`edges`** has one entry for each connection, with its source, its target and the style, which is the line.
- The file in the download is indented, which makes it 19 KB; the counts above are for the compact form. Either way it fits easily in a request. See [The Knowledge Graph tab](/docs/knowledge-graph/).

### Ask the file a question

Give the file to an AI assistant, or read it with a few lines of code, and it can answer what the picture only hints at. Two examples, both answered by the file itself:

- **Which stations on this line are interchanges?** Ten: Bond Street, Canada Water, Canary Wharf, North Greenwich, Canning Town, West Ham, West Hampstead, London Bridge, Waterloo and Stratford. They are the nodes with the style `Interchange`.
- **Where does the line begin and end?** At Stanmore and Stratford: the only two stations that are named in just one connection.

The diagram shows the same facts to a person; the file hands them to a program, with the tooltip text and the grouping attached.

## Try it yourself

<ExampleDownload file="/examples/london-underground-views/london-underground-example.zip" size="95 KB">
The project, the spreadsheet and the Knowledge Graph of the Jubilee view. Unzip them into one folder and open <code>london-underground.json</code> in Graph Modeler, then choose a line in **Style view**.
</ExampleDownload>

The [Knowledge Graph of the Jubilee view](/examples/london-underground-views/jubilee-knowledge-graph.json) is also there on its own, to read in a browser or give to an AI assistant.

If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.

## Related

- [The SQL tab](/docs/sql/) explains the commands and columns used here, and [Placeholders](/docs/placeholders/) the `{view}` placeholder.
- [Styles](/docs/styles/) explains views.
