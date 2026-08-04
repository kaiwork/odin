# Positioning

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-positioning> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

The `position` property decides how an element participates in page flow and what `top`/`right`/`bottom`/`left` mean for it. `static` is the default; `relative` nudges an element from its normal spot; `absolute` and `fixed` remove it from flow entirely; `sticky` switches between flowing and pinned as you scroll. Flexbox and grid remain the right tools for overall layout — positioning is for the exceptions.

## Key concepts

### static (default)

Every element starts as `position: static`. The offset properties (`top`, `right`, `bottom`, `left`) do nothing here.

### relative

The element stays in normal flow (its original space is preserved), but offsets shift its rendered position relative to where it would have been. Crucially, a relatively positioned element also becomes the reference point for absolutely positioned descendants.

### absolute

Removed from normal flow — other elements act as if it does not exist. It is positioned relative to its nearest *positioned* ancestor (any ancestor whose `position` is not `static`); if none exists, relative to the initial containing block. Ideal for modals, image captions, and icons layered over other content.

```css
.card { position: relative; }          /* anchor */
.badge {
  position: absolute;                  /* pinned to the card's corner */
  top: 8px;
  right: 8px;
}
```

### fixed

Also removed from flow, but anchored to the *viewport* — it stays put while the page scrolls. Classic uses: persistent navbars, floating chat buttons.

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

### sticky

A hybrid: the element scrolls normally until it reaches the offset you set, then pins there while its containing block is in view. Unlike fixed, it stays in normal flow. Common for section headings in long lists.

```css
.section-heading {
  position: sticky;
  top: 0;
}
```

## Common pitfalls

- Setting `position: absolute` and forgetting to give an ancestor `position: relative` — the element ends up positioned against the page instead of its intended container.
- Using absolute positioning to build whole layouts — it does not adapt to content or viewport changes; flexbox/grid handle that far better.
- Expecting `top: 20px` to work on a static element — offsets require a non-static `position`.
- Confusing `fixed` and `sticky` — fixed is always viewport-pinned; sticky only pins after you scroll to it, and releases when its parent scrolls away.

## Objectives — can you explain these?

- [ ] How absolute positioning works.
- [ ] How fixed positioning works.
- [ ] How sticky positioning works.
- [ ] How the position values differ and how to combine them.

## Self-test

- How do static and relative positioning differ?
- What kinds of UI is absolute positioning good for?
- What distinguishes fixed positioning from sticky positioning?

## My notes

## Questions / to revisit
