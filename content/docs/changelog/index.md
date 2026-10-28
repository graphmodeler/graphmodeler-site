# What's new

What each version of Graph Modeler changed, newest first. Graph Modeler is in beta, so the version numbers are small and the changes are many. The installers for each are on the
[Download](/download/) page. Where a change is explained on a page of its own, there is a link.

## Version 0.1.2, beta 3 (October 28, 2026)

**New**

- **The left pane narrows to a strip.** On a small screen or in a tiled window, the button at the top of the pane, or Ctrl+B, narrows the pane to a column of its buttons, with
  a dot on Save for unsaved changes and a count of the problems. Press the button or Ctrl+B again to bring the pane back. The app remembers your choice. See
  [The left pane](/docs/left-pane/#narrowing-the-pane).

## Version 0.1.1, beta 2 (October 27, 2026)

**New**

- **A warning before you lose work.** Closing the window, by Exit, the close button or Alt+F4, when the project has changes that are not saved now asks whether to
  **Save and close**, **Close without saving** or **Cancel**. If you cancel the Save As window that Save and close opens, the app stays open.
- **Units.** Lengths are shown and typed in inches or millimeters, as a setting of the project and a preference of yours for new projects. The unit is chosen from your region the
  first time, and the word is spelled the way your region spells it. The Millimetres box of the Designer is gone, because the project now holds the unit. See
  [Units and packing](/docs/units-and-packing/#units).
- **Packing for every layout except patchwork.** The space between separate parts of a graph and the pack mode are settings of the whole graph, with all four pack modes
  (node, clust, graph and array) and the options of array packing. The gap is listed in your unit, and goes up to 2 inches or 50 millimeters. See
  [Units and packing](/docs/units-and-packing/#packing).
- **Icons before the words on buttons.** The Designer's Node, Edge and Cluster switch has a small picture of each, in the colors of the Kind column on the Data tab, and so do the
  buttons that save, cancel, copy, choose a file, start over and answer the notice about units. The words are still there.
- **System requirements** on the [Download](/download/#system-requirements) page: a 64-bit computer, and macOS 13 or later.

**Changed**

- **The pictures for the head port and the tail port** are redrawn as SVG, so they stay sharp on any screen: a circle in the middle, with an arrow that arrives at one of its compass
  points, or leaves from it. They are listed clockwise from north, then the center.
- **The pack mode and the gap** in a cluster style for the osage layout use your unit, and the pack mode offers node and graph as well as clust and array.

**Fixed**

- The pack modes `node` and `graph` made Graphviz stop with a syntax error, because DOT keeps those words for itself. They are written in quotes now.
- A style restored into the Designer in millimeters is converted, so its height and width read the same size.

## Version 0.1.0, beta 1 (October 26, 2026)

The first beta, for Windows, macOS and Linux. It holds the Data, Diagram, Knowledge Graph, DOT, Designer, Styles, SQL, SVG, Settings and About tabs, builds the SQL rows from
Excel and LibreOffice workbooks, CSV and TSV files, Access databases and SQLite databases, and publishes pictures, Knowledge Graphs and DOT files. It opens files exported from the
Excel tool. See [Download](/download/) for what it runs on.
