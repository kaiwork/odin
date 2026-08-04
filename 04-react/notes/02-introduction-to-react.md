# Introduction To React

| | |
|---|---|
| **Course** | React |
| **Section** | Introduction |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-react> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

React is a JavaScript library for building user interfaces out of small, composable pieces called components. This lesson is a bird's-eye orientation: what React is, how a library differs from a framework, and why React is worth learning before the course dives into code.

## Key concepts

### Library, not framework

- A **library** is a collection of code you call from your own program — you stay in charge of the overall structure. A **framework** inverts that: it dictates the structure and calls your code at defined points.
- React itself is a UI library. People often call it a framework colloquially, and full frameworks (routing, data fetching, server rendering baked in) are built *on top* of it, but core React only handles rendering the UI.

### Component-based thinking

- A React app is a tree of components: self-contained pieces of UI (a button, a navbar, a whole page) that you write once and reuse anywhere.
- Instead of manually finding and mutating DOM nodes the way you did with vanilla JavaScript, you describe what the UI should look like for a given set of data, and React updates the real DOM to match.

### Why React specifically

- **Reusability** — components written for one part of an app (or one project) can be dropped into another.
- **Ecosystem and community** — React's popularity means abundant documentation, tooling, third-party packages, and answers to almost any question.
- **Unopinionated** — React does not force one way to handle routing, styling, or state management; you choose the pieces.
- **Approachable** — if you are comfortable with JavaScript fundamentals (functions, arrays, modules), the core ideas are within reach.

## Common pitfalls

- Treating React as magic rather than JavaScript — everything you learned about functions, arrays, and objects still applies and is used constantly.
- Assuming React replaces the need to understand the DOM — React manages DOM updates for you, but debugging still requires knowing what the DOM is doing.
- Conflating React with the frameworks built on it — core React is just the UI layer; routing and data fetching come from other tools.

## Objectives — can you explain these?

- [ ] Explain what React is and what problem it solves.

## Self-test

- What is React for?
- What advantages does React give you over building UIs by hand?

## My notes

## Questions / to revisit
