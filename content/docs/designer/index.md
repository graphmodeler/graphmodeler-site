# The Designer

A style is a name and a format, and the format is a list of Graphviz attributes such as `shape="box"` and `fillcolor="#e0f2f7"`.
You can type a format into the Styles tab, but you need to know the attribute names and what values they take. The Designer
lets you choose them from menus, shows the result as you go, and writes the format for you.

<img class="shot shot-light" src="/shots/designer-light.png" alt="The Designer building a node style, with a preview and the format string it writes">
<img class="shot shot-dark" src="/shots/designer-dark.png" alt="The Designer in the dark theme">

## Using it

1. Choose what you are designing with **Node**, **Edge** or **Cluster** at the top. Only the choices that apply to it are shown.
2. Pick values on the left. The preview on the right is drawn by Graphviz after every change, and the **Format string** below
   it shows what is being written.
3. Give the style a **Style name** and, if you like, a **Description**.
4. Press **Save to styles**. The style is added to the Styles tab, or updated if one of that name is there.

To change a style you already have, press the pencil in its **Format** cell on the Styles tab. The Designer opens with that
style loaded. **Start over** clears everything.

The Designer knows the attributes it offers. If a format has others, they are kept in the format string and written back
unchanged, and you can add your own by typing in the format string.

## What you can set

The choices are in groups, and the ones that do not apply to what you are designing are left out.

- **Color scheme**, **Font**, **Shape**, **Size**, **Image**, **Label**, **Fill** and **Border** for nodes and clusters, with their
  edge counterparts, such as arrowheads, for edges.
- Colors take a name or a hex value, with a swatch and a picker. A **Color scheme** makes the color names in the list read
  from a set, such as one of the ColorBrewer palettes, so a diagram can use a palette from one choice.
- **Shape** and **Font** show a small picture of each choice in their lists. The fonts are the ones installed on your computer; see
  [Fonts](/docs/fonts/) for how they are found and what to do after installing one.
- **Position** choices, such as where a label sits in a cluster, are buttons with an icon: vertical position first, then
  horizontal. A second press on the chosen button clears it.
- **Properties** are facts about the style that do not change the drawing but go into the Knowledge Graph.

The tick boxes under **Label text** decide whether the text typed there becomes part of the style, or is only used to draw the
preview.

**Show settings in preview** adds the format to the preview as a caption, which is useful for a picture that shows how a
style was made.

For the meaning of each attribute, see [Graphviz's own pages on attributes](https://graphviz.org/doc/info/attrs.html).

## Pictures in nodes

A node can show a picture with the **Image** group. Choose the file, or give a name that is found beside the project file or
in the image path set under Settings.

When the node is bigger than its picture, the format decides how the picture fills the space, and **how it looks depends on
the output format**. This comes from Graphviz, not from the app:

- In **SVG**, which the Designer and the Diagram tab show, a picture keeps its proportions. It is fitted inside its box, not
  stretched, and set at the top left.
- In **PNG, PDF** and the other drawn formats, the picture is scaled to fill the box. A square picture in a wide node is
  stretched across it, whatever the image scaling is set to, unless it is set to scale both ways together (`true`).

So a graph that looks right on screen can show a stretched picture when it is published as a PNG. To have the same picture in
every format, scale both ways together, or give the node the shape of the picture. If in doubt, publish a PNG and open it.
