---
# A DRAFT: it is left out of the finished site until this line is removed (or set to false). Look at it with `npm run dev`.
draft: true
title: "A system context diagram from a spreadsheet, and the architecture review it makes possible"
description: "Describe a system once in a spreadsheet, and Graph Modeler draws the context diagram, with an icon for every actor, application and data store, and publishes the same data as a Knowledge Graph that an AI can review."
date: 2026-11-06
audience: [architects, consultants, knowledge-graph]
---

# A system context diagram from a spreadsheet, and the architecture review it makes possible

<ExampleMeta />

<!--
NOTES FOR THE AUTHOR (these comments are not shown on the page)

This is a first outline adapted from your blog post "How Excel Powers an Ontology, Semantic Model, and Knowledge Graph for IT Architecture Review" (2026-09-30). The facts about the toolkit are yours; I changed the
ground (Graph Modeler instead of the Excel tool) and added only what I checked in the real app. Rewrite it in your own voice.

WHAT I CHECKED
- Your exchange file (Context_Diagram.json) opens in Graph Modeler and converts: 44 data rows, 30 SQL lines (16 on), 163 styles, 6 views (Diagram, Diagram No Legend, Diagram No Notes, Diagram No Legend or Notes,
  Diagram No Clusters, Diagram No Edges).
- The toolkit's SQL runs in Graph Modeler with no problems (Run SQL against "Context Diagram Data.xlsx"), and the diagram is the same.
- The diagram draws with the 18 icons from images/ (Tabler Icons, MIT). 27 pictures appear in the Diagram view.
- The Knowledge Graph of the Diagram view: 24 nodes (9 of them clusters), 10 edges, 21 styles with descriptions; 21,095 characters written compactly (about 5,700 tokens); the indented file is 28 KB.

IMAGES, A FINDING: Graph Modeler shows the pictures on screen, but a published SVG only LINKS to them (images/person.png), so it shows them only with the images folder beside it. An SVG shown through <img> on a page cannot load
links at all. For this page the two SVGs were made with the pictures put into them (27 data URIs), with the app's own inlining code. There is a note about this under "Pictures in the nodes" below. It is a candidate feature: "embed images when publishing".

OPEN QUESTIONS FOR YOU
1. Do you want the AI review itself in this article? The blog shows the prompt and an excerpt of the report as pictures. I only linked your repository's prompt and PDF, because I cannot produce the AI's answer myself without it
   being my words and not the AI's; if you run the prompt on the Graph Modeler file, the result can go here.
2. Screenshots worth adding: the Styles tab (the ontology: 163 styles) and the SQL tab (the semantic model). Say which and I will make them as I did for London.
3. Publish after 1.0.1 (the Knowledge Graph section describes it), and check the wording of "what the toolkit needs", since it needed Windows and Excel before.
-->

Opening paragraph: every architecture review starts with someone drawing a context diagram and everyone squinting at it. What do the shapes and colors mean, which connection is encrypted, does that flow carry customer data? The picture shows the shape of the
system; the facts that matter are somewhere else. (Adapted from your post; make it yours.)

<ExampleDiagram image="/examples/context-diagram-review/context-diagram.svg" interactive="/examples/context-diagram-review/context-diagram-interactive.svg" alt="A system context diagram of a hypothetical Consumer Notifications application: icons for the people, applications, queue and systems, grouped in boxes for the corporate applications and the internet, with a legend at the top right" caption="The Consumer Notifications application, drawn from one spreadsheet. Zoom, pan and hover over a box for its details. It opens in a new tab." />

## What the toolkit does

You describe a system in an Excel workbook: its actors, applications and data stores, the connections between them, and facts about each one, such as data classification, personal data, authentication, failure handling and lifecycle. It is the
[Context Diagram Toolkit](https://github.com/jjlong150/rv-kgf-context-diagram), free and MIT licensed. Graph Modeler turns the same data into two things:

- **A context diagram.** Each connection is colored by its governance status (green approved, amber conditional or deprecated, red prohibited), a dashed line means a better alternative exists, and the shapes and icons for actors, applications and data stores are standardized.
  Boxes group the parts into boundaries and trust zones, here the corporate applications, the perimeter network and the internet.
- **A Knowledge Graph in JSON**, with every entity, every relationship and every fact, to hand to an AI for a review.

The data in this example is made up, and seeded with errors on purpose, so that a review has something to find.

## Opening the toolkit in Graph Modeler

The toolkit's exchange file opens in Graph Modeler directly, and its SQL, which decides how the spreadsheet is understood, runs unchanged against the data workbook. Say what you did and what you saw (I ran **Run SQL** on the SQL tab with the data workbook beside the project and it ran with
no problems). See [Coming from the Excel tool](/docs/from-excel/).

