# Rendering Techniques

| | |
|---|---|
| **Course** | React |
| **Section** | Getting Started With React |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-rendering-techniques> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Two everyday jobs in React: turning an array of data into a list of elements, and showing different UI depending on conditions. Both are done with plain JavaScript — `map()` for lists; ternaries, `&&`, and `if` statements for conditional rendering.

## Key concepts

### Rendering lists with `map()`

JSX renders arrays of elements directly, so transform data into elements with `map()`:

```jsx
function AnimalList({ animals }) {
  return (
    <ul>
      {animals.map((animal) => (
        <li key={animal.id}>{animal.name}</li>
      ))}
    </ul>
  );
}
```

- Each item needs a unique `key` prop (the next lesson covers why).
- You can map inline in the JSX or build the array in a variable first — both work.
- Lists compose with components: a `List` maps the data and renders a `ListItem` per entry, passing the item down as a prop.

### Conditional rendering

**Ternary** — choose between two outputs (use `null` to render nothing):

```jsx
{animals.length > 0 ? <ul>...</ul> : <p>No animals!</p>}
```

**Logical `&&`** — render only when a condition holds:

```jsx
{isLoggedIn && <p>Welcome back!</p>}
```

Careful: `&&` returns the left side when it's falsy, so a left-hand `0` gets rendered as a literal `0` on the page. Make the condition a real boolean (`animals.length > 0 && ...`, not `animals.length && ...`).

**`if` statements / guard clauses** — for anything more involved, return early before the main JSX:

```jsx
function List({ animals }) {
  if (!animals) return <p>Loading...</p>;
  if (animals.length === 0) return <p>There are no animals!</p>;
  return (
    <ul>
      {animals.map((a) => <li key={a.id}>{a.name}</li>)}
    </ul>
  );
}
```

Checking both "data exists" and "data has items" avoids rendering a blank or broken page while data is missing.

## Common pitfalls

- `count && <Thing />` rendering a stray `0` when `count` is zero — write `count > 0 && <Thing />` instead.
- Trying to put an `if` statement inside JSX braces — braces take expressions only; use a ternary inside JSX, or move the `if` above the `return`.
- Forgetting the `key` prop on mapped elements — React warns in the console and can misbehave when the list changes.
- Only handling the happy path — guard against `undefined` data and empty arrays before mapping.

## Objectives — can you explain these?

- [ ] Render a list of components from an array in JSX.
- [ ] Render UI conditionally.

## Self-test

- How do you render a list of elements or components from an array in JSX?
- What techniques can you use to render UI conditionally?
- How would you conditionally return entirely different JSX from a component?

## My notes

## Questions / to revisit
