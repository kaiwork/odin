# Creating a Grid

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Grid |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Turn any element into a grid container with `display: grid`; its direct children become grid items automatically. You define column and row tracks with `grid-template-columns` / `grid-template-rows`, control what happens to overflow content via the implicit grid, and space everything out with `gap`.

## Key concepts

### Making a grid container

```css
.container {
  display: grid;        /* or inline-grid */
}
```

- Only *direct* children become grid items. A child's own children are not items of the outer grid — though any item can itself be made a grid container, and grids nest happily.

### Defining tracks (the explicit grid)

A track is the space between two grid lines — a column or a row.

```css
.container {
  display: grid;
  grid-template-columns: 50px 100px;   /* two columns */
  grid-template-rows: 75px 75px;       /* two rows */
}

/* shorthand: rows / columns */
.container-alt {
  display: grid;
  grid-template: 75px 75px / 50px 100px;
}
```

In the `grid-template` shorthand, row sizes come before the slash and column sizes after.

### The implicit grid

Add more items than the defined tracks can hold and grid quietly creates extra rows (by default) to fit them — implicit tracks. They do *not* copy your explicit sizes; control them with:

```css
.container {
  grid-auto-rows: 75px;       /* size for auto-created rows */
  /* grid-auto-flow: column;  make extra content create columns instead */
  /* grid-auto-columns: 75px; size those implicit columns */
}
```

### Gaps (gutters/alleys)

```css
.container {
  column-gap: 2rem;
  row-gap: 1rem;
  /* or: gap: 1rem 2rem;  row then column; one value sets both */
}
```

Gap sits only between tracks, never on the container's outer edge.

## Common pitfalls

- Expecting grandchildren to be grid items — only direct children participate; nest a second grid if deeper elements need grid placement.
- Assuming implicit rows will match the explicit row heights — they default to auto sizing; set `grid-auto-rows` if you want consistency.
- Reversing the `grid-template` shorthand — rows are before the slash, columns after.
- Using margins on items to fake gutters — `gap` is simpler and does not add space at the edges.

## Objectives — can you explain these?

- [ ] How to make a grid container.
- [ ] How to define grid tracks.
- [ ] The difference between the implicit and explicit grid.
- [ ] How to set gaps between grid cells.

## Self-test

- What makes an HTML element become a grid item?
- What is the space between grid lines called?
- How do you set the gutters (alleys) of a grid?
- What happens when there is more content than defined tracks?
- How would you size those automatically created tracks?

## My notes

## Questions / to revisit
