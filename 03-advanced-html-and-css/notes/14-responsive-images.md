# Responsive Images

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Responsive Design |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-responsive-images> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Images need two kinds of responsive treatment: CSS control over how a picture fits its box when that box resizes (without stretching or squashing), and HTML mechanisms for serving *different* image files to different screens so phones don't download desktop-sized photos — or get a crop that doesn't work at their size.

## Key concepts

### Sizing with CSS

An `<img>` with only one dimension set scales the other automatically, keeping its aspect ratio. The problem starts when you constrain **both** width and height: the default behaviour stretches the image to fill, distorting it.

### object-fit (for `<img>`)

`object-fit` decides how the image content maps into a fixed-size img box:

```css
img.thumb {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
```

- `fill` — default; stretches to fill both dimensions (distorts).
- `cover` — fills the box completely, cropping whatever overflows; no distortion.
- `contain` — shows the whole image inside the box, leaving empty space if ratios differ.

### background-size / background-position (for background images)

For images set via `background-image`, sizing is controlled with `background-size` (notably `cover` and `contain`) and placement with `background-position` (e.g. `center`). Conceptually similar to `object-fit`, but it applies to a box's background rather than an `<img>` element.

### Serving different files: srcset vs picture

Two HTML mechanisms let the browser choose among multiple image files:

- `srcset` (with `sizes`) on a plain `<img>` — you list the same image at several resolutions and let the browser pick the best match for the display. Use it when only the *resolution* should change: it saves bandwidth on small screens and stays sharp on large/high-DPI ones.
- `<picture>` with `<source media="...">` — you specify explicitly which file to use under which condition. Use it for **art direction**: e.g. a wide landscape crop on desktop but a tighter square crop on mobile where the wide version's subject would be unreadably small.

```html
<picture>
  <source media="(max-width: 600px)" srcset="hero-square.jpg">
  <img src="hero-wide.jpg" alt="…">
</picture>
```

## Common pitfalls

- Setting both width and height on an `<img>` and shipping a stretched image — add `object-fit: cover` (or `contain`) to preserve the aspect ratio.
- Mixing up the two tools: `object-fit` is for `<img>` elements, `background-size` is for CSS background images.
- Serving one huge image to every device — small screens pay the full download cost for pixels they can't show; use `srcset`.
- Using `srcset` when the composition itself needs to change between screen sizes — that's art direction, which is `<picture>`'s job.

## Objectives — can you explain these?

- [ ] Make images resize gracefully with CSS
- [ ] Serve different image files depending on screen size

## Self-test

- What's the main difference between `object-fit` and `background-size`?
- How do you give an `<img>` both a width and a height without distorting it?
- Why serve different images at different resolutions at all?
- When is `srcset` on an `<img>` enough, and when do you need `<picture>`?

## My notes

## Questions / to revisit
