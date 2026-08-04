# React Components

| | |
|---|---|
| **Course** | React |
| **Section** | Getting Started With React |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-react-components> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Components are the building blocks of every React app: independent, reusable chunks of UI. This lesson shows how to write a functional component (a plain JavaScript function that returns JSX), the naming rules React enforces, and how components are split into files and shared with `import`/`export`.

## Key concepts

### Breaking a UI into components

Any page can be decomposed into a tree of parts — e.g. an `App` containing a `Navbar`, a `MainArticle`, and a `NewsletterForm`. Each part becomes its own component, developed and reasoned about in isolation.

### Functional components

A functional component is just a function that returns markup:

```jsx
function Greeting() {
  return <h1>Hello, Odin!</h1>;
}

export default Greeting;
```

Two rules matter:

- **Capitalize the name.** `Greeting`, not `greeting`. In JSX, lowercase tags (`<div>`) are treated as built-in HTML elements; capitalized tags (`<Greeting />`) are treated as your components.
- **Return something renderable** — usually JSX.

### One component per file, shared via modules

Components typically live in their own files under `src/` and are wired together with ES modules:

```jsx
// App.jsx
import Greeting from "./Greeting";

function App() {
  return <Greeting />;
}

export default App;
```

- `export default` allows one default export per file, imported with any name.
- Named exports (`export function Foo() {...}`) are imported with braces: `import { Foo } from "./Foo"`.
- Since React 17's new JSX transform, you no longer need `import React from "react"` at the top of every file just to use JSX.

## Common pitfalls

- Naming a component in lowercase — React renders `<greeting />` as an unknown HTML tag instead of calling your function. Capitalize component names.
- Mixing up default and named imports — `import Greeting from ...` for a default export, `import { Greeting } from ...` for a named one. Wrong form gives `undefined`.
- Defining one component inside another component's body — define each component at the top level of a module, otherwise it is recreated on every render.

## Objectives — can you explain these?

- [ ] Describe what a React component is.
- [ ] Create a functional component from scratch.
- [ ] Explain where components live within a React project's file structure.

## Self-test

- What does the code for a React component actually look like?
- How do you write a functional component?
- How do you export a component from one file and import it in another?

## My notes

## Questions / to revisit
