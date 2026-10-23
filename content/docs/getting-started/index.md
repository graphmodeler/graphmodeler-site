# Getting started

This takes a few minutes and ends with a graph on screen and a file you have written. You need Graph Modeler, and
[Graphviz](/download/#install-graphviz) if you want to see the picture. Everything before the picture works without it.

## 1. Start a project

Open the app. It starts with a new project: a few empty rows on the **Data** tab, and the styles every project has.

The left pane has the project's name and the buttons for **New**, **Open**, **Save** and **Save as**, then **Undo** and **Redo**, then
**Publish**. A project is saved as a `.json` file.

## 2. Type the things

On the **Data** tab, type a name in the **Item** column of the first row: `Order received`. That is a node. Move to the next row and type `Credit
check`, and then `Ship order` on the one after. Each is a node, and each row has a blue dot.

To connect two of them, put one in **Item** and the other in **Related Item**. A row with `Order received` and `Credit check` is an edge
from the first to the second. Its dot is orange. Add `Credit check` to `Ship order` the same way.

The diagram appears beside the data, so you see it change as you type. If you do not see a picture, see [Without Graphviz](/docs/diagram/#without-graphviz). The **Graph** menu on the toolbar moves it to a tab of its own.

<img class="shot shot-light" src="/shots/data-light.png" alt="The Data tab with a small graph typed in">
<img class="shot shot-dark" src="/shots/data-dark.png" alt="The Data tab in the dark theme">

## 3. Give them a look

Every node and edge so far uses the plain default style, so all of them look alike. A style changes that.

1. Open the **Designer** tab and choose **Node**.
2. Pick a shape, say a rounded box, and a fill color. The preview changes as you choose.
3. Type `Step` as the **Style name** and press **Save to styles**.
4. Back on the **Data** tab, type `Step` in the **Style Name** cell of the node rows, or choose it from the list.

Every row that uses `Step` follows it. Change the style again and they change together. See [the Designer](/docs/designer/) and
[the Styles tab](/docs/styles/).

## 4. Lay it out

Open the **Diagram** tab. The buttons above the picture change the layout: left to right is easier to read for a process, and the layout
engines place nodes in different ways. Try a few. See [the Diagram tab](/docs/diagram/).

## 5. Publish it

In the left pane, under **Publish**:

- Choose the **folder** the files go to. It starts as your Documents folder.
- Type a **file name**. A preview shows what the next file will be called.
- Under **Write**, turn on what you want: the diagram, the Knowledge Graph, the DOT source, or any mix.
- Choose **Add to the name**: nothing, the date and time, or a counter. A counter makes each publish a new file instead of replacing the last.

Press **Publish**, and the files written are listed. Click one to open it. **Publish all views** writes a set for every
[view](/docs/styles/#views).

The diagram can be an SVG, a PNG, a PDF and more; the format is set under **Settings**. The Knowledge Graph is a JSON file, described in
[the Knowledge Graph tab](/docs/knowledge-graph/).

## 6. Save the project

**Save** writes the project to a `.json` file. Open it again later and your rows, styles and settings are back. The file is plain text,
which you can read, keep under version control, or generate from another program.

## Next

- Build the rows from a spreadsheet instead of typing them: [the SQL tab](/docs/sql/).
- Turn on colors for kinds of things by giving each kind its own style, and use [views](/docs/styles/#views) for an overview and a
  detailed picture from the same rows.
- Hand your graph to an AI tool with [the Knowledge Graph](/docs/knowledge-graph/).
