# Keyframes

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Animation |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-keyframes> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

CSS animations go beyond transitions: they can start on their own without a trigger, loop, run in reverse, and pass through as many intermediate states as you like. You configure them with the `animation-*` properties and describe the sequence itself in a `@keyframes` rule.

## Key concepts

### Animations vs transitions

- A transition needs a state change (hover, class toggle) and only interpolates between two states.
- An animation runs as soon as it applies (e.g. on page load), can repeat indefinitely, and can define any number of waypoints via keyframes.

Use a transition for simple A→B state changes; reach for an animation when you need looping, autonomy, or multi-step choreography.

### The animation sub-properties

```css
#ball {
  animation-name: change-color;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

- `animation-name` — points at a `@keyframes` rule.
- `animation-duration` — length of one cycle.
- `animation-iteration-count` — how many times it runs (`infinite` allowed).
- `animation-direction` — whether repeats play forward, backward, or `alternate` (bounce back instead of snapping to the start).

Shorthand:

```css
#ball {
  animation: 2s change-color infinite alternate;
}
```

### The @keyframes rule

```css
@keyframes change-color {
  from {
    background-color: red;
  }
  50% {
    width: 200px;
    background-color: blue;
  }
  to {
    background-color: green;
  }
}
```

- `from` and `to` are aliases for `0%` and `100%`.
- Any percentage in between adds a waypoint, and each keyframe can set multiple properties.
- The browser interpolates between consecutive keyframes automatically.
- Keyframe names are case-sensitive and shared globally in the stylesheet.

### Combining

The same `@keyframes` rule can be reused by many elements with different durations or directions, since timing lives on the element's `animation` declaration, not in the keyframes.

## Common pitfalls

- Mismatching the `animation-name` and the `@keyframes` identifier (typos, case) — the animation silently does nothing.
- Forgetting `animation-duration` — with a duration of `0s` (the default) nothing visibly animates.
- Expecting the element to keep its final keyframe styles after the animation ends — by default it snaps back to its base styles once finished.
- Using a heavyweight animation where a two-state transition would do; keep the tool matched to the job and prefer animating `transform`/`opacity` for smoothness.

## Objectives — can you explain these?

- [ ] Contrast CSS animations with CSS transitions
- [ ] Configure the animation sub-properties (name, duration, iteration count, direction)
- [ ] Build a multi-step sequence with a `@keyframes` rule

## Self-test

- Write the longhand animation properties and their shorthand equivalent.
- How do you attach keyframes to an animation and add intermediate steps?
- When is an animation the right choice over a transition, and the reverse?

## My notes

## Questions / to revisit
