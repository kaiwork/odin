# CSS Units

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-css-units> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

CSS units split into absolute units, which always mean the same thing, and relative units, which resolve against something else (a font size, the viewport, a parent). Choosing between `px`, `rem`, `em`, `%`, `vh` and `vw` is not about memorizing rules — it is about deciding what you want a value to scale with.

## Key concepts

### Absolute units

- `px` is the only absolute unit worth using for screens. Other absolute units (`in`, `cm`, `pt`…) exist mainly for print.
- A `px` value never changes with context: `margin: 16px` is 16px regardless of the user's font settings.

### Relative units

- **`em`** — relative to the element's own font size (or, when used *on* `font-size` itself, the parent's font size). `4em` padding on an element with 16px font is 64px.
- **`rem`** — relative to the root (`<html>`) element's font size. More predictable than `em` because it does not compound through nesting. The usual recommendation for `font-size`.
- **`vh` / `vw`** — 1% of the viewport's height / width. Useful for full-screen heroes, overlays, and anything that should track the window size.
- **`%`** — relative to the parent element's corresponding dimension.

```css
html { font-size: 16px; }        /* 1rem = 16px */

.card {
  font-size: 1.25rem;            /* scales with user's root font size */
  padding: 1em;                  /* scales with the card's own font size */
  border: 2px solid #333;        /* fixed — borders rarely need to scale */
}

.hero {
  height: 100vh;                 /* fills the viewport */
}
```

### Why it matters: user preferences

Users can raise their browser's default font size for readability. `rem`-based font sizes respect that setting; `px`-based font sizes ignore it. That is the core argument for relative units on text.

### Choosing

Ask "what should this value grow or shrink with?" Text and text-driven spacing: `rem`/`em`. Viewport-driven sections: `vh`/`vw`. Things that should stay constant no matter what (borders, small fixed gaps, shadows): `px` is fine.

## Common pitfalls

- Setting `font-size` in `px` everywhere — it silently overrides the user's font-size preference.
- Nesting `em`-based font sizes — each level multiplies against its parent, and sizes drift in ways you did not intend. Prefer `rem` for `font-size`.
- Using `100vw` for width and getting a horizontal scrollbar — `vw` includes the space under a vertical scrollbar on some platforms.
- Treating "always use relative units" as dogma — fixed pixel values are the right call when an element genuinely should not scale.

## Objectives — can you explain these?

- [ ] The difference between relative and absolute units.
- [ ] Which unit fits which situation, and why.

## Self-test

- Why prefer `em` or `rem` over `px` for font sizes?
- When would `vh` and `vw` be the right tools?
- When is plain `px` the better choice over a relative unit?

## My notes

## Questions / to revisit
