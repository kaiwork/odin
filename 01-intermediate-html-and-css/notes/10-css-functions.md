# CSS Functions

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-css-functions> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

CSS has built-in functions — names followed by parenthesized arguments, like `rgb()` or `linear-gradient()` — and among the most useful are the four math functions: `calc()`, `min()`, `max()`, and `clamp()`. They compute values at render time, which makes layouts adapt to the viewport without media queries. You cannot define your own functions in plain CSS; you use the ones the language provides.

## Key concepts

### Anatomy of a CSS function

`function-name(argument, argument, …)` — used wherever a value goes. `rgb(0 42 255)` and `linear-gradient(to right, red, blue)` are functions you have likely already used.

### calc()

Does arithmetic (`+`, `-`, `*`, `/`) and — its superpower — mixes units:

```css
:root {
  --header: 3rem;
  --footer: 40px;
}
.main {
  height: calc(100vh - calc(var(--header) + var(--footer)));
}
```

It pairs naturally with custom properties and can nest.

### min()

Takes any number of comma-separated values and uses the *smallest* at any given moment:

```css
.image {
  width: min(150px, 100%);
  /* 150px when there's room; otherwise shrink to fit the container */
}
```

This effectively sets an upper bound while allowing responsiveness. You can do math inside the arguments without wrapping it in `calc()`.

### max()

The mirror image: uses the *largest* value, i.e. a lower bound:

```css
.sidebar {
  width: max(100px, 20%);
  /* never narrower than 100px, even if 20% would be smaller */
}
```

Useful for accessibility — guaranteeing minimum sizes when users zoom.

### clamp()

Takes exactly three arguments: a minimum, an ideal (usually viewport-relative), and a maximum:

```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

The value tracks the ideal but never leaves the min–max range — fluid typography and fluid element sizing in one line.

## Common pitfalls

- Writing `calc(100%-50px)` without spaces — `+` and `-` inside `calc()` require whitespace around them or the expression is invalid.
- Reading `min()` as a minimum size — it produces a *maximum* (it picks the smallest candidate). `max()` is what enforces a floor. This inversion trips everyone up.
- Getting `clamp()` argument order wrong — it is min, preferred, max, in that order.
- Reaching for media queries when one `clamp()` or `min()` would produce a smoother, continuously scaling result.

## Objectives — can you explain these?

- [ ] The basic parts of a CSS function (name + arguments).
- [ ] What `calc()`, `min()`, `max()`, and `clamp()` do and how to use each.

## Self-test

- Name the four CSS math functions covered.
- How are these math functions written into a declaration?
- How do CSS functions help make a site more responsive?

## My notes

## Questions / to revisit
