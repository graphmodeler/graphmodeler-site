---
description: "Choose the language of Graph Modeler's tabs, buttons and messages on the Settings tab, and use a language file of your own. The website and the license stay in English."
---

# Languages

Graph Modeler can show its tabs, buttons, tooltips and messages in other languages. English is built in. Another language comes as a language file, and the program finds it
without a new installer.

Ten languages come with the program, besides English, and a British-spelling English; they are listed [below](#languages-that-come-with-the-program). Every tab, button, tooltip and message is translated, and so is the menu bar at the top of the window.

## Choosing a language

On the [Settings](/docs/settings/) tab, the **Language** group at the top has a list.

- **Automatic** follows the language of your computer when Graph Modeler has it, and uses English when it does not. It says which one it is using now, such as **Automatic (English)**. It takes the first language of your computer's list that Graph Modeler has: a Swiss German computer gets German, a Mexican Spanish one gets Spanish, and a Portuguese one gets Brazilian Portuguese. Traditional Chinese (Taiwan, Hong Kong, Macau) is not given the simplified file; the next language on your list is tried instead, and then English. An English with a region other than the American one (Canada, the United Kingdom, Australia, New Zealand, Ireland, India, South Africa and so on) gets the British spelling.
- Any other entry is a language, named in its own words, such as Polski. Choosing one changes the window at once.

The choice is saved on this computer, and not in the project, so a project you send to someone else does not change their language. Nothing in the project changes either:
your data, the style names you typed and the Graphviz attributes are yours, and stay as you wrote them.

A language that came with Graph Modeler and that no person has reviewed is marked **(machine translated)**, and a note under the list says so. A reviewed one shows only its name.

## What stays in English

- **This website and its documentation.** A browser can translate a page as you read it.
- **The text of the license itself,** so that nothing is lost in a translation. The questions and buttons around it are translated.
- **Graphviz's own words,** such as the names of attributes and shapes, and the words of SQL. The names of the columns that a query returns (`Item`, `Related Item`, `Style Name`)
  are typed into scripts, so they stay English. On the [Data](/docs/data/) tab a heading in another language shows the English name in its tooltip, such as **SQL: Related Item**.
- **The status words of a SQL run:** `SUCCESS`, `FAILURE`, `SKIPPED` and `FILTERED OUT`, which the program reads.
- **The support information** on the [About](/docs/about/) page, which is copied for whoever helps you.

## A file of your own

A language file is a PO file, the format that translation tools such as [Poedit](https://poedit.net/) read and write. To use or change one:

1. Press the **folder button** under the list of languages. It opens the folder for your own language files.
2. Put the file in it. Its name is the language's tag, such as `nl.po`, `pl-mine.po` or `en-CA.po`. The underscore that Poedit writes, as in `en_GB.po`, is read as a hyphen, and the
   `Language` line inside the file must be the same language.
3. Press the **reload button**, then choose the language in the list. It is marked **(your file)**, and a note under the list says which file it is from.

Graph Modeler never changes, moves or deletes a file in this folder, and never chooses a file from it by itself. A file there cannot replace a language that came with the program: to
change one, make a copy under a tag of your own (for example `pl-mine`) and set the header `X-GraphModeler-BasedOn` to the language it starts from. The copy then holds only the
texts you changed, and takes the rest from that language and then from English.

A text a file leaves empty, or does not have, is shown in English. A file that cannot be used is listed under the language list with the reason, in English, so you can correct it.
A line of a file that is wrong is left out and the rest of the file is still used.

## Languages that come with the program

Each is in the list under its own name, and the people who translated a language are named on the **About** page. See [About](/docs/about/).

| Language | Made by |
|---|---|
| Polski (Polish) | Arek Czak, reviewed |
| Deutsch (German) | Machine translated |
| Français (French) | Machine translated |
| Español (Spanish) | Machine translated |
| Русский (Russian) | Machine translated |
| 中文 (Chinese, simplified) | Machine translated |
| Italiano (Italian) | Machine translated |
| 日本語 (Japanese) | Machine translated |
| Português do Brasil (Brazilian Portuguese) | Machine translated |
| 한국어 (Korean) | Machine translated |
| English (United Kingdom) | Spelling only: colour, centre, millimetres |

The machine translations were made from a fixed list of terms and checked by program, but no person who speaks the language has reviewed them yet, so you may meet a clumsy
or wrong sentence. If you speak one of these languages and would like to improve it, write to [support@graphmodeler.com](mailto:support@graphmodeler.com): you can work with
[Poedit](https://poedit.net/) on the language file, and you are named on the About page and on this page when your work comes with the program. A language that is not here can be
added the same way, with no change to the program.
