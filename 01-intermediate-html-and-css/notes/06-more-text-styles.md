# More Text Styles

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-text-styles> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Fonts you name in `font-family` only render if the user's machine has them — so this lesson covers the two ways to ship fonts that aren't installed (font libraries and self-hosting with `@font-face`), plus the "system font stack" fallback strategy. It also rounds up the everyday text properties: `letter-spacing`, `line-height`, `text-transform`, `text-shadow`, and the ellipsis-truncation trio.

## Key concepts

### Font stacks and the system font stack

`font-family` takes a comma-separated fallback list; the browser uses the first font it can find, ending with a generic family like `sans-serif`. The *system font stack* names each OS's native UI font so text looks at home on every platform and needs no download:

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```

### Getting non-installed fonts to users

1. **Online font libraries** (Google Fonts, Font Bunny, Font Library): copy a `<link>` tag into your HTML `<head>` (or an `@import` into CSS), then use the font name in `font-family`. Always keep a generic fallback in the stack in case the download fails.
2. **Self-hosting with `@font-face`**: download the font file (e.g. `.woff2`), serve it yourself, and register it:

```css
@font-face {
  font-family: "My Font";
  src: url("my-font.woff2") format("woff2");
}

h1 { font-family: "My Font", sans-serif; }
```

Self-hosting avoids a third-party dependency; either way, check the font's licence.

### Text properties worth knowing

```css
p {
  font-style: italic;        /* visual italics — use <em> when emphasis is *meaningful* */
  letter-spacing: 0.1em;     /* space between characters */
  line-height: 1.5;          /* space between wrapped lines; unitless multiplies font size */
  text-transform: uppercase; /* also: lowercase, capitalize */
  text-shadow: 1px 1px 2px rgba(0 0 0 / 0.4);
}
```

### Truncating overflowing text with an ellipsis

Three properties work together — none does it alone:

```css
.overflowing {
  white-space: nowrap;       /* stop wrapping */
  overflow: hidden;          /* clip what doesn't fit */
  text-overflow: ellipsis;   /* show … at the cut */
}
```

## Common pitfalls

- Using `font-style: italic` where the italics carry meaning — screen readers ignore CSS; use `<em>` (or `<strong>` for importance) for semantic emphasis, CSS for pure decoration.
- Naming a downloaded font in `font-family` with no fallback — if the font fails to load, the browser picks something arbitrary.
- Expecting `text-overflow: ellipsis` to work on its own — without `overflow: hidden` and `white-space: nowrap` nothing happens.
- Setting `line-height` too tight on body text — a value around 1.5 markedly improves readability over the browser default.

## Objectives — can you explain these?

- [ ] How to use custom (non-installed) fonts in a project.
- [ ] A handful of additional text-styling CSS properties.

## Self-test

- What are the two routes for delivering a font the user doesn't have installed?
- What is the system font stack, and what problem does it solve?
- Which property changes the spacing between letters?
- Which property changes the spacing between lines of a paragraph?

## My notes

## Questions / to revisit
