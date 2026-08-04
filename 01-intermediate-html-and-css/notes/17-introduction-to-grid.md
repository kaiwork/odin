# Introduction to Grid

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Grid |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-introduction-to-grid> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

CSS Grid is a layout module built for two dimensions — rows *and* columns at the same time — where flexbox thinks in one dimension along a single axis. The two are complements, not rivals: flexbox excels at flexible rows or columns of content, grid at structured layouts like card galleries and full-page scaffolding.

## Key concepts

### Where grid came from

Grid-style layout thinking predates the web module by decades — print designers laid out newspapers and magazines on grids. A CSS grid proposal appeared as early as 1996, but CSS Grid only landed across major browsers in 2017. It arrived partly because developers were bending flexbox (and before it, tables and floats) into two-dimensional shapes those tools were never designed for.

### Flexbox recap, and its 2-D workaround

- Flexbox lays items along one axis (main + cross), letting items grow, shrink, and wrap.
- With `flex-wrap: wrap`, a flex container can *look* two-dimensional — but each wrapped line sizes independently, so items in different rows do not line up into true columns without fiddly width math.

### What grid does differently

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* three equal columns */
  gap: 1rem;
}
```

- The parent defines a full track structure — rows and columns — and children slot into cells, staying aligned in both directions.
- Equal-sized items in a container are trivial in grid; in flexbox they take effort.
- Grid is also fine for one-dimensional layouts, which leaves room to grow if the design later needs a second dimension.

### Shared DNA

Both modules use a parent container whose direct children become items, and they share alignment concepts and properties. `gap`, once grid-only, now works in flexbox too.

### Choosing (preview)

Content-shaped, flexible, one-directional flows → flexbox. Layout-first designs with rows and columns that must stay aligned → grid. A later lesson digs into this decision properly.

## Common pitfalls

- Forcing flexbox to build a card grid with percentage widths and margin math — grid does it in two lines and keeps columns aligned.
- Treating grid as flexbox's replacement — they solve different problems and frequently appear together in one layout.
- Assuming `gap` is grid-only — it works in flex containers as well in modern browsers.

## Objectives — can you explain these?

- [ ] The basic differences between flexbox and grid.
- [ ] A situation where grid is the better choice than flexbox.

## Self-test

- How can flexbox be made to produce a two-dimensional layout, and what are the limits?
- What problem was CSS Grid created to solve?
- Which layout module makes equal-sized items in a container easiest?

## My notes

## Questions / to revisit
