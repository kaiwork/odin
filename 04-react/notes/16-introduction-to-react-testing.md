# Introduction To React Testing

| | |
|---|---|
| **Course** | React |
| **Section** | React Testing |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-react-testing> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

UI code deserves tests just like plain logic does: they catch regressions when you refactor and document how a component is supposed to behave. This lesson sets up Vitest with React Testing Library (RTL), shows how to render a component in a simulated DOM, query what it produced, and simulate user interaction — plus a look at snapshot tests and their trade-offs.

## Key concepts

### The toolchain

- **Vitest** — the test runner (pairs naturally with Vite projects).
- **jsdom** — an in-memory DOM implementation so components can render outside a browser.
- **@testing-library/react** — renders components and gives you queries.
- **@testing-library/user-event** — simulates realistic user interactions.
- **@testing-library/jest-dom** — extra matchers like `toBeInTheDocument()`.

### Render, query, assert

```jsx
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders a heading", () => {
  render(<App />); // mounts the component into jsdom
  expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
});
```

`render` mounts the component tree; `screen` exposes queries against the whole document.

### Query variants

- `getBy...` — returns the element, throws if not found (most common).
- `queryBy...` — returns `null` if not found (assert something is *absent*).
- `findBy...` — async, waits for the element to appear.

Prefer `*ByRole` queries — they find elements the way assistive technology does, so passing tests also nudge you toward accessible markup.

### Simulating interaction

`userEvent` calls are asynchronous — set up, act, then assert:

```jsx
import userEvent from "@testing-library/user-event";

it("updates on click", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button"));

  expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
});
```

### Snapshot tests

A snapshot test serialises the rendered output and stores it; later runs fail if the output differs. Cheap to write and good at flagging *any* change — but they assert structure rather than intent, fail on harmless markup tweaks (false negatives), and pass as long as output matches even when the recorded output itself was wrong (false positives).

## Common pitfalls

- Forgetting to `await` `userEvent` calls — the assertion then runs before the interaction has happened and the test lies to you.
- Reaching for `getByTestId` or CSS-selector-style queries first — use `getByRole` where possible; test what users perceive, not implementation details.
- Using `getBy...` to assert absence — it throws when nothing matches; use `queryBy...` and expect `null`.
- Blindly pressing "update snapshot" whenever a snapshot test fails — that erases the very regression signal the test exists to give.

## Objectives — can you explain these?

- [ ] Why testing the UI is worthwhile
- [ ] How to set up a testing environment for a React project
- [ ] How to write tests against rendered UI elements
- [ ] What snapshot tests are and their trade-offs

## Self-test

- What do you gain from writing tests for your UI?
- Which packages does a React testing setup need?
- Why does the user-event package matter?
- What does RTL's `render` function actually do?
- Which query method should you reach for first, and why?
- How do you simulate and test a button click with `userEvent`?
- What makes snapshot tests attractive?
- What are the downsides of snapshot tests?

## My notes

## Questions / to revisit
