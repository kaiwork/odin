# Managing State With The Context API

| | |
|---|---|
| **Course** | React |
| **Section** | More React Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-managing-state-with-the-context-api> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

When state lives near the top of the tree but is needed several levels down, you end up threading props through components that never use them — prop drilling. The Context API cuts the middlemen out: a provider high in the tree publishes a value, and any descendant reads it directly with `useContext`. It is convenient but not free — every consumer re-renders whenever the context value changes.

## Key concepts

### The problem: prop drilling

Intermediate components have to accept and forward props purely so a deep child can receive them. It bloats signatures, makes refactoring brittle, and obscures where data actually comes from.

### The three pieces of Context

```jsx
import { createContext, useContext, useState } from "react";

// 1. Create the context (default value is used only when
//    a component reads context with no provider above it)
export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

// 2. Provide a value somewhere high in the tree
function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => setCartItems((prev) => [...prev, item]);

  return (
    <ShopContext.Provider value={{ cartItems, addToCart }}>
      <Header />
      <ProductList />
    </ShopContext.Provider>
  );
}

// 3. Consume it anywhere below, at any depth — no props in between
function CartBadge() {
  const { cartItems } = useContext(ShopContext);
  return <span>{cartItems.length}</span>;
}
```

The components between `App` and `CartBadge` no longer know or care about the cart.

### Drawbacks

- **Re-render cost.** When the provider's `value` changes, *every* component consuming that context re-renders — even ones that only use an unrelated field of the value object.
- **Traceability.** Because any component can read context, following where data flows gets harder in a large tree; the explicitness of props is lost.

### Mitigations

- Split one big context into several focused ones so consumers only subscribe to what they use.
- Consider component composition (passing components as children/props) before reaching for context at all.
- For genuinely complex or hot state, dedicated libraries such as Zustand or Redux come with built-in render optimisations.

## Common pitfalls

- Relying on `createContext`'s default value and forgetting the provider — components silently get the default instead of live state.
- Stuffing all app state into a single mega-context, so every state change re-renders every consumer.
- Creating a fresh `value` object inline on every provider render without thought — a new reference means consumers see "changed" context each time.
- Using context for state only two components need — plain props or lifting state up is simpler and easier to trace.

## Objectives — can you explain these?

- [ ] How the Context API passes state and data deep into the component tree
- [ ] What using the Context API looks like in a real application
- [ ] The drawbacks that come with the Context API

## Self-test

- What problems does prop drilling cause?
- What options exist for avoiding prop drilling?
- What does the Context API buy you over passing props through many levels?
- What are the downsides of using the Context API?

## My notes

## Questions / to revisit
