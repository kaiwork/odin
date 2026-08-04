# Refs And Memoization

| | |
|---|---|
| **Course** | React |
| **Section** | More React Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-refs-and-memoization> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Two escape hatches from React's normal render cycle. `useRef` gives you a mutable box that survives re-renders without causing them — the React-sanctioned way to touch DOM nodes or stash values. Memoization (`useMemo`, `useCallback`, `memo`) caches computed values, function references, and rendered output so unchanged work isn't redone; React Compiler is the build-time tool that increasingly applies this automatically.

## Key concepts

### `useRef`

Returns an object whose `.current` you can read and write freely. Changing it does **not** trigger a re-render, and the value persists across renders.

```jsx
import { useRef } from "react";

function SearchBox() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
```

Use cases: DOM access (focus, scroll, measure) and holding values across renders that shouldn't drive rendering (timer ids, previous values). Prefer it over `document.querySelector` — the ref is tied to *this component instance's* node, stays correct across re-renders, and keeps you inside React's model instead of querying the global document.

### `useMemo` — cache a computed value

```jsx
const total = useMemo(
  () => products.reduce((sum, p) => sum + p.price, 0),
  [products]
);
```

The callback re-runs only when a dependency changes; otherwise the cached result is returned. Worth it for genuinely expensive calculations, or to keep an object/array reference stable.

### `useCallback` — cache a function

```jsx
const handleAdd = useCallback((item) => {
  setCart((prev) => [...prev, item]);
}, []);
```

Functions are recreated on every render, so a child receiving one as a prop sees a "new" prop each time. `useCallback` returns the same function reference until dependencies change. It is essentially `useMemo` for functions, with tidier syntax.

### `memo` — skip re-rendering a component

By default a component re-renders whenever its parent does. Wrapping it with `memo` makes React compare props first and skip the render when they're unchanged:

```jsx
import { memo } from "react";
const ProductRow = memo(function ProductRow({ product, onAdd }) {
  /* ... */
});
```

Because the comparison is referential, `memo` on the child and `useCallback`/`useMemo` on the props it receives work as a team — one without the other often achieves nothing.

### React Compiler

A build-time tool that analyses components and inserts memoization automatically, shrinking the need for hand-written `useMemo`/`useCallback`. Knowing the manual APIs still matters for understanding what it does and for codebases that don't use it.

## Common pitfalls

- Storing render-driving data in a ref — updating `.current` doesn't re-render, so the UI goes stale; that data belongs in state.
- Memoizing everything by reflex — each memoization has its own bookkeeping cost; measure first and reserve it for expensive work or stable-reference needs.
- Wrapping a child in `memo` but passing it a fresh inline function or object each render — the props always differ referentially, so nothing is skipped.
- Wrong dependency arrays on `useMemo`/`useCallback` — missing deps serve stale values; needlessly broad deps defeat the caching.

## Objectives — can you explain these?

- [ ] What the `useRef` hook does and when to use it
- [ ] What memoization is and how `useMemo` and `useCallback` apply it
- [ ] How React Compiler memoizes automatically

## Self-test

- Why prefer `useRef` over DOM queries like `querySelector` for element access?
- How do `useMemo` and `useCallback` differ?
- In what way do `useMemo` and `useCallback` improve component performance?
- When is it actually worth memoizing a value?
- What is React Compiler and how does it optimize an app?

## My notes

## Questions / to revisit
