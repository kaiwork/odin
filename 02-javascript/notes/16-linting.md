# Linting

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | JavaScript in the Real World |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-linting> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Consistent style makes code easier to read and maintain, and tooling can enforce it automatically. A linter (ESLint) analyses your code for rule violations and likely bugs; a formatter (Prettier) rewrites the layout — spacing, quotes, line breaks — so you never argue about it. Both are installed per-project as dev dependencies, usually with editor extensions for instant feedback.

## Key concepts

### Style guides

A style guide is an agreed set of conventions: indentation, quote style, naming, file structure. Well-known JavaScript ones include the Airbnb style guide, Google's, and JavaScript Standard Style. On a team, the specific choice matters less than everyone following the same one.

### Linting with ESLint

ESLint is the de facto JavaScript linter. It parses your code and reports rule violations — from stylistic issues to genuine bug patterns like unused variables or comparing a value to itself. Many problems can be auto-fixed. It's configured per project via a config file (modern versions use `eslint.config.js`, so-called flat config) where you enable rule sets and tweak individual rules.

```bash
npm install -D eslint
npx eslint .          # lint the project
```

### Formatting with Prettier

Prettier is an opinionated formatter: it reprints your code in a consistent layout and deliberately offers few options. It doesn't catch bugs — it just ends formatting debates and diffs.

```bash
npm install -D prettier
npx prettier --write .
```

### Using them together

ESLint and Prettier overlap on stylistic rules, and their disagreements cause noise. The usual fix is to disable ESLint's formatting-related rules (via a compatibility config such as `eslint-config-prettier`) and let Prettier own formatting while ESLint owns code quality.

### Editor integration and dev dependencies

Both tools have VS Code extensions that squiggle problems as you type and format on save. Still install the tools in the project itself: the project-local versions and config are the source of truth, so every contributor — and CI — applies identical rules regardless of editor setup. Baking this setup into a template repository saves redoing it per project.

## Common pitfalls

- Relying only on editor extensions with no project-level install — teammates and CI won't share your rules, and different projects may need different configs.
- Running ESLint's stylistic rules alongside Prettier without the compatibility config — the two fight over the same lines.
- Expecting Prettier to catch bugs (it only reformats) or ESLint to fix all layout (that's Prettier's job).
- Ignoring linter warnings until there are hundreds — fix them as they appear, or auto-fix early.

## Objectives — can you explain these?

- [ ] What style guides are and why they matter
- [ ] Setting up a linter and Prettier in a project

## Self-test

- What is linting?
- What kinds of problems can a linter catch?
- What are the benefits of a code formatter?
- What is Prettier?
- Why install linters and formatters as dev dependencies in the project rather than only as editor plugins?

## My notes

## Questions / to revisit
