# Transforms

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Animation |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-transforms> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

The `transform` property lets you move, rotate, resize, and distort elements without disturbing the layout around them. Because transforms happen late in the browser's rendering pipeline (and can be handed off to the GPU), they are one of the cheapest ways to animate. This lesson covers the 2D functions, the 3D variants, and how to combine several transforms in one declaration.

## Key concepts

### The four main 2D function families

```css
.card {
  transform: rotate(45deg);          /* spin around a point */
  transform: scale(1.5);             /* grow/shrink; scaleX(), scaleY() */
  transform: skew(15deg);            /* slant; skewX(), skewY() */
  transform: translate(20px, -10px); /* move; translateX(), translateY() */
}
```

Each family also has axis-specific versions. `scale(2)` doubles both dimensions; `scaleY(0.5)` squashes only the vertical axis. Negative scale values flip the element.

### 3D transforms

Adding a third axis unlocks `rotateX()`, `rotateY()`, `rotateZ()`, `translateZ()`, `scaleZ()`, and the combined `rotate3d()`, `translate3d()`, `scale3d()` forms. To make depth visible you need `perspective()` — it defines how far the viewer sits from the z = 0 plane, so elements translated toward you look bigger and elements rotated away foreshorten.

```css
.flip {
  transform: perspective(600px) rotateY(180deg);
}
```

### Chaining

Multiple functions go in one `transform` value, separated by spaces. They apply in order, and order changes the result — translating then rotating is not the same as rotating then translating. When `perspective()` is part of the chain, it must come first.

```css
.badge {
  transform: translateX(40px) rotate(20deg) scale(1.1);
}
```

There are also `matrix()` / `matrix3d()` functions that can express any combination in one call, but hand-writing them is rare in practice.

### Why transforms are cheap

A transformed element keeps occupying its original spot in the document flow, so nothing else has to be re-laid-out. The visual change is applied at composition time, and the work can run on the GPU, which is why `transform` (with `opacity`) is the go-to property for smooth animation.

### Limitations

Transforms don't apply to non-replaced inline elements such as a bare `<span>` or `<b>` (give them `display: inline-block` or similar first), nor to table column elements like `<col>` and `<colgroup>`.

## Common pitfalls

- Expecting chained transforms to be order-independent — `rotate() translate()` moves along the rotated axes, giving a different result from `translate() rotate()`. Reorder deliberately.
- Putting `perspective()` after other functions in a chain and wondering why the 3D effect looks flat — declare it first.
- Applying `transform` to a plain inline element and seeing nothing happen — change its display type first.
- Animating `top`/`left`/`width` for movement effects when `translate()`/`scale()` would do the same job without triggering layout.

## Objectives — can you explain these?

- [ ] Use the 2D transform functions on an element
- [ ] Use the 3D transform functions, including perspective
- [ ] Chain several transform functions and predict the effect of their order
- [ ] Explain why `transform` performs better than layout-affecting properties

## Self-test

- Name the four main function families available on `transform`.
- Which function moves an element along the X, Y, or Z axis?
- Which function makes an element bigger or smaller along an axis?
- What extra function do 3D transforms need before depth becomes visible?

## My notes

## Questions / to revisit
