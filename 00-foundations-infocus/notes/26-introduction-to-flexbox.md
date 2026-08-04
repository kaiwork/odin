# Introduction to Flexbox

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Flexbox |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Flexbox is a CSS layout mode for arranging items in a row or column and controlling how they share the available space. It's the workhorse of modern layout — most positioning problems you'll meet from now on (navbars, cards, centering things) are flexbox problems. The core idea is a parent "flex container" whose direct children become "flex items".

## Key concepts

### Containers and items

Turn any element into a **flex container** by setting:

```css
.container {
  display: flex;
}
```

Its **direct children** automatically become **flex items** and are laid out along a line (a row by default). Only direct children — grandchildren are unaffected unless their own parent is also made a flex container.

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

### Flexing

Flex items can grow to fill spare space and shrink when space runs out. The quickest demonstration:

```css
.item {
  flex: 1;
}
```

With `flex: 1` on every item, the items divide the container's space equally, and they re-distribute automatically when the window resizes — no media queries, no math.

### Nesting

An element can be a flex item *and* a flex container at the same time: a child of one flex layout can itself lay out its own children with `display: flex`. Complex UIs are built by nesting these layers — e.g. a page-level flex row containing a sidebar and a main area, where the main area is itself a flex column of cards.

### Why it matters

Before flexbox, side-by-side layout required floats or inline-block hacks. Flexbox handles alignment, ordering, spacing, and responsiveness declaratively. The next few lessons unpack its individual properties (`flex-grow`, `flex-shrink`, `flex-basis`, axes, alignment); this one is about seeing the container/item relationship clearly.

## Common pitfalls

- Expecting `display: flex` to affect *all* descendants — it only lays out direct children.
- Putting flex-item properties (like `flex: 1`) on the container, or container properties (like `display: flex`) on the items. Always ask: does this property belong to the parent or the child?
- Forgetting that a flex item can simultaneously be a container for its own children — nesting is normal, not a trick.
- Trying to memorize every flexbox property up front. It's a big API; learn the handful in these lessons and look the rest up as needed.

## Objectives — can you explain these?

- [ ] How to position elements on a page using flexbox
- [ ] What flex containers and flex items are and how they relate
- [ ] How flexbox enables real components and layouts, not just stacking or centering

## Self-test

- How do a flex container and a flex item differ?
- What makes an element become a flex item?

## My notes

## Questions / to revisit
