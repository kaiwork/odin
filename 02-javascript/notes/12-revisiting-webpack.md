# Revisiting Webpack

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-revisiting-webpack> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

This lesson smooths out the Webpack workflow: npm scripts replace long CLI incantations, separate development and production configurations stop you hand-editing `mode` before every deploy, and GitHub template repositories let you reuse the whole setup for future projects instead of rebuilding it each time.

## Key concepts

### npm scripts

Scripts live in the `"scripts"` object of `package.json`. Each entry maps a name to a shell command, run with `npm run <name>`:

```json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve"
  }
}
```

Inside scripts, npm can find binaries installed in `node_modules` automatically, so `"webpack"` works without a path. Scripts standardise a project's commands — anyone can look at `package.json` and know how to build or run it.

### Webpack modes

Webpack has two modes:

- `development` — faster builds, output kept readable, better error mapping while you work;
- `production` — applies optimisations such as minification for the code you actually deploy.

Rather than editing one config file back and forth, keep two configs and point scripts at them:

```json
{
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack serve --config webpack.dev.js"
  }
}
```

### webpack-merge

Most settings are shared between the two configs. `webpack-merge` lets you keep the shared part in a common file and layer mode-specific bits on top with minimal duplication:

```js
// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
});
```

### Template repositories

On GitHub, a repository's settings include a "Template repository" checkbox. Once ticked, you can start any new repo from it ("Use this template" / choosing it under "Repository template" when creating a repo), copying its files without its history. Put your polished Webpack + npm setup in one and every new project starts pre-configured.

## Common pitfalls

- Typing `npm build` instead of `npm run build` — custom scripts need `run` (only a few names like `test` and `start` have shortcuts).
- Manually flipping `mode` in a single config file and forgetting to switch it back — deploying an unoptimised development build, or developing against production settings.
- Copy-pasting the entire config into dev and prod variants — duplicated settings drift apart; share the common part with `webpack-merge`.
- Cloning your old project to reuse the setup, dragging its git history along — a template repository gives you a clean copy.

## Objectives — can you explain these?

- [ ] Writing and running npm scripts
- [ ] What Webpack's two modes are and how to switch between them without manual edits
- [ ] Creating and using GitHub template repositories

## Self-test

- Where are npm scripts defined?
- How do you declare an npm script and execute it?
- What are the two Webpack modes?
- Which tool lets you split a Webpack config across files without duplicating shared settings?
- What is a template repository and how do you make one?

## My notes

## Questions / to revisit
