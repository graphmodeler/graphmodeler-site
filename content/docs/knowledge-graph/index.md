# The Knowledge Graph tab

The same rows and styles that make a diagram can also be published as a **Knowledge Graph**: a JSON file that lists the nodes, the
edges and the styles, along with the properties you attached to them. It is meant to be read by programs, and by AI tools that you
want to ask questions about your graph, since it states in words and values what a picture only shows.

It is made by the app itself and needs no Graphviz.

<img class="shot shot-light" src="/shots/knowledge-graph-light.png" alt="The Knowledge Graph tab, with its viewer showing the JSON">
<img class="shot shot-dark" src="/shots/knowledge-graph-dark.png" alt="The Knowledge Graph tab in the dark theme">

## The viewer

The tab shows the Knowledge Graph for the view chosen in the left pane.

- **Search** finds text, with **Prev** and **Next** to step through the matches and **Clear** to start again.
- **Raw** shows the JSON as text with line numbers. **Tree** shows it as a tree you can open and close.
- **Copy Raw** and **Copy Pretty** put the text on the clipboard, compact or indented. **Save Raw As File** and **Save Pretty As File** write it
  to a file.
- A line of counts shows the characters, an estimate of how many tokens an AI tool will count, the lines, and the numbers of nodes and edges.
  The estimate is about four characters to a token, with eight percent on top. It is a guide to whether the file will fit in a request.

Anything that was left out, such as a row whose style is not used in the chosen view, is listed in the left pane under **Knowledge Graph
messages**, with its row number.

## What is in the file

```json
{
  "format": "RV-KGF",
  "version": "1.1",
  "directed": true,
  "view": "All Styles",
  "styles": {
    "Step": { "description": "A step in the process", "type": "node" }
  },
  "nodes": [
    { "id": "Order received", "style": "Step", "label": { "value": "Order received", "type": "text" } }
  ],
  "edges": [
    { "id": "Order received->Credit check", "source": "Order received", "target": "Credit check", "style": "Flow" }
  ]
}
```

- **`styles`** lists each style in use, with its description, its type, and the properties set on the style.
- **`nodes`** has one entry for each node, and one for each cluster, which says which cluster it is inside.
- **`edges`** has one entry for each edge, with its labels.
- **Properties** from the **Properties** column of a row or a style are in a `properties` object, and keep their types. A bare number is a
  number, `true` and `false` are booleans, and a quoted value is text. The properties of a style are listed with the style, and the
  properties of a node or an edge are its own.
- The file has the name of the project in `source_workbook`, a name kept from the [Excel tool](/docs/from-excel/) that this app grew out of, and the time it was made.

## The format

The file follows the **Relationship Visualizer Knowledge Graph Format (RV-KGF)**. Its schema and examples are published at
[github.com/jjlong150/rv-kgf](https://github.com/jjlong150/rv-kgf), so a program that reads the file, or a prompt that describes it to an AI tool, can rely on a
written definition and not on a guess. The `format` and `version` fields at the top of every file name it.

The Excel tool, [Relationship Visualizer](/docs/from-excel/) (also called Excel to Graphviz), writes the same format, so the two tools produce
files that can be compared, and a file from either can be read by the same program.

## Writing the file

Turn on the second **Write** button in the left pane, the one with the three joined dots, and press **Publish**. The file is a `.json` file
beside the others. The **Knowledge Graph layout** setting chooses between a compact file and one indented by two or four spaces. The compact one
is smallest, which matters for what an AI tool is given.

Publish will not write over the open project file, or over a `.json` file that is not a Knowledge Graph, so a name that clashes is refused
and not replaced.

## Properties are what make it useful

A diagram needs only names and links. A Knowledge Graph is worth more when each node and edge says what it is, who owns it, how critical it
is, and so on. Add those as properties, on the style when everything of that kind shares them and on the row when it is particular, and
the file carries them.
