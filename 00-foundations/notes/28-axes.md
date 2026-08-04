# Axes

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Flexbox |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-axes> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Every flex container has two axes: the main axis (the direction items are laid out in) and the cross axis (perpendicular to it). `flex-direction` chooses which way the main axis points, flipping the container between rows and columns — and with it, the meaning of every size and alignment property. Most flexbox confusion is really axis confusion.

## Key concepts

### Main axis and cross axis

- **Main axis**: the direction flex items flow. Growing, shrinking, and `flex-basis` all operate along this axis.
- **Cross axis**: perpendicular to the main axis.

### flex-direction

Set on the **container**:

```css
.container {
  display: flex;
  flex-direction: column;   /* default is row */
}
```

- `row` (default): main axis runs horizontally; items sit side by side, left to right.
- `column`: main axis runs vertically; items stack top to bottom.

(`row-reverse` and `column-reverse` exist too, flipping the direction of flow.)

### Why the axis changes everything

`flex-basis` (and the `flex` shorthand) size items **along the main axis**:

- In a `row` container, `flex-basis` refers to the item's **width**.
- In a `column` container, `flex-basis` refers to the item's **height**.

Same property, different dimension — because the property is defined relative to the main axis, not to the screen.

A practical consequence: in a column layout, `flex: 1` (basis `0`) can collapse items that have a `height` set, because the basis overrides the height as the starting size. Using `flex-basis: auto` (or `flex: auto`, or `flex: 1 1 auto`) makes the item fall back to its declared height.

```css
.container {
  display: flex;
  flex-direction: column;
}

.item {
  flex: 1 1 auto;   /* respects the item's height as its basis */
  height: 80px;
}
```

Columns also behave a little differently around growth: a column container doesn't grow items horizontally, and unless the container itself has a height, there may be no free vertical space to distribute.

## Common pitfalls

- Thinking of `flex-basis` as "width". It's "size along the main axis" — width in rows, height in columns.
- Switching to `flex-direction: column` and expecting `flex: 1` behaviour to carry over unchanged; items with fixed heights may vanish because the default basis of `0` overrides them.
- Forgetting the container needs a height for vertical space distribution to mean anything in a column layout.
- Setting `flex-direction` on the items instead of the container — direction is a container property.

## Objectives — can you explain these?

- [ ] The two axes of a flex container and how they relate
- [ ] How to switch the axes so content flows in columns rather than rows

## Self-test

- Which declaration makes flex items stack vertically instead of sitting in a row?
- In a `column` container, which dimension does `flex-basis` control?
- In a `row` container, which dimension does `flex-basis` control?
- Why aren't the answers to the previous two questions the same?

## My notes

## Questions / to revisit
