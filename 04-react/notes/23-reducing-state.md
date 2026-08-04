# Reducing State

| | |
|---|---|
| **Course** | React |
| **Section** | More React Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-reducing-state> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

When a component's state updates multiply and start tangling into each other, scattered `useState` setters become hard to follow and debug. A reducer gathers all that update logic into one pure function: given the current state and an action describing *what happened*, it returns the next state. React's `useReducer` hook wires that function into a component.

## Key concepts

### What a reducer is

A pure function `(state, action) => newState`. The action is a plain object with a `type` string (and any extra data the update needs). No side effects, no mutation — return a new state object.

```js
function reducer(state, action) {
  switch (action.type) {
    case "incremented_count":
      return { ...state, count: state.count + 1 };
    case "decremented_count":
      return { ...state, count: state.count - 1 };
    case "set_count":
      return { ...state, count: action.value };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
```

### The `useReducer` hook

```jsx
import { useReducer } from "react";

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "incremented_count" })}>+</button>
      <button onClick={() => dispatch({ type: "decremented_count" })}>-</button>
      <button onClick={() => dispatch({ type: "set_count", value: 0 })}>
        Reset
      </button>
    </>
  );
}
```

- `useReducer(reducer, initialState)` returns the current state and a `dispatch` function.
- `dispatch(action)` hands the action to your reducer; the returned state applies on the next render. If the new state is the same by `Object.is`, React skips the re-render.

### When to use it

- Many related state updates, or updates that depend on each other.
- Event handlers cluttered with update logic — a reducer separates "what happened" (dispatched in the handler) from "how state changes" (the reducer).
- You want the update logic unit-testable on its own: a reducer is just a function, testable without rendering anything.

`useState` and `useReducer` are interchangeable — you can convert either way, and mixing both in one component is normal. Use whichever keeps the component readable.

### Migrating from `useState`

1. Replace direct set-state calls in handlers with `dispatch` calls describing the event.
2. Write the reducer that handles each action type and returns new state.
3. Swap `useState` for `useReducer(reducer, initialState)` in the component.

## Common pitfalls

- Mutating state inside the reducer (`state.count++`) instead of returning a fresh object — React may not detect the change, and the "pure function" guarantee is gone.
- Putting side effects (fetches, logging, timers) in the reducer — it must only compute the next state; effects belong elsewhere.
- Expecting state to be updated immediately after `dispatch` in the same handler — like `setState`, the new value arrives on the next render.
- Forgetting a `default` branch, so a mistyped action type silently returns `undefined` state; throwing on unknown types fails fast instead.

## Objectives — can you explain these?

- [ ] What reducers are
- [ ] When reducers are worth using
- [ ] How the `useReducer` hook works

## Self-test

- What is a reducer?
- How do you write one?
- What does the `dispatch` function do?
- What are the steps to convert a component from `useState` to `useReducer`?

## My notes

## Questions / to revisit
