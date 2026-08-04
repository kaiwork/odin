# Component Lifecycle Methods

| | |
|---|---|
| **Course** | React |
| **Section** | Class Components |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-component-lifecycle-methods> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Class components move through three phases — mounting, updating, and unmounting — and expose lifecycle methods that let you run code at each phase. Modern React does the same job with hooks, but you will still meet lifecycle methods in older codebases, and understanding them makes `useEffect` far less mysterious.

## Key concepts

### The three phases

- **Mount** — the component is created and inserted into the DOM.
- **Update** — props or state change and the component re-renders.
- **Unmount** — the component is removed from the DOM.

### The methods

```js
class Clock extends React.Component {
  render() {
    // The ONLY required method. Runs on mount and every update.
    // Must be pure: no side effects, no setState here.
    return <p>{this.state?.time}</p>;
  }

  componentDidMount() {
    // Runs once, after the component is in the DOM.
    // Good place for initial data fetching, subscriptions, timers.
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // Runs after every re-render (but not the initial one).
    // Compare against prevProps/prevState before setting state,
    // otherwise you create an infinite render loop.
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser(this.props.userId);
    }
  }

  componentWillUnmount() {
    // Runs just before removal. Clean up whatever you started:
    // timers, subscriptions, in-flight requests.
    clearInterval(this.timerId);
  }
}
```

### How `useEffect` maps onto these

One hook covers all three, controlled by its dependency array and return value:

```js
useEffect(() => {
  // empty deps []        -> like componentDidMount (runs once)
  // deps [a, b]          -> runs on mount AND whenever a or b change
  // no array at all      -> runs after every render
  return () => {
    // cleanup function   -> like componentWillUnmount
    //                       (also runs before each re-run of the effect)
  };
}, []);
```

## Common pitfalls

- Calling `setState` unconditionally inside `componentDidUpdate` — every update triggers another update. Always guard with a comparison against `prevProps`/`prevState`.
- Putting side effects (fetches, subscriptions) in `render` — it must stay pure; use `componentDidMount`/`componentDidUpdate` instead.
- Forgetting `componentWillUnmount` cleanup, so timers or subscriptions keep firing on a component that no longer exists.
- Assuming `useEffect` with an empty array is *exactly* `componentDidMount` — close, but the effect model differs (e.g. cleanup also runs between re-runs), so translate the intent, not the method name.

## Objectives — can you explain these?

- [ ] How to use the lifecycle methods available in a class component

## Self-test

- Which lifecycle method is the only one a class component must define?
- Which lifecycle method is the right place for an initial data fetch?
- Which method runs when the DOM or state has just changed and you want to react to it?
- Where do cleanup actions (clearing timers, cancelling requests) belong?
- In what way does `useEffect` fold several lifecycle methods into one hook?

## My notes

## Questions / to revisit
