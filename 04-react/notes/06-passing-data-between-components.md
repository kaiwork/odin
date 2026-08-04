# Passing Data Between Components

| | |
|---|---|
| **Course** | React |
| **Section** | Getting Started With React |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Props are how a parent component hands data down to its children. Data in React flows one way — parent to child — which keeps components predictable and lets one generic component (say, a `Button`) be reused with different text, styles, and behavior instead of duplicating near-identical components.

## Key concepts

### Props are function arguments

Attributes written on a component in JSX arrive as a single object parameter:

```jsx
function Button(props) {
  return (
    <button style={{ fontSize: props.fontSize }}>{props.text}</button>
  );
}

// parent
<Button text="Save" fontSize={16} />
```

### Destructuring props

Destructuring in the parameter list is the common style — the prop names are visible at a glance:

```jsx
function Button({ text, color, fontSize }) {
  return <button style={{ color, fontSize }}>{text}</button>;
}
```

### Default values

Give a prop a fallback with a default parameter value, so callers only pass what they want to override:

```jsx
function Button({ text = "Click me!", color = "blue", fontSize = 12 }) {
  ...
}
```

(An older `defaultProps` static property exists too — mostly seen in class components and legacy code.)

### Functions as props

Handlers are passed down like any other value. Pass the function itself, don't call it:

```jsx
function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}

// parent
<Button text="Visit" handleClick={handleButtonClick} />
```

If the handler needs an argument, wrap it in an arrow function so it runs on click rather than during render:

```jsx
<Button handleClick={() => handleButtonClick("https://example.com")} />
```

### One-way data flow

Children cannot reach up and change a parent's data. If a child needs to trigger a change, the parent passes down a function for the child to call — data flows down, events flow up.

## Common pitfalls

- Calling the handler inline — `onClick={handleClick()}` runs it immediately on every render. Pass a reference (`onClick={handleClick}`) or wrap in an arrow function.
- Forgetting the braces on non-string props — `fontSize="12"` passes the string `"12"`; use `fontSize={12}` for a number.
- Mutating a prop inside the child — props are read-only inputs; if data needs to change, that's the owner's job (state, covered later).
- Copy-pasting near-identical components instead of extracting one component that takes props — the whole point of props is eliminating that duplication.

## Objectives — can you explain these?

- [ ] Pass data from one component to another.
- [ ] Use props to build reusable, customizable components.

## Self-test

- Which direction does data flow between React components — parent to child, child to parent, or both?
- What problem do props solve?
- How do you give a prop a default value, and why is that useful?
- How do you pass a function down as a prop (including one that needs arguments)?

## My notes

## Questions / to revisit
