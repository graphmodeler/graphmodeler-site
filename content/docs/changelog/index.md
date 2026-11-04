---
description: "What changed in each version of Graph Modeler, newest first: new features, fixes and changes since the first beta."
---

# What's new

What each version of Graph Modeler changed, newest first. Graph Modeler is in beta, so the version numbers are small and the changes are many. The installers for each are on the
[Download](/download/) page. Where a change is explained on a page of its own, there is a link.

## Version 0.1.6, beta 7 (November 4, 2026)

**New**

- **The Mac app is signed and notarized.** It carries Apple's Developer ID signature and has been checked by Apple, so macOS opens it without the "Open Anyway" steps of the earlier betas. The
  first time, macOS asks once whether you want to open an app downloaded from the Internet. See [Download](/download/#macos).
- **`{view}` and `{project}` placeholders.** They put the name of the view being drawn, and of the project, in a label or tooltip, in a value of **Attributes** or of a style's Format, or in a native
  DOT row, so a graph can say what it shows, and each published view carries its own name. They are replaced in the DOT and in the Knowledge Graph. A SQL query passes them through. See
  [Placeholders](/docs/placeholders/#the-view-and-the-project).

**Changed**

- **A drawing that Graphviz could only partly finish is shown.** When Graphviz reports an error but still draws the graph, as the orthogonal edge routing can when it loses an edge, the diagram appears
  with a red notice instead of nothing. Everything Graphviz says, including the long account of **Graphviz verbose messages**, is listed under **Graphviz messages** in the left pane, in a list that scrolls.
  See [The Diagram tab](/docs/diagram/#drawing).
- **The Include Tooltip boxes say where tooltips show.** They are written into the DOT and into published SVG files, where a browser shows them. The picture on the Diagram tab is an image and cannot show them,
  unless SVG post-processing is on. See [Tooltips](/docs/diagram/#tooltips).
- **The Linux software center page.** Once Graph Modeler is installed from the `.deb`, its page shows the license (Proprietary), an all-ages rating, the description and its web addresses. The window that
  opens for a downloaded `.deb`, before it is installed, may still say "Unknown License", because that window reads only the basic details of the package.

## Version 0.1.5, beta 6 (November 2, 2026)

**New**

- **Zoom you can type in.** The diagram's zoom is a box that takes any whole percent from 5 to 800, with a list of common values. The minus and plus buttons take bigger steps as the picture grows, and the three fit
  buttons (to the window, to its width, to its height) are pictures, not words in a list. See [The Diagram tab](/docs/diagram/#the-buttons).
- **A divider between the data and the graph.** Drag the line between the grid and the diagram on the Data tab to give either more room. A double-click puts it back, and the arrow keys move it. It is saved with the project.
  See [The Data tab](/docs/data/#seeing-the-graph).
- **Column widths are saved.** A column you drag to a new width keeps it, on the Data, Styles and SQL tabs, when you leave the tab and when you save and open the project. **Reset widths** in the columns menu puts them back.
- **Several rows at once.** **Add row above** and **Add row below** add as many rows as you chose.
- **A confirmation for personal use.** Choosing free personal use in the first question leads to one more step, with a box to tick. See [Your license](/docs/about/#your-license).
- **The Knowledge Graph in the documentation.** The Designer page explains the Description and the Properties of a style, and the Knowledge Graph page says where each part of the file comes from.
- **A description for the Linux software center.** The `.deb` carries an AppStream description of the program: its license, an all-ages rating and its web addresses. The window that opens when you open a downloaded
  `.deb`, before you install it, may still say "Unknown License" and "No age rating information available", because that window reads only the basic details of the package.

**Changed**

- **The toolbars put the most used buttons first.** On the Data tab the graph controls come before the columns button, and **Clear data** and the bug are at the far end. On every tab with a grid, the columns
  and wrap buttons are just before Help. On the Diagram tab the zoom comes first, then the graph type, the layout engine, the direction, the edge routing and the output order.
- **A button with a split window** shows or hides the diagram beside the data, in place of the **Graph** menu.
- **Buy a license** opens the Pricing page, where the buy button is in plain view.

**Fixed**

- Pressing Zoom in on a diagram that was fitted to the window jumped to 105%, whatever the fit was. It now steps from the magnification the fit comes to.
- A row whose item is `node` or `edge` offered the keyword styles in **Style Name**. It now offers the node styles or the edge styles.

## Version 0.1.4, beta 5 (October 31, 2026)

**New**

- **Your license.** The first time the program starts, it asks whether you will enter a commercial license key or use it for personal and non-commercial purposes.
  The **About** tab shows the answer: who a license is for, the key with most of it hidden, and when it was last checked. A key is checked with Polar when you enter
  it and about every 30 days, and a failed attempt to reach Polar never changes anything. Nothing is switched off with or without a key. See
  [Your license](/docs/about/#your-license) and the [Privacy Policy](/privacy/), which now says what the check sends.
- **Check for updates.** A button on the About tab asks whether a newer version has been released. It runs only when you press it. See
  [Updates](/docs/about/#updates).

**Fixed**

- The license page of the Windows installer showed the trademark sign as three odd characters. It now shows it correctly.

## Version 0.1.3, beta 4 (October 30, 2026)

**New**

- **Open a project by dropping its file.** Drag a project file from your file manager and drop it anywhere on the window. It opens as it would with **Open**, after the usual
  question about unsaved changes. One file at a time, and only a file that ends in `.json`. See [The left pane](/docs/left-pane/#the-project).
- **A signed Windows installer.** The Windows installer and the program are signed with a certificate in the name of Jeffrey Long, so the publisher shows when you install it.
  Windows may still warn the first time, until the signed file has been downloaded by enough people. The Mac version is not notarized by Apple yet; see
  [Download](/download/#install).

**Changed**

- **A file that could not be opened is counted in the narrow strip.** The red number under the buttons now includes the message about it, so a refused file does not pass unseen.

**Fixed**

- After a file that could not be read was opened, **Save** was still set to write to that file. It now asks for a file name, and the file that could not be read is left alone.

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
