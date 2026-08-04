# Positioning Grid Elements

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Grid |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-positioning-grid-elements> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Grid items don't have to fill cells in source order — you can place each one exactly, by naming the grid lines it starts and ends on, or by painting a picture of the layout with `grid-template-areas`. First you need the vocabulary straight: tracks, lines, cells, and areas are different things.

## Key concepts

### Vocabulary

- **Track** — a whole column or row.
- **Line** — the boundary between (and around) tracks. A 3-column grid has 4 vertical lines, numbered from 1. Lines are created implicitly when you define tracks; devtools can overlay the numbers.
- **Cell** — the intersection of one row track and one column track; the smallest unit of a grid.
- **Area** — a rectangle of one or more adjacent cells.

### Placing by line numbers

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;    /* spans columns 1–2, ending at line 3 */
  grid-row-start: 2;
  grid-row-end: 4;
}

/* shorthands: start / end */
.item-short {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
```

The values are grid *line* numbers, not track counts — `grid-column: 1 / 3` covers two tracks.

### grid-area

One property can combine all four values, in the order row-start / column-start / row-end / column-end:

```css
.item {
  grid-area: 2 / 1 / 4 / 3;
}
```

`grid-area` has a second life: assigning the item a *name* used by the container's template.

### grid-template-areas

The container can map the layout visually, one quoted string per row:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer  footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

A `.` in the template marks a deliberately empty cell. This reads like a diagram of the page, which makes rearranging layouts very quick.

## Common pitfalls

- Confusing lines with tracks — `grid-column: 2 / 3` is a single track (the second column), not "columns two through three".
- Mixing the two `grid-area` usages — line numbers and area names are different modes; a named area must appear in the container's `grid-template-areas`.
- Getting `grid-area`'s four-value order wrong — it is row-start, column-start, row-end, column-end.
- Defining `grid-template-areas` rows with different numbers of cells — every quoted string must describe the same number of columns, or the whole template is invalid.

## Objectives — can you explain these?

- [ ] The differences between tracks, lines, and cells.
- [ ] Positioning items by their start and end lines.
- [ ] The shorthand notations for placement.

## Self-test

- What is the difference between a track and a line?
- What is the smallest unit of a grid?
- What kind of value do `grid-column-start` / `grid-column-end` take?
- Which property combines all four start/end values for an item?
- Which container property lets you sketch the layout visually?

## My notes

## Questions / to revisit
