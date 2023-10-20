# Importing and Exporting Components

You can move a component in three steps:

1. **Make** a new JS file to put the component in.
2. **Export** your function component from that file
3. **Import** it in the file where you'll use the component

---

**Note**

You may encounter files that leave off the `.js` file extension like so:

`import Gallery from './Gallery'`

Either `'./Gallery.js'` or `'./Gallery'` will work with React.

---

## Default vs Named Exports

**A file can have no more than one default export, but it can have as many named exports as you like.**

How you export your component dictates how you must import it. You will get
an error if you try to import a default export the same way you would a named
export! This chart can help you keep track:

| Syntax  | Export Statement                      | Import Statement                        |
| ------- | ------------------------------------- | --------------------------------------- |
| Default | `export default function Button() {}` | `export default function Button() {}`   |
| Named   | `export function Button() {}`         | `import { Button } from './Button.js';` |
