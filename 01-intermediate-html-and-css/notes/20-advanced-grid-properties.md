# Advanced Grid Properties

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Grid |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-grid-properties> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

This is where grid becomes genuinely responsive: `repeat()` to define many tracks at once, `fr` units to divide leftover space proportionally, `minmax()` and `clamp()` to bound track sizes, and `auto-fit`/`auto-fill` to let the browser decide how many columns fit. The combination `repeat(auto-fit, minmax(min, 1fr))` is the famous one-line responsive grid.

## Key concepts

### repeat()

```css
.grid {
  grid-template-columns: repeat(5, 150px);  /* = 150px ×5 */
}
```

Works in `grid-template-rows` too, and mixes with other values.

### Fractional units (fr)

`fr` distributes the container's *remaining* space as ratios — dynamic where `px` is static:

```css
.grid {
  grid-template-columns: repeat(2, 2fr) repeat(3, 1fr);
  /* two double-width columns, three single-width */
}
```

Tracks sized in `fr` grow and shrink with the container, though they will not shrink below the content's `min-content` size.

### min() and max()

The CSS-wide math functions apply to track sizing:

```css
.grid {
  grid-template-rows: repeat(2, min(200px, 50%));
  /* each row: whichever is smaller right now */
}
```

`min()` returns its smallest argument, `max()` its largest — evaluated live as the container resizes.

### minmax() — grid-only

Takes a fixed minimum and maximum and lets the track flex between them. Valid only in the grid track-sizing properties (`grid-template-columns/rows`, `grid-auto-columns/rows`):

```css
.grid {
  grid-template-columns: repeat(5, minmax(150px, 200px));
}
```

### clamp() — works anywhere

`clamp(min, ideal, max)` adds an *ideal* (usually dynamic) middle value:

```css
.grid {
  grid-template-columns: repeat(5, clamp(150px, 20%, 200px));
}
```

### auto-fit and auto-fill

Replace the repeat count with a keyword and the browser fits as many tracks as the container allows:

```css
.grid {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

Each column is at least 150px; leftover space is shared out by the `1fr`; shrink the container and columns drop and wrap — a responsive grid with no media queries. The difference between the keywords appears when there are fewer items than would fit: **auto-fit** collapses the empty tracks so real items stretch across the row, while **auto-fill** keeps the empty tracks reserved, leaving the items at their minimum-ish size.

## Common pitfalls

- Writing `minmax()` outside grid track properties — it is grid-specific; use `clamp()`/`min()`/`max()` elsewhere.
- Expecting `1fr` tracks to shrink to zero — content's minimum size wins; wrap in `minmax(0, 1fr)` when you truly need collapsible tracks.
- Confusing `auto-fit` with `auto-fill` — they behave identically until the row has spare capacity; then fit collapses empties and fill preserves them.
- Using percentages where `fr` is meant — percentages ignore `gap`, so `fr` sums stay clean where `%` sums overflow.

## Objectives — can you explain these?

- [ ] Creating repeated grid tracks concisely with `repeat()`.
- [ ] Sizing tracks with `fr` units instead of fixed values.
- [ ] Setting minimum, maximum, and ideal track-size boundaries.
- [ ] Using `auto-fit` / `auto-fill` for a dynamic number of tracks.
- [ ] Combining `auto-fit`/`auto-fill` with `minmax()` for responsive grids.

## Self-test

- How do you define many same-sized tracks without typing each one?
- What distinguishes a static size value from a dynamic one?
- How do you give a track a flexible share of remaining space?
- How do you split remaining space unevenly between tracks?
- Which CSS functions return the smallest or largest of their arguments?
- Which grid-only function takes a live-calculated minimum and maximum track size?
- Which global function takes a minimum, ideal, and maximum value?
- Which `repeat()` keyword fills in as many tracks as constraints allow?
- How do `auto-fit` and `auto-fill` differ?

## My notes

## Questions / to revisit
