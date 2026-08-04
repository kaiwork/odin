# Using Flexbox and Grid

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Grid |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-using-flexbox-and-grid> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

There is no "flexbox vs grid" winner — the honest answer is "it depends on the design". A useful lens: flexbox suits *content-first* design, where the content's own size drives the layout; grid suits *layout-first* design, where you draw the structure and pour content into it. Real pages routinely use both, often nested.

## Key concepts

### Content-first → flexbox

- With flexbox, the items are in charge: they size to their content, then grow, shrink, and wrap according to the space available.
- Reach for it when you have a row or column of things — nav links, a button group, a media object — and you want the layout to *react* to whatever the content is.
- Its flexibility is logic-like: "keep these evenly spaced, let this one grow" rather than "put this exactly here".

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Layout-first → grid

- With grid, the container is in charge: you define row and column tracks up front and place content into that skeleton.
- Reach for it when the design has a fixed structure — a dashboard, a photo gallery, a page scaffold with header/sidebar/main/footer — especially when items must stay aligned in *both* dimensions.
- Grid can also do content-aware sizing (with `auto`, `minmax()`, `auto-fit`), so the boundary is soft, but its home turf is two-dimensional structure.

```css
.page {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

### Using both together

The standard composition: grid for the macro layout, flexbox inside individual grid items for micro layout.

```css
.layout { display: grid; grid-template-columns: 1fr 3fr; }
.card   { display: flex; flex-direction: column; justify-content: space-between; }
```

A grid item can be a flex container and vice versa — the modules nest without conflict.

### Rules of thumb

- One dimension, content decides sizes → flexbox.
- Two dimensions, alignment across rows *and* columns matters → grid.
- Complex page skeleton with independent inner arrangements → grid outside, flex inside.

## Common pitfalls

- Framing the choice as either/or for a whole project — mix them per component; that is how they were designed to be used.
- Forcing flexbox to keep multi-row items aligned into columns — that alignment requirement is the signal to switch to grid.
- Using grid for a simple content-driven row of variable-width items — flexbox gets there with less code and better content behaviour.

## Objectives — can you explain these?

- [ ] When flexbox is the better choice than grid.
- [ ] When grid is the better choice than flexbox.
- [ ] When and how to combine the two.

## Self-test

- In what situations would you pick flexbox over grid?
- In what situations would you pick grid over flexbox?
- When would you use both together, and how do they divide the work?

## My notes

## Questions / to revisit
