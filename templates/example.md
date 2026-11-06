---
# Copy this file to content/examples/<short-name>/index.md (a folder with an index page, like every page of the site).
# `draft: true` keeps the example out of the finished site (no page, no list entry, no feed item, no sitemap entry) while you write it:
# look at it with `npm run dev`. Delete the line, or set it to false, to publish it with the next push.
draft: true
title: "The title, in the words someone would search for"
description: "One or two sentences that say what the reader gets. It is shown in the list, in search results and when the link is shared."
date: 2026-11-06
# Who it is for. Any of: consultants, architects, knowledge-graph
audience: [consultants]
---

# The title, in the words someone would search for

<ExampleMeta />

The problem, in two or three sentences: what the reader has (a spreadsheet, a CSV export, a database) and what they want to end up with.

<!--
The diagram, in two files in content/public/examples/<short-name>/: publish it from Graph Modeler once with SVG post-processing OFF (diagram.svg, the picture on the page)
and once with it ON (diagram-interactive.svg, which opens in a new tab with zoom, filters and hover). The page shows the picture and a button to the interactive one.
-->
<ExampleDiagram image="/examples/short-name/diagram.svg" interactive="/examples/short-name/diagram-interactive.svg" alt="What the diagram shows, for someone who cannot see it" />

## The data

What the input looks like. A small table of a few rows is enough.

## How the model is built

The steps, in the order the reader would do them, with a screenshot where it helps (put screenshots in content/public/shots/, each in a light and a dark version).

## Try it yourself

<!-- A zip of the project (.json) and its data files, in content/public/examples/<short-name>/. -->
<ExampleDownload file="/examples/short-name/short-name.zip" size="0 KB">
The project and its data. Unzip them into one folder and open the project in Graph Modeler.
</ExampleDownload>

## Related

- A link to the page of the documentation that explains the feature used, with the closing slash: [Data](/docs/data/).
