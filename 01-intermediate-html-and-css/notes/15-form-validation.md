# Form Validation

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Forms |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-validation> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Validations are rules a form enforces on user input — "this field is required", "passwords need 8+ characters" — catching bad data before it is submitted. HTML provides a set of built-in validation attributes that need zero JavaScript, plus CSS pseudo-classes for styling the valid/invalid states. Client-side validation improves the experience but never replaces server-side checks.

## Key concepts

### required

```html
<input type="email" name="email" required>
```

Blocks submission until the field is filled. Mark required fields visibly (the convention is an asterisk) so users are not surprised.

### Text length: minlength / maxlength

```html
<textarea name="msg" minlength="3" maxlength="100"></textarea>
```

Enforce a floor and ceiling on character count; both can sit on the same control, and they combine freely with `required` and others.

### Numeric range: min / max

```html
<input type="number" name="quantity" min="1" max="10">
```

Bounds the accepted value for number-like inputs (numbers, dates, times).

### Pattern matching

```html
<input type="text" name="zip"
       pattern="(\d{5}([\-]\d{4})?)"
       title="Please enter a valid US zip code"
       placeholder="e.g. 65251">
```

`pattern` validates the value against a regular expression — postcodes, card numbers, and other structured strings. Pair it with a `placeholder` and/or `title` so users know the expected format. `pattern` only applies to `<input>` (notably `type="text"`); the `email` and `url` input types carry their own built-in format checks.

### Styling validation states

```css
input:user-valid   { border-color: green; }
input:user-invalid { border-color: red; }
```

`:user-valid` / `:user-invalid` apply only after the user has interacted with the field — unlike the older `:valid` / `:invalid`, which can flag a form red before the user has typed anything.

### The limits of built-in validation

Complex rules (matching password fields, cross-field logic, custom messages) need the JavaScript Constraint Validation API — a later topic. And regardless of what the client checks, the server must validate everything again: client-side checks can be bypassed entirely.

## Common pitfalls

- Treating client-side validation as security — anyone can bypass it; always re-validate on the server.
- Styling with `:invalid` instead of `:user-invalid` — untouched required fields show as errors on page load, which reads as shouting at the user.
- Writing an unreadable `pattern` with no `title`/`placeholder` hint — users fail validation with no idea what format was expected.
- Forgetting that `pattern` will not work on `<textarea>` — it is an `<input>` attribute.

## Objectives — can you explain these?

- [ ] What form validations are.
- [ ] The basic built-in HTML validation attributes.
- [ ] How to build custom validations (and where HTML's built-ins stop).

## Self-test

- What does the `required` attribute enforce?
- Which attributes constrain text length?
- How do you bound numeric input between a minimum and maximum?
- What is the `pattern` attribute useful for?
- Which CSS pseudo-classes style valid and invalid inputs?

## My notes

## Questions / to revisit
