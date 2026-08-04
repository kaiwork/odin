# Forms and Data Handling

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-forms-and-data-handling> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Forms are the main way users send data to your server, and user data can never be trusted. This lesson covers how HTML forms map to Express routes, and how to validate and sanitize incoming data with `express-validator` so bad input is rejected and dangerous input is neutralised before it can do harm.

## Key concepts

### Form anatomy

```html
<form action="/users/create" method="POST">
  <input type="text" name="firstName" required>
  <button type="submit">Create</button>
</form>
```

- `action` — the URL the data is submitted to.
- `method` — the HTTP verb, usually `POST` for anything that changes data.
- Each input's `name` attribute becomes the field's key on the server.

To read POSTed form bodies in Express, enable the urlencoded body parser: `app.use(express.urlencoded({ extended: true }));` — the fields then appear on `req.body`.

### Validation vs sanitization

- **Validation** checks that input meets your rules (present, right length, valid email) and rejects it otherwise.
- **Sanitization** transforms input into a safe/normalised form (trimming whitespace, escaping HTML characters).

### express-validator

```bash
npm install express-validator
```

```js
const { body, validationResult } = require("express-validator");

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha().withMessage("First name must only contain letters.")
    .isLength({ min: 1, max: 10 }).withMessage("First name must be 1-10 characters."),
  body("email").trim().isEmail().withMessage("Must be a valid email."),
];

app.post("/users/create", validateUser, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("createUser", { errors: errors.array() });
  }
  // save and redirect...
});
```

`body("field")` starts a validation chain for one field; validators and sanitizers chain, each with an optional `.withMessage()`. `validationResult(req)` collects the outcomes in the controller.

### Escaping and XSS

If user input is ever rendered back into HTML unescaped, an attacker can submit markup or scripts that run in other users' browsers (XSS). Escape at output time — in EJS that means `<%= %>` rather than `<%- %>`. Prefer escaping/sanitizing where data is *used*, since over-eager sanitizing on input can mangle legitimate data before storage.

### Post/Redirect/Get

After a successful POST, respond with a redirect to a GET page rather than rendering directly. Refreshing then re-runs the harmless GET instead of resubmitting the form.

## Common pitfalls

- Relying on client-side validation (`required`, input types) alone — anyone can bypass the browser and POST directly; the server must validate too.
- Forgetting `express.urlencoded()` — `req.body` is undefined and the form data seems to vanish.
- Rendering user input with the unescaped tag — an XSS hole; escape by default.
- Rendering the success page straight from the POST handler — a refresh resubmits the form; redirect instead.

## Objectives — can you explain these?

- [ ] How HTML form elements work and where their data goes
- [ ] How to validate and sanitize input with `express-validator`
- [ ] Good practices for form design and keeping data trustworthy

## Self-test

- Which attributes does a `<form>` take and what does each control?
- How do you add express-validator to a project and pull in what you need?
- How do you validate and sanitize a form field with express-validator?
- How is validation different from sanitization?
- How do you surface validation errors from an Express route?
- Why does escaping HTML characters in form data matter?

## My notes

## Questions / to revisit
