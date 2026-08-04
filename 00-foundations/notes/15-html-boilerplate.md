# HTML Boilerplate

| | |
|---|---|
| **Course** | Foundations |
| **Section** | HTML Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-html-boilerplate> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Every HTML document starts from the same skeleton — the boilerplate. This lesson covers what each piece of that skeleton does (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) and how to open your file in a browser to see it rendered. You will type this structure so often it should become reflex.

## Key concepts

### The full skeleton

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

### Piece by piece

- **`<!DOCTYPE html>`** — the doctype declaration, always the first line. It tells the browser to render the document using the HTML5 standard. Without it, browsers can fall back to quirks mode and render inconsistently.
- **`<html>`** — the **root element**; every other element nests inside it. Give it a `lang` attribute (e.g. `lang="en"`) so screen readers know which language to announce the page in.
- **`<head>`** — metadata about the page, *not* visible content. Two essentials:
  - `<meta charset="UTF-8">` — sets the character encoding so text (including non-Latin characters and symbols) displays correctly.
  - `<title>` — the text shown in the browser tab; without one the tab falls back to the filename.
- **`<body>`** — everything the user actually sees: text, images, links, lists, and so on.

### Viewing your page

Open the file directly in a browser — drag it into a window, double-click it, or use the terminal, e.g. on macOS:

```bash
open ./index.html
```

The home page of a site is conventionally named `index.html`; servers look for that name by default.

### Don't hand-wave it

VS Code can generate the boilerplate for you (typing `!` then Tab in an `.html` file), but at this stage write it from memory until the structure is automatic.

## Common pitfalls

- Putting visible content in the `<head>` — it belongs in `<body>`; the head is metadata only.
- Omitting the doctype, or not putting it on line one, triggering quirks-mode rendering.
- Forgetting the `lang` attribute on `<html>`, which degrades the screen-reader experience.
- Misnaming the main page — use `index.html` so servers and hosts find it without configuration.

## Objectives — can you explain these?

- [ ] Write the standard HTML boilerplate from scratch.
- [ ] Open an HTML file in your browser to view it.

## Self-test

- What does the doctype declaration do?
- What is the `<html>` element for?
- What belongs in the `<head>` element?
- What belongs in the `<body>` element?

## My notes

## Questions / to revisit
