# Alignment

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Flexbox |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-alignment> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Beyond growing and shrinking, flexbox can position items *within* the container: spread them out, pack them together, or center them. `justify-content` handles the main axis, `align-items` the cross axis, and `gap` adds consistent spacing between items. Together these three answer the eternal question of how to center a div.

## Key concepts

### justify-content — main axis

Set on the container; distributes items and spare space **along the main axis** (horizontal in a default `row` container):

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Useful values:

- `flex-start` (default) — packed at the start.
- `center` — packed in the middle.
- `space-between` — first and last items flush with the edges, equal gaps between.
- `space-around` — equal space on *both sides* of every item, so the gap between two items is double the gap at the container's edges.

### align-items — cross axis

Also on the container; positions items **along the cross axis** (vertical in a `row`):

```css
.container {
  display: flex;
  align-items: center;   /* vertically centers items in a row container */
}
```

Common values: `stretch` (default), `flex-start`, `center`, `flex-end`. To align one individual item differently from its siblings, use `align-self` on that item.

### Centering something completely

The classic combination — center a child both ways inside its parent:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### gap

Adds a fixed space between adjacent flex items (not at the container's outer edges), without fiddly per-item margins:

```css
.container {
  display: flex;
  gap: 16px;
}
```

### The axis caveat

These properties are defined relative to the axes, not the screen. Flip to `flex-direction: column` and `justify-content` becomes vertical distribution while `align-items` becomes horizontal — they swap orientations because the axes swapped.

## Common pitfalls

- Memorizing "justify = horizontal, align = vertical". True only for `row`; in a `column` it's reversed. Think main axis vs cross axis instead.
- Putting `justify-content`/`align-items` on the items — they're container properties (`align-self` is the per-item escape hatch).
- Confusing `space-between` with `space-around`: only `space-around` leaves space at the container's edges.
- Simulating `gap` with margins on every item, which adds unwanted space at the ends — `gap` only spaces *between* items.

## Objectives — can you explain these?

- [ ] How to align flex items both vertically and horizontally inside a container

## Self-test

- Which axis does `justify-content` work on, and which does `align-items` work on?
- Write the CSS that perfectly centers a div inside a flex container.
- How does the spacing produced by `space-between` differ from `space-around`?

## My notes

## Questions / to revisit
