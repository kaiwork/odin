# Growing and Shrinking

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Flexbox |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-growing-and-shrinking> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

`flex: 1` is actually shorthand for three separate properties — `flex-grow`, `flex-shrink`, and `flex-basis` — which together control how a flex item sizes itself when there's extra space or not enough. Understanding the three individually is what turns flexbox from magic into a tool you can predict.

## Key concepts

### The shorthand

```css
.item {
  flex: 1;
  /* expands to: flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
}
```

The order in the shorthand is `flex: <grow> <shrink> <basis>`. Another important preset: `flex: auto` means `flex-grow: 1; flex-shrink: 1; flex-basis: auto;`.

### flex-grow

A growth *factor*: how much of the container's leftover space this item takes relative to its siblings. All items at `flex-grow: 1` share spare space equally; give one item `flex-grow: 2` (e.g. `flex: 2 1 0`) and it receives twice the share of the extra space.

```css
.item { flex: 1; }
.item.middle { flex: 2; }   /* grows twice as much as the others */
```

### flex-shrink

The mirror image: how much an item gives up when the items' combined size exceeds the container. Default is `1` (everyone shrinks evenly). Set `flex-shrink: 0` to forbid an item from shrinking below its basis/width:

```css
.sidebar {
  flex-shrink: 0;   /* keeps its declared width even when space is tight */
  width: 250px;
}
```

Note: `flex-grow` and `flex-shrink` only kick in when there is surplus or deficit space respectively — and when shrinking applies, a declared `width` may not be respected.

### flex-basis

The item's *starting* size along the main axis, before grow/shrink adjustments:

- `flex-basis: auto` — "use my `width` (in a row) as the starting point."
- `flex-basis: 0` — "ignore my intrinsic size; treat me as starting from nothing," so space is divided purely by grow factors.

This explains a classic gotcha: `flex: 1` sets basis to `0`, so any `width` on the item is effectively ignored for space distribution, whereas `flex: auto` (basis `auto`) respects it.

## Common pitfalls

- Setting a `width` on an item with `flex: 1` and wondering why it's ignored — `flex: 1` zeroes the basis. Use `flex: auto` or an explicit `flex-basis` if the width should count.
- Assuming `flex: 2` makes an item exactly twice as wide as its siblings — the factor applies to the *spare space*, not the final size (they coincide only when basis is 0).
- Forgetting that shrink defaults to `1`: items will compress below their declared widths in a tight container unless you set `flex-shrink: 0`.
- Writing the shorthand values in the wrong order — it's grow, shrink, basis.

## Objectives — can you explain these?

- [ ] The three properties bundled into the `flex` shorthand, and how each one works on its own

## Self-test

- In `flex: 1 1 auto`, what property does each of the three values set?
- What do grow, shrink, and basis each equal when you write `flex: auto`?

## My notes

## Questions / to revisit
