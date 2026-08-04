# Introduction To State

| | |
|---|---|
| **Course** | React |
| **Section** | States And Effects |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-state> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

State is a component's memory — data that persists between renders and, when changed, makes React redraw the UI. The `useState` hook gives a functional component a state variable plus a setter function; calling the setter triggers a re-render with the new value.

## Key concepts

### The `useState` hook

```jsx
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <p>Selected: {color}</p>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
    </div>
  );
}
```

- `useState(initialValue)` returns a two-element array: the current value and a setter. Array destructuring gives them convenient names (`[thing, setThing]` by convention).
- The initial value is only used on the very first render; on later renders `useState` returns whatever the state currently is.
- Never assign to the state variable directly — only the setter tells React something changed.

### What happens when state changes

Calling the setter tells React to re-render the component: the whole function runs again from the top with the new state value. React builds a new virtual DOM tree, diffs it against the previous one (reconciliation), and applies only the minimal changes to the real DOM. Local variables inside the function are recreated each render; state survives because React stores it outside the function.

### Rules of hooks

- Call hooks only at the **top level** of a component (or a custom hook) — never inside loops, conditions, or nested functions. React relies on hooks being called in the same order every render.
- Call hooks only from React function components or custom hooks, not from arbitrary JavaScript functions.

## Common pitfalls

- Mutating the state variable directly (`color = "blue"`) — nothing re-renders; React only reacts to the setter.
- Expecting the state variable to hold the new value immediately after calling the setter — the update applies on the *next* render, so code right after `setColor("blue")` still sees the old `color`.
- Calling a hook inside an `if` or a loop — breaks the call-order guarantee and produces bugs or errors.
- Reaching for the DOM (`querySelector`, manual class toggling) to change what's on screen — in React, change state and let the render reflect it.

## Objectives — can you explain these?

- [ ] Explain what state is in React.
- [ ] Use state in a component via `useState`.
- [ ] Describe what React does when a component's state changes.

## Self-test

- What is state?
- What does the `useState` hook give you, and how do you use it?
- What happens to a component when one of its state values changes?
- What rules govern where hooks may be called?

## My notes

## Questions / to revisit
