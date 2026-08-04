# Fetching Data In React

| | |
|---|---|
| **Course** | React |
| **Section** | The React Ecosystem |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-fetching-data-in-react> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Real apps display data from servers, and in React that means combining the `fetch` API with `useEffect` and `useState`. The pattern to internalise: fetch on mount, track three pieces of state (data, error, loading), throw on bad HTTP status codes so failures surface, and place requests high enough in the tree that they run in parallel instead of queueing behind each other.

## Key concepts

### Fetching on mount

A network request is a side effect, so it lives in `useEffect`. An empty dependency array runs it once when the component mounts:

```jsx
import { useEffect, useState } from "react";

function Image() {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        // fetch does NOT reject on 404/500 — check the status yourself
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setImageURL(json[0].url))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return <img src={imageURL} alt="placeholder" />;
}
```

### The three render states

Every data-fetching component has to answer: is the request still in flight (loading), did it fail (error), or did it succeed (data)? Render something sensible for each so the UI never shows a broken half-state.

### Extracting a custom hook

Once the fetch/state boilerplate repeats, pull it into a hook — a plain function whose name starts with `use`:

```jsx
function useImageURL() {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    /* fetch logic as above */
  }, []);
  return { imageURL, error, loading };
}
```

Components then consume `const { imageURL, error, loading } = useImageURL();` and stay focused on rendering.

### Avoiding request waterfalls

If a parent fetches, and only after its data arrives renders a child that *also* fetches, the requests run one after another — a waterfall. When the child's request doesn't depend on the parent's result, lift the child's fetch up into the parent (or a common ancestor) so both start immediately and run in parallel; pass the results down as props.

## Common pitfalls

- Expecting `fetch` to reject on HTTP errors — it only rejects on network failure. A 404 resolves normally; check `response.status` and throw manually.
- Omitting the `useEffect` dependency array, so the fetch re-runs after every render (and each `setState` triggers another render — an infinite request loop).
- Rendering data before it exists — without a loading state the first render sees `null` and can crash on property access.
- Nesting fetching components inside other fetching components when the requests are independent — you create waterfalls; lift the requests up.

## Objectives — can you explain these?

- [ ] How to make fetch requests inside React components
- [ ] How to catch and handle request errors
- [ ] How lifting requests up the component tree avoids waterfalls

## Self-test

- What is the standard way to request API data from a React component?
- Why do you need to throw errors yourself when using `fetch`?
- What causes waterfalling requests, and how do you prevent it?

## My notes

## Questions / to revisit
