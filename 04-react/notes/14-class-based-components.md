# Class Based Components

| | |
|---|---|
| **Course** | React |
| **Section** | Class Components |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-class-based-components> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Before hooks, React components with state were written as classes. New code favors functions, but class components survive in countless existing codebases, so you need to read and write them: a class extending `React.Component`, props via `this.props`, state as `this.state` set in the constructor, updates via `this.setState`, and JSX returned from a `render()` method.

## Key concepts

### Basic shape

```jsx
import { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props); // required before using `this`
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- The class extends `Component`.
- The constructor takes `props` and must call `super(props)`; afterwards props are available anywhere as `this.props`.
- JSX is returned from the **`render()`** method — the class equivalent of a functional component's return value.

### State

State is one object, initialized in the constructor and updated only through `setState`:

```jsx
constructor(props) {
  super(props);
  this.state = { todos: [], inputVal: "" };
}

addTodo(todo) {
  this.setState((state) => ({
    todos: [...state.todos, todo],
    inputVal: "",
  }));
}
```

- Never mutate `this.state` directly — build new objects/arrays and pass them to `this.setState`.
- `setState` **merges** the object you pass into the existing state (unlike a `useState` setter, which replaces the value).

### Binding `this`

A method used as an event handler loses its `this` context unless you bind it:

```jsx
constructor(props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
}
```

Alternatively, define the method as an arrow function class field, which captures `this` automatically:

```jsx
handleSubmit = (e) => {
  e.preventDefault();
  // `this` is the component instance
};
```

### Reading class components

The lesson converts a functional todo list into a class: input handling (`onChange` updating `this.state.inputVal`), form submission, and rendering the todos with `map()` inside `render()`. Practice translating in both directions — much real-world work is migrating class components to functions.

## Common pitfalls

- Forgetting `super(props)` in the constructor — `this.props` is undefined inside the constructor and React errors on `this` access.
- Assigning to `this.state` outside the constructor — the UI won't update; go through `this.setState`.
- Passing an unbound method to `onClick`/`onSubmit` — `this` is undefined at call time; bind in the constructor or use an arrow class field.
- Assuming `setState` replaces the whole state object — it shallow-merges, which helps for sibling fields but does not deep-merge nested objects.

## Objectives — can you explain these?

- [ ] Write a component as a class.
- [ ] Use props and state inside a class component.
- [ ] Explain the roles of the `this` keyword in class components.

## Self-test

- How are props accessed and used in a class-based component?
- Where does the JSX of a class component come from?
- How do you initialize and update state in a class component?
- How do you make sure `this` refers to the component instance inside a method?

## My notes

## Questions / to revisit
