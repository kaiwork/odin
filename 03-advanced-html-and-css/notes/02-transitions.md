# Transitions

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Animation |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-transitions> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A CSS transition animates the change between two states of an element instead of snapping instantly — think of a button that fades to a new colour on hover. You declare which property to animate, how long it takes, its speed curve, and any delay. The lesson also explains which properties can be animated at all and which ones are expensive to animate.

## Key concepts

### The transition properties

```css
button {
  background-color: white;
  transition-property: background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  transition-delay: 0.1s;
}

button:hover {
  background-color: black;
}
```

- `transition-property` — which CSS property should animate (or `all`).
- `transition-duration` — how long the change takes.
- `transition-timing-function` — the acceleration curve (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(...)`).
- `transition-delay` — how long to wait before starting.

### Shorthand

```css
button {
  transition: background-color 0.5s ease-out 0.1s;
}
```

Order in the shorthand: property, duration, timing function, delay. Multiple transitions can be comma-separated (`transition: opacity 0.3s, transform 0.3s;`).

### Triggers

A transition needs a state change to run: a pseudo-class such as `:hover` or `:focus`, or a class added/removed with JavaScript. It animates *between* a start and end state — it can't define intermediate steps (that's what keyframe animations are for).

### Animatable properties

Not every property can transition. Properties with interpolable values (lengths, colours, numbers) generally can; things like `display` or `font-family` generally cannot. Check a reference before relying on a property being animatable.

### Performance and the rendering pipeline

Changing some properties forces the browser to re-layout and repaint large parts of the page every frame. Animating `transform` and `opacity` is the safe path: they can be composited on the GPU without triggering layout. Be aware that these properties also create a new stacking context — a transitioned element may suddenly paint above or below overlapping content, and repaints of elements stacked with it get more expensive. Keeping the transitioned element high in the stacking order limits how much has to be repainted.

## Common pitfalls

- Writing the transition only on the `:hover` rule — the animation then runs on hover but snaps back on mouse-out. Declare `transition` on the element's base state.
- Using `transition: all ...` — it can animate properties you never intended and makes performance harder to reason about. Name the properties.
- Trying to transition to/from `height: auto` or `display: none` — these don't interpolate; use `max-height`, `opacity`/`visibility`, or a keyframe/JS approach.
- Animating layout properties (`width`, `margin`, `top`) when `transform` would achieve the same visual result far more cheaply.

## Objectives — can you explain these?

- [ ] Describe what a CSS transition is and the situations where one is appropriate
- [ ] Identify which CSS properties can be animated and which cannot
- [ ] Keep transitions smooth and cheap by choosing performant properties

## Self-test

- Can every CSS property be transitioned?
- Write out both the longhand properties and the shorthand form of a transition.
- What is a stacking context and how do transitions relate to it?
- Why should you watch out for repaints when animating?

## My notes

## Questions / to revisit
