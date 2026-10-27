# Units and packing

Two things that were settled in the Excel tool by one box and one corner of the Designer are now settings of the whole project: whether lengths are in
inches or millimeters, and how the separate parts of a graph are packed.

## Units

Graph Modeler shows and takes a length in **inches** or **millimeters** (spelled millimetres in most countries other than the United States, and the app
follows your region). It is used wherever you choose or type a length:

- the **Height** and **Width** of a node in the [Designer](/docs/designer/);
- the **space between separate parts** of a graph, under [Settings](/docs/settings/), in the options of the layout; and
- the **Margin** between packed clusters in a cluster style for the osage layout.

There are two settings, in the **Units** group of the Settings tab:

| Setting | Where it is kept | What it does |
| --- | --- | --- |
| **Units for this project** | In the project file. | The unit the lists and boxes use for this project. A file says which unit its author worked in, so a colleague who opens it sees what you saw. |
| **Units for new projects** | On this computer, not in the project. | The unit a new project starts in. You set it once and it is remembered. The first time the app runs it is chosen from your region: inches in the United States, Liberia and Myanmar, millimeters elsewhere. |

If you open a file whose unit is not the one you prefer, the file's unit is used, and a notice under the project name offers to **switch** the project to yours or
to **keep** it. Switching can be undone. Opening a file never marks it as changed. A file with no unit in it, such as one saved before there were units or one exported from
the Excel tool, takes your preference, and keeps it from then on.

### What changes, and what does not

A unit decides only how a number is shown and typed. Graphviz works in inches for the size of a node, and in whole points (72 to the inch) for the space between
packed parts, and that is what the project file and the DOT hold, whichever unit you work in. So:

- Changing the unit of a project does not change a graph. A node 0.5 inches high is 12.7 millimeters high, and the Designer converts the number it shows.
- A length typed in millimeters is written to the format in inches, to four decimal places.
- A gap between packed parts is a whole number of points, so it can be as much as 0.18 millimeter from what you chose. A gap that is a whole number of
  millimeters is shown as that number.

## Packing

A graph often falls into **parts**, groups of nodes joined to each other and to nothing else. Graphviz lays out each part by itself and then **packs** them together.
Every layout except **patchwork**, which draws a treemap, can do this. In the **dot** layout the parts sit side by side in a row until you ask for packing, and the other layouts pack
the parts unless told otherwise.

Under **Settings**, in **Options for the** *layout* **layout**, three settings control it:

| Setting | What it does |
| --- | --- |
| **Space between separate parts (pack)** | The gap between the parts, listed in your unit from 0 to 2 inches in eighths, or from 0 to 50 millimeters. In the dot layout choosing a gap turns packing on. The other layouts pack already, and this sets the gap. Left at the default, Graphviz uses 8 points. |
| **Pack mode** | How the parts are fitted together, below. Choosing one turns packing on, whether or not a gap is chosen. |
| **Array packing options** | Used when the pack mode is **array**, below. |

The gap and the mode do not depend on each other. Either alone is enough.

### Pack modes

- **node** (the default): the parts are packed by the shapes of their nodes and edges, as close as they can be without overlapping.
- **clust**: the clusters at the top level are kept whole.
- **graph**: each part is treated as a box, the smallest rectangle that holds it.
- **array**: the parts are placed in a grid, a row at a time. By default the number of columns is about the square root of the number of parts, the biggest part comes first,
  and a part that is smaller than its cell is centered.

The **array packing options** are letters and a number, written one after another:

| Write | Meaning |
| --- | --- |
| `c` | Fill the columns first instead of the rows. |
| `t` or `b` | Line the parts up along the top or the bottom of their cells. |
| `l` or `r` | Line the parts up along the left or the right. |
| `u` | Order the parts by the `sortv` attribute you give each one, with zero for a part that has none, instead of by size. |
| `i` | Keep the order the parts were written in. |
| a number | How many parts to a row, or to a column if `c` is given. |

For example `c3tl` fills columns first, three to a column, with the parts aligned to the top and the left.

### The osage layout and clusters

The osage layout packs the inside of each cluster as well as the whole graph, so it is the one layout that reads these settings in a cluster. In the Designer, a cluster style
made for osage has a **Packing (osage layout)** group with the **Margin** between the packed parts and the **Pack mode**, in the same units. Every other layout ignores them in a cluster,
and uses the settings of the whole graph.
