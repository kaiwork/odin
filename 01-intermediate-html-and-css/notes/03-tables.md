# Tables

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate HTML Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-tables> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

HTML tables present two-dimensional data — rows and columns — using dedicated elements. Used correctly they are semantic and accessible: screen readers can announce which header a cell belongs to. Used incorrectly (as a page-layout hack) they harm accessibility and maintainability; that job belongs to flexbox and grid.

## Key concepts

### Core structure

```html
<table>
  <caption>Monthly rainfall (mm)</caption>
  <thead>
    <tr>
      <th scope="col">City</th>
      <th scope="col">Jan</th>
      <th scope="col">Feb</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Singapore</th>
      <td>240</td>
      <td>160</td>
    </tr>
  </tbody>
</table>
```

- `<table>` wraps the whole table; `<tr>` is a row.
- `<th>` marks a header cell (column or row heading); `<td>` holds ordinary data.
- `<caption>` gives the table a visible, machine-readable title so users — especially screen-reader users — know what the table describes before diving into cells.
- `<thead>`, `<tbody>`, and `<tfoot>` group the header rows, body rows, and summary/footer rows, adding structure for both styling and assistive tech.

### Spanning cells

- `colspan="n"` makes a cell stretch across n columns; `rowspan="n"` stretches it down n rows. Useful for merged headings in complex tables.

### Accessibility: `scope`

The `scope` attribute on `<th>` states what the header applies to: `scope="col"` for a column header, `scope="row"` for a row header. This lets screen readers announce the right header when a user navigates to any data cell.

### Tables are for data, not layout

Before CSS layout matured, developers built entire page layouts with nested tables. Don't: layout tables confuse screen readers (which announce them as data), produce tangled markup that is painful to maintain, and respond badly to different screen sizes. Use flexbox or grid for layout; reserve `<table>` for genuinely tabular data.

## Common pitfalls

- Using `<td>` for headings instead of `<th>` — you lose the semantic link between headers and data, and the accessibility benefits with it.
- Omitting `scope` on complex tables — screen readers may guess header associations wrongly.
- Reaching for a table to align page sections — that is a layout problem; use grid or flexbox.
- Forgetting `<caption>` — sighted users infer the topic from surrounding text, but assistive-tech users get dropped into an unlabelled data grid.

## Objectives — can you explain these?

- [ ] Build advanced HTML tables with proper structure, headers, captions, and spanning cells.

## Self-test

- What is a table, and what kind of content belongs in one?
- Why is building page layout out of tables a bad idea?
- What purpose does the `<caption>` element serve?
- What does the `scope` attribute do, and what values does it take?

## My notes

## Questions / to revisit
