# Keys In React

| | |
|---|---|
| **Course** | React |
| **Section** | Getting Started With React |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-keys-in-react> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Keys are stable identifiers React attaches to list items so it can tell, between renders, which items were added, removed, reordered, or merely updated. Good keys let React re-render only what changed; bad keys (indices in dynamic lists, or keys regenerated every render) cause needless re-renders and state bugs.

## Key concepts

### Why React needs keys

When a list re-renders, React compares the new elements against the old ones. Without a stable identity per item, it cannot tell "item moved" apart from "item deleted and a new one appeared", so it may throw away and rebuild DOM (and component state) unnecessarily — or worse, associate state with the wrong item.

### Using keys

Put `key` on the element you return from `map()`:

```jsx
{todos.map((todo) => (
  <li key={todo.id}>{todo.task}</li>
))}
```

Keys must be unique among siblings (not globally). `key` is consumed by React itself — it is not passed through as a prop.

### Where key values should come from

- **Best: the data itself.** Records from a database usually carry a unique `id` — use it.
- **Generating your own data:** create an id *when the item is created*, e.g. with `crypto.randomUUID()`, and store it with the item:

  ```js
  const todos = [
    { task: "mow the yard", id: crypto.randomUUID() },
    { task: "feed the cat", id: crypto.randomUUID() },
  ];
  ```

- **Array index:** acceptable only for lists that never reorder, insert, or delete — e.g. a fixed set of tabs. If the list is dynamic, index keys shuffle identities when items move.

### The anti-pattern

Never mint keys during render:

```jsx
// BAD — new key every render defeats the purpose
<li key={crypto.randomUUID()}>{todo.task}</li>
```

A fresh key each render tells React every item is brand new, forcing full re-creation each time. Generate ids alongside the data, not inside `map()`.

### Keys and state

A component's key is part of its identity. Give a component a different key and React unmounts the old instance and mounts a fresh one — resetting its state. This is occasionally used deliberately (e.g. reset a form or game by changing its key).

## Common pitfalls

- Using the array index as key in a list that gets sorted, filtered, or has items inserted/removed — item state and DOM get mismatched. Use a stable id.
- Calling `Math.random()` or `crypto.randomUUID()` inside the render/map — keys change every render, so nothing is reused.
- Assuming keys must be globally unique — they only need to be unique among siblings in the same list.
- Trying to read `props.key` inside the child — React reserves `key`; pass the id under another prop name if the child needs it.

## Objectives — can you explain these?

- [ ] Explain what keys are and how React uses them.
- [ ] Distinguish good from bad key usage in a React app.

## Self-test

- Why does React need keys at all?
- Why are keys required when rendering lists specifically?
- How do you attach a key to an element?
- Where should key values ideally come from?
- When is it acceptable to use the array index as a key?
- What is the key-related anti-pattern to avoid during rendering?
- How do keys interact with component state?

## My notes

## Questions / to revisit
