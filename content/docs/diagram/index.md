# The Diagram tab

The Diagram tab draws the graph with Graphviz. The picture is redrawn as you change the data or the styles, and the buttons above
it change how Graphviz lays it out, so you flip between choices until the picture is what you want.

<img class="shot shot-light" src="/shots/diagram-light.png" alt="The Diagram tab, with its buttons for layout, edge routing, graph type, direction and output order">
<img class="shot shot-dark" src="/shots/diagram-dark.png" alt="The Diagram tab in the dark theme">

The diagram can also sit beside the data. The **Graph** menu on the Data tab chooses between that and a tab of its own, and the
same buttons are over the picture either way.

## The buttons

Hover over a button to read what it does. From left to right:

| Group | Choices |
| --- | --- |
| **Layout engine** | Graphviz has eight ways of placing nodes. **dot** puts them in ranks, which suits flows and hierarchies. **neato**, **fdp** and **sfdp** are spring models that pull connected nodes together, and **sfdp** is for large graphs. **circo** puts nodes on a circle. **twopi** puts them in rings around a center. **osage** lays out clusters, and **patchwork** draws a treemap. |
| **Edge routing** | How edges run: smooth curves (`spline`), straight lines, polylines, curved arcs, right angles (`ortho`), or no edges drawn. |
| **Graph type** | Directed, with arrows, or undirected, without. |
| **Direction** | Which way the ranks run: top to bottom, left to right, bottom to top or right to left. Only the **dot** engine uses this. |
| **Output order** | **Nodes first** draws the edges over the nodes. **Edges first** draws them under, which is what to choose when edges cross behind a node in a large graph. The other two orders Graphviz has, breadth first and depth first, are seldom wanted and are in Settings. |
| **Zoom** | Fit to the window, to its width or to its height, or a percentage in steps of five. |

For edge routing, direction and output order, pressing the button that is on again goes back to Graphviz's own choice. The same choices
are in **Settings**, with the picture of the one in use beside each.

## Drawing

The two buttons beside the **Graph** menu on the Data tab decide when the picture is drawn. The one with the arrows going round draws
after every change. Turn it off for a large graph that is slow to draw, and press the other one, which draws once, when you are ready. A
picture that is out of date says so.

If Graphviz has something to say about the graph, such as a warning, it appears in the left pane under **Graphviz messages**.

## Without Graphviz

This tab needs [Graphviz](https://graphviz.org/download/). When it is not installed, the tab says so, with a link to download it and a
button to look again. Close the message if you do not want to see it. Everything else in the app works without Graphviz, including the Data and
Styles tabs, the Knowledge Graph and the DOT source.

## Saving the picture

The diagram on screen is not a file. To write it, use **Publish** in the left pane. See [Getting started](/docs/getting-started/).
