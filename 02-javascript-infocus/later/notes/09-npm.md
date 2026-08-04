# npm

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-npm> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

npm is the package manager for the JavaScript ecosystem: a huge registry of reusable libraries plus a command-line tool for installing them into your project. The `package.json` file records what your project depends on (and more), so anyone can recreate the same setup with one command. This is groundwork for the next lessons on bundlers.

## Key concepts

### What npm is

Rather than writing everything yourself, you install packages — libraries, tools, plugins — published by others. The `npm` CLI ships with Node.js and talks to the npm registry.

### Core commands

```bash
npm init -y                 # create a package.json with defaults
npm install <package>       # install a package into node_modules and record it
npm install                 # install everything listed in package.json
npm install -D <package>    # install as a development dependency
```

Installed code lands in the `node_modules` directory, which is generated and should be listed in `.gitignore` — `package.json` is what gets committed.

### package.json

The manifest at the root of the project. It holds:

- project metadata (name, version, description),
- `dependencies` — packages the app needs at runtime,
- `devDependencies` — packages needed only while developing (test frameworks, bundlers, linters),
- `scripts` — named commands you can run with `npm run <name>`.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "webpack": "^5.90.0"
  }
}
```

### Dependencies vs devDependencies

The split matters: a date-formatting library your shipped code calls is a dependency; the tool that bundles your code before shipping is a devDependency. Both install locally, but the distinction documents intent and affects production installs.

### Why this matters next

Real projects split code across many files and pull in many packages. Bundlers (covered next) take that graph of files and dependencies and produce a small set of optimised files for the browser — and bundlers themselves are installed via npm.

## Common pitfalls

- Committing `node_modules` to git — it's bulky and fully reproducible from `package.json`; ignore it.
- Deleting or hand-mangling `package.json` — without it `npm install` cannot restore the project's dependencies.
- Installing tooling as a regular dependency (or globally) when it belongs in `devDependencies` for that project.
- Confusing npm the registry with npm the CLI — the command-line tool is how you interact with the online package repository.

## Objectives — can you explain these?

- [ ] What npm is
- [ ] What the `package.json` file is for

## Self-test

- What is npm?
- Which file records all of a project's dependency information?

## My notes

## Questions / to revisit
