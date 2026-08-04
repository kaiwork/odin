# Views

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-views> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Instead of shipping a JavaScript bundle that builds the page in the browser (an SPA), the server can generate the HTML itself using a template engine. This lesson sets up EJS in Express: templates that mix HTML with embedded JavaScript, rendered per-request with `res.render()` and filled with data from the controller.

## Key concepts

### Setup

```bash
npm install ejs
```

```js
const path = require("node:path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
```

Templates live as `.ejs` files in the `views` folder.

### EJS tags

- `<% ... %>` — run JavaScript (conditionals, loops); outputs nothing.
- `<%= value %>` — output the value, HTML-escaped. Use for user-supplied data.
- `<%- value %>` — output raw, unescaped HTML. Only for trusted content, e.g. includes.

```html
<ul>
  <% users.forEach((user) => { %>
    <li><%= user.name %></li>
  <% }); %>
</ul>
```

### Rendering from a controller

```js
app.get("/", (req, res) => {
  res.render("index", { title: "Home", users });
});
```

The second argument's properties become variables available inside the template (via the `locals` object). Views can be organised in subdirectories and referenced by relative path, e.g. `res.render("users/show")`.

### Reusable partials

Templates can embed other templates with `include`, typically via the raw-output tag so the partial's HTML is not escaped:

```html
<%- include("partials/navbar", { links: links }) %>
```

This is how shared headers, footers and navbars avoid duplication.

### Static assets

Templates reference CSS/client-side JS as normal `<link>`/`<script>` tags; serve those files with the static middleware:

```js
app.use(express.static(path.join(__dirname, "public")));
```

## Common pitfalls

- Using `<%- %>` for user input — it skips HTML escaping and opens the door to XSS. Default to `<%= %>`.
- Referencing a variable the controller never passed — EJS throws because the local is undefined; pass every variable the template uses (or guard with `locals.varName`).
- Broken stylesheets after adding views — forgetting `express.static()`, so the browser's requests for `/styles.css` have no handler.

## Objectives — can you explain these?

- [ ] How to install and configure EJS in an Express project
- [ ] How to write and render EJS templates

## Self-test

- What do server-side template engines do that client-rendered SPAs do differently?
- How do you wire EJS into an Express app?
- What is the difference between the `<%` and `<%=` tags?
- How does a controller render a view and pass it data?
- How do you reuse one template inside another?

## My notes

## Questions / to revisit
