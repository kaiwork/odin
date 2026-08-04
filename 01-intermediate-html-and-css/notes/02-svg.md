# SVG

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate HTML Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-svg> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

SVG (Scalable Vector Graphics) is an image format defined by shapes and math instead of a grid of pixels, so it scales to any size without blurring. Because it is written in XML, an SVG is plain text you can read, edit, style with CSS, and manipulate with JavaScript. It is the go-to format for icons, logos, charts, and simple illustrations — but a poor fit for photographs.

## Key concepts

### Vector vs raster

- Raster formats (JPG, PNG, GIF) store a fixed grid of pixels — enlarge them and they pixelate.
- Vector formats store instructions ("draw a circle of this radius here"), so the browser can re-render them crisply at any resolution.

### SVG is XML

An SVG file is markup, structurally similar to HTML:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="0" y="0" width="100" height="100" fill="burlywood" />
  <circle cx="50" cy="50" r="25" fill="transparent" stroke="black" stroke-width="4" />
  <text x="50" y="55" text-anchor="middle">Hi</text>
</svg>
```

- `xmlns` declares the XML namespace so tools know this markup is SVG.
- `viewBox` defines the internal coordinate system: origin, width, height, and therefore the aspect ratio.
- Common shape elements: `<rect>`, `<circle>`, `<path>`, `<text>`.
- Presentation attributes like `fill` and `stroke` map to CSS properties, so inline SVGs can be styled from a stylesheet.
- `class` and `id` work the same way they do in HTML.

### Two ways to put an SVG on a page

1. **Linked** — reference the `.svg` file via `<img src="icon.svg">` or a CSS `background-image`. Keeps your HTML clean and lets the browser cache the file, but the SVG's internals are sealed off: you cannot restyle its parts with CSS or script them.
2. **Inline** — paste the `<svg>` element directly into the HTML. Now every internal element is in the DOM, so CSS and JavaScript can target it (great for animated or theme-aware icons). The costs: bulkier, harder-to-read markup, no separate caching, and slower initial HTML load for large graphics.

### When not to use SVG

Photo-realistic or highly textured images need too many vector instructions to be efficient — file size balloons past an equivalent JPG/PNG. Use raster formats for photos; use SVG for icons, diagrams, charts, and geometric artwork.

## Common pitfalls

- Editing SVG coordinates without understanding `viewBox` — the numbers inside the SVG are relative to the viewBox coordinate system, not to CSS pixels on the page.
- Expecting to restyle a linked SVG's internals from your stylesheet — that only works for inline SVGs.
- Reaching for SVG for photographs — the file becomes enormous; raster formats exist for a reason.
- Hand-writing complex `<path>` data — in practice you export paths from tools (or grab icons from libraries) rather than authoring them manually.

## Objectives — can you explain these?

- [ ] What SVGs, vector graphics, and XML are.
- [ ] How to build a basic SVG and embed it in a page.
- [ ] When SVG is the right format, and when a raster format is the better choice.

## Self-test

- What does the `xmlns` attribute on the `<svg>` element do?
- In which situations would SVG be a bad choice of image format?
- What do you gain by inlining an SVG, and what do you give up?

## My notes

## Questions / to revisit
