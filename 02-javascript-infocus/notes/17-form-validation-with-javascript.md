# Form Validation with JavaScript

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | JavaScript in the Real World |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

HTML's built-in validation attributes only go so far: the browser's default error bubbles are generic and unstylable, and messages appear only on submit. The Constraint Validation API lets JavaScript inspect a field's validity, set custom error messages, and show feedback live as the user types — giving you full control over UX while keeping the declarative HTML constraints. Client-side validation improves usability but never replaces server-side checks.

## Key concepts

### Why validate on the client

Catching bad input before submission gives users immediate, specific feedback and saves a round trip. But client-side checks are trivially bypassed, so the server must validate everything again — client-side validation is a UX feature, not a security boundary.

### Two flavours of client-side validation

1. **Built-in HTML validation** — attributes like `required`, `type="email"`, `minlength`, `maxlength`, `pattern`. Zero JS, but limited control over messages and styling.
2. **JavaScript validation** — usually via the Constraint Validation API, which builds on those same attributes but hands control to your code.

### The Constraint Validation API

Key pieces available on form controls:

- `input.validity` — a `ValidityState` object with booleans such as `valueMissing`, `typeMismatch`, `patternMismatch`, `tooShort`, `tooLong`, and `valid`.
- `input.checkValidity()` — returns whether the field currently passes its constraints.
- `input.setCustomValidity("message")` — marks the field invalid with your own message; pass `""` to clear it.
- `input.reportValidity()` / `input.validationMessage` — surface the current message.

To take over rendering entirely, add `novalidate` to the form so the browser skips its default popups while the attributes still feed `validity`:

```html
<form novalidate>
  <label for="mail">Email:</label>
  <input type="email" id="mail" required />
  <span class="error" aria-live="polite"></span>
</form>
```

```js
const email = document.querySelector("#mail");
const error = document.querySelector(".error");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    error.textContent = "";
  } else if (email.validity.valueMissing) {
    error.textContent = "Please enter an email address.";
  } else if (email.validity.typeMismatch) {
    error.textContent = "That doesn't look like an email address.";
  }
});

email.form.addEventListener("submit", (e) => {
  if (!email.validity.valid) e.preventDefault();
});
```

### Styling validity states

CSS pseudo-classes target field state: `:valid`/`:invalid` apply immediately, while `:user-valid`/`:user-invalid` wait until the user has interacted with the field — usually the better experience, since a form shouldn't open covered in red.

```css
input:user-invalid {
  border: 2px solid red;
}
```

## Common pitfalls

- Treating client-side validation as security — anyone can bypass it; always re-validate on the server.
- Validating only on submit — checking on `input` (or `blur`) gives users feedback while they can still act on it.
- Setting a message with `setCustomValidity()` and never clearing it with an empty string, leaving the field permanently invalid.
- Styling with `:invalid` alone, which flags untouched fields as errors the moment the page loads — prefer `:user-invalid`.

## Objectives — can you explain these?

- [ ] Why validating HTML forms matters
- [ ] The Constraint Validation API
- [ ] Doing validation with JavaScript alone

## Self-test

- Why should forms be validated before the data reaches the server?
- What are the two kinds of client-side validation?
- How does the Constraint Validation API give you more control than built-in HTML validation?

## My notes

## Questions / to revisit
