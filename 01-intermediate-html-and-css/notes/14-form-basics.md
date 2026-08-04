# Form Basics

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Forms |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Forms are the front door for user data: text fields, dropdowns, radio buttons, checkboxes, and buttons, all wrapped in a `<form>` that says where the data goes and how. Getting the markup right — labels tied to inputs, `name` attributes on everything, sensible input types — matters for usability, accessibility, and whether the backend receives anything at all.

## Key concepts

### The form element

```html
<form action="/submit-url" method="post">
  <!-- controls go here -->
</form>
```

- `action` — the URL that receives the submission.
- `method` — `GET` (retrieve/search; data in the URL) or `POST` (change state; data in the request body).

### Inputs, labels, and names

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="you@example.com">
```

- `type` changes behaviour and mobile keyboards: `text`, `email`, `password`, `number`, `date`, `tel`, `search`…
- `<label for="…">` links to the input's `id` — clicking the label focuses the input, and screen readers announce it.
- `name` is the key the value is submitted under; an input without a `name` is simply omitted from the submission.
- `placeholder` shows hint text inside an empty field — guidance, not a label substitute.
- `<textarea rows="5" cols="30">` handles multi-line text (and is resizable by default).

### Selection controls

The three staples for predefined options:

```html
<select name="ship">
  <optgroup label="Fast">
    <option value="express" selected>Express</option>
  </optgroup>
  <option value="standard">Standard</option>
</select>

<input type="radio" name="size" id="s" value="small" checked>
<input type="radio" name="size" id="m" value="medium">

<input type="checkbox" name="extras" id="giftwrap" value="giftwrap">
```

- **Select dropdowns**: options carry `value`; `selected` pre-picks one; `<optgroup>` groups them.
- **Radio buttons**: sharing the same `name` makes them mutually exclusive — one choice per group.
- **Checkboxes**: independent on/off; several can be checked; `checked` sets a default.

### Buttons

```html
<button type="submit">Send</button>
<button type="reset">Clear</button>
<button type="button">Just a button</button>
```

Inside a form, a `<button>` defaults to `type="submit"` — set the type explicitly.

### Grouping and styling

- `<fieldset>` groups related controls; `<legend>` captions the group — especially important for radio/checkbox clusters.
- The two hardest styling problems: overriding each browser's distinct default form styles, and the controls that barely accept CSS at all (radio buttons, checkboxes, date pickers, dropdowns) — often solved by hiding the native control and drawing a replacement.

## Common pitfalls

- Omitting `name` and wondering why the backend never receives the field.
- Using `placeholder` as the only label — it vanishes on input and fails accessibility; always pair a real `<label>`.
- Radio buttons with mismatched `name` values — they stop being mutually exclusive.
- Relying on a button's default type inside a form — an unstyped `<button>` submits the form, causing surprise page reloads.

## Objectives — can you explain these?

- [ ] How to build forms with HTML.
- [ ] The basics of styling forms.

## Self-test

- What is the `<form>` element for, and which two attributes should it always have?
- What are form controls, broadly speaking?
- What is the `name` attribute for?
- Which three controls are most common for choosing among predefined options?
- What are the three button types in HTML?
- What are the two most difficult parts of styling forms?

## My notes

## Questions / to revisit
