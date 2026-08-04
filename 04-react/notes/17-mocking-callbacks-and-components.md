# Mocking Callbacks And Components

| | |
|---|---|
| **Course** | React |
| **Section** | React Testing |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-mocking-callbacks-and-components> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

To test a component in isolation you often need stand-ins for the things around it: the callback props a parent would pass in, and the child components it renders. Vitest's mock functions (`vi.fn()`) and module mocks (`vi.mock()`) let you verify that handlers fire when they should — and only when they should — without dragging the whole component tree into every test.

## Key concepts

### Mocking a callback handler

When a component receives a function as a prop, pass a mock and assert on how it was called:

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import CustomButton from "./CustomButton";

it("calls onClick when clicked", async () => {
  // Arrange
  const onClick = vi.fn();
  const user = userEvent.setup();
  render(<CustomButton onClick={onClick} />);

  // Act
  await user.click(screen.getByRole("button"));

  // Assert
  expect(onClick).toHaveBeenCalled();
});

it("does not call onClick before any interaction", () => {
  const onClick = vi.fn();
  render(<CustomButton onClick={onClick} />);

  expect(onClick).not.toHaveBeenCalled();
});
```

`vi.fn()` records every call (arguments, call count), which matchers like `toHaveBeenCalled()` and `toHaveBeenCalledWith()` inspect.

### Arrange–Act–Assert

Structure each test in three steps: set up the component and mocks (arrange), perform the interaction (act), check the outcome (assert). Prefer setting mocks up inside the test itself rather than in a shared `beforeEach` — each test then reads as a self-contained story.

### Mocking a child component

If a child is heavy, complex, or irrelevant to the behaviour under test, replace the whole module:

```jsx
vi.mock("./ComplexChild", () => ({
  default: () => <div data-testid="complex-child" />,
}));
```

The parent's tests can now confirm the child was rendered (via the test id) without executing any of the child's real logic. The child keeps its own dedicated tests.

## Common pitfalls

- Testing implementation details (state variable names, internal functions) instead of observable behaviour — mocks should stand in at the component's boundaries (props, rendered children), not reach inside it.
- Forgetting the negative case: asserting a handler fired is only half the story; also check it *doesn't* fire without the interaction.
- Over-mocking — if you mock every child and every callback, the test proves nothing about how the pieces work together.
- Hiding mock setup in `beforeEach` so individual tests no longer show what they depend on.

## Objectives — can you explain these?

- [ ] How to use mocks when testing React components

## Self-test

- How do you substitute a mock for a callback prop and verify it was invoked?
- How do you replace a child component with a lightweight mock in a test?

## My notes

## Questions / to revisit
