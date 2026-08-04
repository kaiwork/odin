# How To Deal With Side Effects

| | |
|---|---|
| **Course** | React |
| **Section** | States And Effects |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-how-to-deal-with-side-effects> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A side effect is anything a component does that reaches outside the render itself — fetching data, setting timers, subscribing to events, touching the DOM directly. The `useEffect` hook runs such code *after* rendering, controlled by a dependency array, with an optional cleanup function. Most of the skill is knowing when you *don't* need an effect.

## Key concepts

### Anatomy of `useEffect`

```jsx
import { useEffect, useState } from "react";

function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id); // cleanup
  }, []); // dependency array

  return <p>{counter} seconds</p>;
}
```

Three parts:

1. **Callback** — the effect code, run after React has committed the render to the DOM.
2. **Dependency array** — controls when the callback re-runs:
   - omitted → after **every** render
   - `[]` → only after the first render (mount)
   - `[a, b]` → after mount and after any render where `a` or `b` changed
3. **Cleanup function** (returned from the callback) — React calls it before the effect runs again and when the component unmounts. Use it to clear intervals, abort requests, remove listeners.

### When to use an effect

The guiding question: **is this synchronizing the component with something outside React?** External systems — a server, a browser API, a subscription — yes, that's an effect. If the answer is no, an effect is probably the wrong tool.

### When NOT to use an effect

- **Deriving data from props/state** — compute it directly during render; no state, no effect needed.
- **Responding to a user action** — put the code in the event handler, not in an effect that watches state.
- **Resetting state when a prop changes** — give the component a `key` instead, and React remounts it fresh.
- **Sharing state between sibling components** — lift the state up to their common parent and pass it down as props, rather than mirroring it via effects.

## Common pitfalls

- Setting state unconditionally in an effect that also depends on that state (or has no dependency array) — infinite re-render loop.
- Forgetting the cleanup for intervals or listeners — duplicated timers and leaks after re-renders or unmount.
- Omitting values the effect uses from the dependency array — the effect runs with stale values.
- Using an effect to compute something derivable from existing state — extra renders and drift; compute it in the render body instead.

## Objectives — can you explain these?

- [ ] Explain what effects are in React.
- [ ] Use effects in a React app.
- [ ] Break down the parts of the `useEffect` hook.
- [ ] Judge when an effect is (and isn't) the right tool.

## Self-test

- What counts as an effect?
- What are the pieces of a `useEffect` call?
- What single question tells you whether you need an effect?
- What does "lifting state up" mean?

## My notes

## Questions / to revisit
