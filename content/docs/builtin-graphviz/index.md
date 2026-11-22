---
title: "The Graphviz that comes with Graph Modeler"
description: "A copy of Graphviz is included with Graph Modeler, so pictures can be drawn with nothing else installed. What it makes, what it does not do, and how to choose."
---

# The included Graphviz

Graph Modeler draws its pictures with [Graphviz](https://graphviz.org/). You can install Graphviz yourself, as the [Download](/download/#install-graphviz)
page says, or use the copy that comes with the program: Graphviz compiled to WebAssembly, which runs inside Graph Modeler. With it, a computer
that has no Graphviz can draw diagrams at once. It is a second choice and not a replacement: it makes fewer kinds of file, and it is a
little less exact about text, as this page says.

## Choosing

The first time a picture is needed and there is something to choose between, Graph Modeler asks which Graphviz should draw your pictures. Each
choice shows its version number and what it gives:

- **Graphviz, included with Graph Modeler**: the same picture on every computer, SVG pictures only.
- **Graphviz, installed on this computer**: every format, including PNG and PDF.
- When nothing is installed, **Draw no pictures** is the other choice. Everything but pictures works without any Graphviz.

<img class="shot shot-light" src="/shots/builtin-graphviz-question-light.png" alt="The question: Which Graphviz should draw your pictures? The included Graphviz 16.1.0 or the one installed on this computer, each with what it gives">
<img class="shot shot-dark" src="/shots/builtin-graphviz-question-dark.png" alt="The question, in the dark theme">

The answer is kept on your computer, not in the project, and is on the **Settings** tab, in the **On this computer** group, in the same words. The
Graphviz that you installed is never changed or removed by this. When both are there, a small line under the diagram's toolbar says which one drew
the picture. A tick box on the Settings tab hides that line.

<img class="shot shot-light" src="/shots/builtin-graphviz-settings-light.png" alt="The On this computer group of the Settings tab: the invitation tick box, the tick box for the line that names the Graphviz, and the choice of Graphviz">
<img class="shot shot-dark" src="/shots/builtin-graphviz-settings-dark.png" alt="The On this computer group, in the dark theme">

## What it makes

| | Included | Installed |
|---|---|---|
| SVG pictures | yes | yes |
| The DOT source and JSON | yes | yes |
| PNG, PDF and the other picture formats | no | yes |
| Graphviz's own renderers (Cairo, GD) to choose among | no | yes |

Where the included Graphviz cannot make the format you chose for **Publish**, the format is dimmed on the Settings tab and the diagram is left
out of a publish, with the reason said. SVG pictures open in a browser, and import into the Office programs and most drawing programs.

## What it does not do

- **It does not report warnings.** Graphviz prints a warning when it ignores something, such as a color it does not know or a picture it cannot
  find, and the left pane lists them. The included Graphviz draws the picture and says nothing, so the list is empty. An error that stops a
  picture, such as a mistake in the DOT, is still reported.
- **It measures text from tables, not from your fonts.** The width of a label decides the size of its node. Measured against the installed
  Graphviz, the width of Latin text came out within about 4% on average (the worst label 8%). Text in Cyrillic or in Chinese or Japanese came
  out narrower, by 1% to 19% for Cyrillic and by 14% to 45% for Chinese and Japanese, so a label can sit tight in its node or run over its
  edge. The **Room inside** control of the [Designer](/docs/designer/) adds space around the text, and is the remedy.
- **It has no verbose messages.** The **Graphviz verbose messages** box on the Settings tab does nothing with it.

## The same picture everywhere

The included Graphviz does not read the fonts or the Graphviz of the computer, so the same graph gives the same picture on Windows, macOS and
Linux. Each build of Graph Modeler is checked by drawing a test graph on each system and comparing the result with the expected picture.

## Speed

It does not start a program for each picture, so a small graph is drawn at once. On a small old computer (an Atom processor, 2 GB of memory) a
graph of 3,000 nodes took 7 seconds with the included Graphviz, where the Graphviz 2.42 installed there took 15 seconds. A very large graph
takes as long as it takes in Graphviz itself, and does not stop the rest of the program.

## Licenses

The included Graphviz is Graphviz 16.1.0, under the Eclipse Public License v2.0, compiled to WebAssembly by the package
[@hpcc-js/wasm-graphviz](https://github.com/hpcc-systems/hpcc-js-wasm) (Apache License 2.0), with the Expat XML library (MIT License). They are
listed on the [About tab](/docs/about/), and the full texts are in a `licenses` folder that is installed beside the program, with where to get
the source.