### Pictures in the nodes

A style puts a picture in a node with `image="images/person.png"`. Graph Modeler looks for the file in the project's folder first, then in the folders of the **Image path** setting, and shows the pictures on the Diagram tab.

::: tip A published SVG links to its pictures
A **PNG or PDF** always contains the pictures. A published **SVG** only links to them, so it shows them only if the `images` folder is beside it (or the path is absolute). For the picture on this page the pictures were put into the SVG file itself, which is why it is larger than the one Graphviz writes. (Rewrite this
in your own words once you have decided how you want to deal with it.)
:::

The icons are from [Tabler Icons](https://tabler.io/icons), MIT licensed, which the download credits.

## The same data as a Knowledge Graph

<!--
NOTE FOR THE AUTHOR: this section describes version 1.0.1 and later, as in the other examples. The numbers come from the file: 24 nodes (9 of them clusters), 10 edges, 21 styles; 21,095 characters compact (about 5,700 tokens by the viewer's estimate).
-->

Open the **Knowledge Graph** tab and the file for the chosen view is there. Below is the same viewer, with this diagram's file in it. Try the **Tree** view, and **Search** for `contains_pii`. The counts under the toolbar show its size and estimated tokens.

<ExampleKnowledgeViewer light="/examples/context-diagram-review/context-diagram-knowledge-graph-viewer-light.html" dark="/examples/context-diagram-review/context-diagram-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the context diagram, in the viewer of Graph Modeler" :height="560" />

- **The file describes itself.** Its `styles` list the 21 kinds of thing in the diagram, each with a plain-language description and the names of its typed properties, so an AI does not need a separate data dictionary to know what `failure_alerting` or `contains_pii` mean.
- **The facts are typed.** A node or an edge carries `properties` that keep their types: `contains_pii` is `true`, not the word "true".
- **Clusters keep the boundaries.** The nine clusters, from the whole system down to the cloud service provider, say which parts sit inside which, which is what a trust-boundary question needs.

### Ask the file a question

Give the file to an AI assistant, or read it with a few lines of code. Three questions, each answered by the file itself:

- **Which connections carry personal data?** Three: Consumer Notifications to the Notification Queue (once to put messages on it and once to take them off) and the Consumer to the Email Client.
- **Which connections have no authentication?** The two email connections: Marketing CRM to Mail Relay, and Mail Relay to Email Client.
- **Which connection uses a pattern that needs approval?** Consumer Notifications to the Forward Proxy: the definition of its style, `forward_proxy_https_rest`, says it requires approval.

Those are lookups. The review itself, with ratings for security, scalability and resilience, a risk register and proposed mitigations, comes from handing the file and the toolkit's
[review prompt](https://github.com/jjlong150/rv-kgf-context-diagram/blob/main/prompts/Architecture_Design_Review_Prompt.md) to an AI; the toolkit has the
[assessment report](https://github.com/jjlong150/rv-kgf-context-diagram/blob/main/examples/consumer-notifications/assessment-report.pdf) it produced for this example.

## Why a spreadsheet?

It is not a replacement for an enterprise architecture platform, which does governance, repositories and traceability far better. But much of architecture work happens before anything is formal: early design talks, solution reviews, "can you draw me what this looks like?" A spreadsheet that anyone can fill in, and that produces
both a diagram and a graph that can be reviewed, removes a lot of friction. (Condensed from your post.)

## Try it yourself

<ExampleDownload file="/examples/context-diagram-review/context-diagram-example.zip" size="42 KB">
The project, its icons and the Knowledge Graph. Unzip them into one folder and open <code>context-diagram.json</code> in Graph Modeler. The toolkit's data workbook, the review prompt and the full report are in the toolkit's repository.
</ExampleDownload>

If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.

## Related

- [Coming from the Excel tool](/docs/from-excel/) explains how exchange files open.
- [The Knowledge Graph tab](/docs/knowledge-graph/) explains the file and the viewer.
- [The SQL tab](/docs/sql/) explains the queries behind the diagram.
