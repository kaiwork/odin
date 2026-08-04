# Working with APIs

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Asynchronous JavaScript and APIs |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-working-with-apis> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

An API is an interface a server exposes so other programs can request its data — usually as JSON over HTTP. This lesson covers how frontend JavaScript talks to public APIs with `fetch`, how services gate access with API keys, and why the browser sometimes blocks your requests (CORS).

## Key concepts

### What an API is

A web API is a set of URL endpoints a server publishes. You send an HTTP request to an endpoint; it responds with structured data (almost always JSON) instead of an HTML page. Your code then digs into that JSON to get what it needs.

### Access and API keys

Most services don't serve data anonymously without limits. You register for an **API key** and include it with every request — often as a query-string parameter. Keys let the provider identify callers, apply rate limits, and bill heavy usage. Keep in mind that any key shipped in frontend code is visible to users.

### Fetching data

`fetch` is the modern replacement for `XMLHttpRequest`. It returns a promise that resolves to a `Response` object; call `.json()` on that (also async) to parse the body.

```js
const img = document.querySelector("img");

fetch("https://api.example.com/search?api_key=KEY&q=cats", { mode: "cors" })
  .then((response) => response.json())
  .then((data) => {
    // drill into the shape the API documents
    img.src = data.results[0].imageUrl;
  })
  .catch((err) => console.error(err));
```

The exact path through the JSON (`data.results[0].imageUrl` above) depends entirely on that API's documented response shape — log the response and explore it.

### CORS — why the browser blocks you

Browsers enforce the same-origin policy: scripts on one origin can't freely read responses from another. **Cross-Origin Resource Sharing (CORS)** is the mechanism servers use to opt in to cross-origin access. When fetching a third-party API from the browser, pass `{ mode: "cors" }` and rely on the server sending the right CORS headers; if it doesn't allow your origin, the browser blocks the response.

### Error handling

`.catch()` handles network-level failures, but `fetch` does **not** reject on HTTP error statuses like 404 or 500 — check `response.ok` or `response.status` yourself before parsing.

## Common pitfalls

- Expecting `fetch` to throw on a 404/500 — it only rejects on network failure. Check `response.ok` explicitly.
- Forgetting that `response.json()` is itself asynchronous and returns a promise — it needs its own `.then()` (or `await`).
- Guessing the JSON structure instead of reading the API docs or logging the response, then hitting `undefined` several properties deep.
- Committing an API key to a public repo — anyone can copy it; at minimum keep it out of version control.

## Objectives — can you explain these?

- [ ] What an API is
- [ ] How access to an API is typically granted and controlled (keys, rate limits)
- [ ] How to fetch data from an API and extract the values you need
- [ ] Why the browser might block your API request, and what CORS has to do with the fix

## Self-test

- In your own words, what is an API?
- What mechanisms do providers use to restrict access to their APIs?
- Walk through the code needed to fetch JSON from an API and pull a value out of the response.

## My notes

## Questions / to revisit
