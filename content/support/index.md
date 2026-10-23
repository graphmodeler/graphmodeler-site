# Support

## Asking for help

Write to [support@graphmodeler.com](mailto:support@graphmodeler.com). It helps to include:

- What you were doing, and what you expected to happen.
- What happened instead, with the message if there was one.
- The **Support information** from the app's [About tab](/docs/about/). The **Copy** button there puts it on the clipboard.
- The project file, if it is not private. Take out anything you do not want to share first.

## Questions people ask

### It says Graphviz was not found

Pictures, previews and the PNG, PDF or SVG files need Graphviz, which is installed separately. See [Install Graphviz](/download/#install-graphviz).
The **About** tab shows which one the app found. After installing, press the button to look again, or restart the app.

Everything that is not a picture works without it, and you can close the message with the cross on it.

### The picture in my PNG is stretched, and it is not on screen

This is how Graphviz draws, and it is described on the [Designer](/docs/designer/#pictures-in-nodes) page. In an SVG, a picture keeps its
proportions in a node that is larger than it. In a PNG or a PDF it is scaled to fill the node. Scale both ways together (`imagescale=true`),
or make the node the shape of the picture.

### Where did my published files go?

To the folder shown in the **Publish** section of the [left pane](/docs/left-pane/). It starts as the folder of the project file you opened or saved, or your Documents folder if there is none. After a publish the files are listed
there, and a click opens one.

### My query works in Excel and fails here

Queries run on SQLite, not on the database engine of Excel and Access, so some functions and habits differ. The message of the failed line
says what it did not understand, and the [SQL tab](/docs/sql/) page lists what is reproduced and what is not.

### Opening an SVG file asked me a question

The file contains script. That comes from the rules on the [SVG tab](/docs/svg/), which add the toolbar and the zoom. The app asks before it
opens a file that has script, because a browser will run it. Choose to open it only if you made the rules or trust whoever did.

### Can I change the colors of the app?

The app has a light theme and a dark one. The switch is the moon in the banner, and it starts as your system's choice. The picture of the
graph keeps its own colors, which are the ones in your styles.

## Reporting a problem

If something does not do what this site says it does, that is worth a message even if it is small. Say which page said it.
