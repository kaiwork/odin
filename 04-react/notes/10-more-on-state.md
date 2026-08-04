# More On State

| | |
|---|---|
| **Course** | React |
| **Section** | States And Effects |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-more-on-state> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Going deeper on state: why you must never mutate state objects, why state behaves like a snapshot frozen for the duration of a render, when to pass a callback to the setter instead of a value, and how controlled components put form inputs under React's control.

## Key concepts

### Treat state as immutable

For objects and arrays, always hand the setter a **new** object — usually built with spread syntax:

```jsx
const [person, setPerson] = useState({ name: "Ada", age: 36 });

// BAD — mutation; React sees the same reference, may not re-render
person.age = 37;
setPerson(person);

// GOOD — new object
setPerson({ ...person, age: 37 });
```

React compares the old and new values with `Object.is`; a mutated object is the *same* reference, so React can't tell anything changed. Nested objects need each modified level copied.

### State as a snapshot

Within one render, the state variable is a fixed value. Setter calls don't change it mid-execution — they schedule a re-render:

```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1); // schedules 0 + 1
  setCount(count + 1); // still sees count === 0, schedules 0 + 1 again
  console.log(count);  // still 0
}
// result after re-render: 1, not 2
```

### Value vs updater callback

Passing a callback makes React feed it the most recent pending state, so sequential updates compose:

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
// result: 2
```

Use the callback form whenever the new state depends on the previous state.

### Batching

React batches multiple setter calls in the same event handler into a single re-render, so several updates don't cause several redraws.

### How to structure state

Avoid redundant state: don't store a value that can be computed from existing state or props during render. Related values that change together can live in one object; unrelated values are cleaner as separate `useState` calls.

### Controlled components

Input elements keep their own internal state by default. A controlled component overrides that: React state is the single source of truth, wired through `value` and `onChange`:

```jsx
const [name, setName] = useState("");

<input value={name} onChange={(e) => setName(e.target.value)} />
```

This lets you validate, transform, or clear the input from code, because the displayed value always mirrors state.

## Common pitfalls

- Mutating an object or array in state then calling the setter with the same reference — React may skip the re-render. Always create a new object/array (spread, `map`, `filter`, `concat`).
- Calling `setCount(count + 1)` several times in one handler and expecting it to add more than once — each call read the same snapshot. Use `setCount(prev => prev + 1)`.
- Reading state right after setting it and wondering why it's stale — the variable belongs to the current render; the new value arrives next render.
- Storing derived data (e.g. `fullName` alongside `firstName`/`lastName`) in state — compute it during render instead, or the copies drift out of sync.

## Objectives — can you explain these?

- [ ] Decide how to structure state sensibly.
- [ ] Explain how state updates are applied.
- [ ] Explain what controlled components are and build one.

## Self-test

- What should you keep in mind when declaring state?
- Why must updates go through the setter rather than direct mutation?
- What does "state as a snapshot" mean?
- What's the difference between passing a value and passing a callback to a state setter?
- Why must you pass a new object (not a mutated one) when updating object state?
- Why would you want to make an input a controlled component?

## My notes

## Questions / to revisit
