# Tableau Autobiographique — Project Context

Interactive genealogy diagram for Miyö Van Stenis's VAE dossier (Université
Paris 8, EDESTA-INREV-AIAC). It maps her practice — Eroticissima, curatorial
work, teaching, technical activity — as a time-anchored node-link graph, in
the spirit of Mark Lombardi's network drawings crossed with a Sankey-adjacent
genealogy chart. It is edited interactively, then exported as SVG and placed
into the VAE dossier's InDesign layout.

**Read this whole file before making changes.** Several bugs in this
project's history came from correct-looking code that didn't account for a
constraint documented below. Re-discovering them is expensive; reading them
is free.

## Single file, on purpose

`index.html` is one self-contained file: HTML, CSS, JS, and four base64-
embedded IBM Plex Mono weights, no build step, no external requests. This
is a real constraint, not legacy debt:

- It must run as a Claude.ai **artifact** (sandboxed iframe, see below).
- It must be downloadable and openable standalone, offline, by someone
  who is not a developer.
- "Export HTML" (in the toolbar) re-serialises the *entire live page*,
  data included, back into a new self-contained `.html` file. Splitting
  this into modules would break that export path unless the build step
  re-inlines everything before shipping — doable, but treat it as a
  deliberate migration, not an incidental refactor.

If you do split it up for maintainability, keep a build step that produces
a single-file artifact as the actual deliverable, and test the "Export
HTML" round-trip (export → open the exported file → confirm the data and
all interactions still work) before considering that migration done.

## Data model

```js
state = {
  nodes: [{
    id, title, year, type,            // required
    institution, collaborators: [], desc,   // optional, empty string/array if unset
    pos: {x,y},                        // optional — manual drag override, see below
    weight,                            // optional — 400/500/600, overrides state.nodeWeight
    size,                              // optional — px radius, overrides default 9
    image                              // optional — base64 data URL, downscaled on upload
  }],
  edges: [[sourceId, targetId]],       // undirected pairs, no weight/label
  typeColors: { categoryName: "#hex" },// user-editable — NOT fixed keys, see below
  yearRange: {min, max},               // optional override to extend the axis past node years
  nodeWeight: 400,                     // default title weight
  labelWidth: 150                      // px, wrap column for node titles
}
```

Everything persists through `normalizeState()` — malformed imports or
partial saves get coerced into something safe rather than crashing
downstream code. **Any new field you add to a node needs a default in
`normalizeState()`, or a corrupted/older save will produce `undefined`
deep in render logic.**

## Layout: two coordinate systems, don't confuse them

- **Node x** comes from `year` via a linear scale, UNLESS `node.pos` is
  set, in which case that's used verbatim. Drag is free in both x and y
  (`app.js` — search `d3.drag()`); on release, position is stored as an
  override and the node stops following its year.
- **Year axis tick x** is *derived from node positions*, not the other
  way around — `computeYearPositions()` averages the x of nodes
  belonging to each year, then runs it through an isotonic regression
  (`isotonicNonDecreasing()`, pool-adjacent-violators) so ticks never go
  out of chronological order even when a node is dragged far from its
  peers. **Do not "fix" apparent axis jitter by feeding node position
  back from axis position — that's a feedback loop and it was
  deliberately avoided.** If years cluster, the fix is font-size/step
  thinning (`drawAxis()`), not moving nodes.
- The axis (`axisLayer`) is a **sibling of the zoomed group**, not a
  child — it's redrawn in screen space on every pan/zoom so it stays
  pinned to the viewport bottom regardless of scale. If you refactor
  rendering, keep this separation; putting the axis inside the
  zoom-transformed `<g>` is what caused it to drift to mid-screen on
  iPad in an earlier version.

## The goo/metaball filter — opacity is not a strength dial

`#goo` / `#goo-node` / `#goo-export` use `feGaussianBlur` +
`feColorMatrix` with alpha thresholded around **22a − 9 ≈ 0 at a ≈ 0.41**.

This means:
- Shape opacity **below ~0.41** gets blurred and then thresholded away
  entirely — the shape silently vanishes, and what remains visible is
  unfiltered source bleeding through `feComposite atop`. This happened
  once already (cross-category connectors set to 0.35 produced grey
  streaks instead of a blob — see git history / conversation log).
- Shape opacity **well above 0.41** doesn't just look "more solid," the
  blur travels further before crossing the threshold, so the rendered
  shape is measurably *larger* than the same shape at 0.5. An earlier
  export used opaque (1.0) shapes with alpha moved to the parent `<g>`
  instead, reasoning it would survive vector-app import better — it
  didn't; it bloated every blob into fat, illegible streaks.
- **All blob shapes across the codebase are pinned near 0.5–0.55.**
  `renderFilterGoo()` (screen, category filter), the single-node
  selection blob in `applyHighlight()`, and `buildExportSVG()`'s blob
  layer must use **identical** stroke-width/opacity/radius values or
  the export will visibly disagree with the screen. There's a comment
  at each call site cross-referencing the others — keep it that way.

## Categories are fully dynamic — don't reintroduce CSS-variable coupling

Category colors used to be CSS custom properties (`--project`,
`--education`, etc.). That broke the moment user-created category names
could contain spaces or punctuation (invalid CSS identifier). Colors are
now read directly from `state.typeColors[type]` via `typeColor()`
everywhere — screen render, goo blobs, SVG export, ambient background.
**Do not reintroduce `--${type}` custom properties.** The `<select>` for
node type is rebuilt from `Object.keys(state.typeColors)` on every
category add/rename/delete (`rebuildTypeSelect()`) — it is not static
HTML.

## Edges: solid vs dashed is derived, not stored

`a.type === b.type` → solid, else dashed. This is computed at render
time from current node types, so **renaming a category changes line
style for every edge touching it, retroactively.** Not a bug — flagged
here so it isn't mistaken for one.

Category filter behavior: an edge is drawn only if **both** endpoints
are in the active filter set (`edgeInFilter()`). This was deliberately
changed from "either endpoint" after real use showed half-matching
dashed edges cluttering the view more than they informed it. If you
revisit this, that decision was tested against actual dense-graph
screenshots, not just discussed in the abstract.

## Storage: three-tier adapter, must never throw

`Store` (search for `const Store = (function(){`) probes in order:
`window.storage` (Claude artifact runtime) → `localStorage` (standalone
file on disk) → in-memory (private browsing / everything blocked). Every
path is wrapped so persistence failure never blocks the UI. If
`window.storage.set()` fails repeatedly, the adapter demotes to
`localStorage` **once** rather than retrying the dead backend forever —
preserve that demote-once behavior if you touch this code; the previous
version retried indefinitely and spammed the console every autosave.

## Sandboxed iframe: no native `confirm()`/`alert()`

Claude.ai artifacts run in a sandboxed iframe without `allow-modals`.
`window.confirm()` returns `false` silently (no exception) and
`window.alert()` no-ops silently. **This is why delete buttons, import
error messages, and duplicate-category warnings all failed invisibly**
in an earlier version — the code was logically correct, the guard
clause just always failed shut. Replaced with `confirmDialog()` /
`alertDialog()`, an in-page promise-based dialog (`#dialog-overlay`).

**If this project stays inside a Claude.ai artifact, keep using these.**
If you migrate it to run outside that sandbox (e.g., a normal
locally-hosted page opened directly, or deployed to a real domain),
native `confirm()`/`alert()` would work fine there — but the app is
currently written defensively for the more restrictive environment.
Don't silently revert to native dialogs without confirming the
deployment target no longer needs the workaround.

## `</script>` inside a JS comment breaks the whole file

Happened once. A comment reading `// guard against a stray </script>...`
contains the literal substring `</script`, which the **HTML parser**
closes on regardless of JS comment syntax — everything after it in the
file gets parsed as stray body text, silently truncating ~30% of the
app. If you ever need to reference that literal sequence in a comment or
string, break it up (`"</scr" + "ipt>"`) or escape it.
**Validate any edit to this file by parsing it as HTML**, not just
running the extracted JS through a syntax checker — `node --check` on
sliced-out JS will not catch this class of bug.

## Fonts: IBM Plex Mono, full glyph set, not the Google Fonts subset

Embedded as base64 `@font-face` (Regular/Medium/SemiBold/LightItalic),
sourced from IBM's own complete release (`@ibm/plex-mono` on npm), not
the Google Fonts CDN version. The Google-hosted subsets are missing
**ṣ (U+1E63)**, which appears in real project titles ("Ọṣun Ìbọ"). Only
the "vietnamese" subset covers the other dot-below vowels (Ọ ọ ẹ) and
even that doesn't have ṣ. If font size ever needs trimming, subset from
the IBM complete files against the actual character set in use — don't
switch back to the Google CDN version without re-checking coverage.

Label wrapping (`wrapLabel()`) does exact character-count math because
the font is monospaced (0.6em fixed advance). **This breaks if the font
is ever changed to something proportional** — wrapping would need real
text measurement (`getComputedTextLength()` or canvas measureText)
instead.

## Node title rendering: `<tspan>`, never `<foreignObject>`

Multi-line wrapped labels use real SVG `<text>`/`<tspan>` lines, computed
via `wrapLabel()`, not a `<div>`/`<foreignObject>`. `foreignObject` gives
free CSS wrapping but is silently dropped by Illustrator/InDesign on
SVG import — the labels would vanish from the print deliverable. Keep
this constraint if you touch label rendering.

Labels have a halo: `paint-order:stroke` + a paper-colored stroke behind
the glyphs on screen, so dense line clusters don't cut through
letterforms. The SVG export can't rely on `paint-order` (inconsistent
Illustrator/InDesign support) so it duplicates each label as a stroked
copy underneath the filled copy instead — keep both text nodes in sync
if you change label content generation.

## SVG export must mirror the screen, not reinvent it

`buildExportSVG()` scopes to whatever's active: category filter →
that subset; multi-selection (no filter) → those nodes; neither → the
whole map. Crop, axis years, and legend all follow the exported subset.
Filename is scoped too (`-project.svg`, `-selection.svg`, `-complet.svg`).

The export does **not** include: the glass panel, hover halos, or
uploaded images (all screen-only or too heavy for a vector print file).
It **does** include: the goo filter (`#goo-export`, self-contained
`<defs>`), gradient cross-category blob connectors, wrapped/haloed
labels, per-node size, and the top-left "Categories" legend block.

**Any visual change to the screen renderer (`render()`,
`renderFilterGoo()`, `applyHighlight()`) that isn't mirrored in
`buildExportSVG()` will produce an export that silently disagrees with
what the person was looking at when they clicked the button.** This has
happened at least twice. When changing blob/label/node visuals, grep for
the equivalent construct in `buildExportSVG()` before considering the
change done.

## Multi-selection and group operations

`selectedIds` (Set) is the real selection; `selectedId` is the "primary"
node the panel shows. Shift-click adds/toggles, shift-drag draws a
marquee (`marqueeLayer`), "Cluster" button does a BFS over `state.edges`
from the primary node. Dragging any node in a multi-selection moves the
whole set by the same delta (drag-start deltas are captured per-node in
`dragStartPos`, not recomputed from a single anchor). Delete, weight, and
size controls all apply to the whole `selectedIds` set when >1, not just
the primary node — check for this pattern if you add new
per-node authoring controls, since it's easy to accidentally wire a new
control to `selectedId` only and have it silently ignore the rest of
the selection.

## Known open items (not yet built)

- Marquee selection hit-tests node **centers**, not label bounding
  boxes — a node whose dot is just outside the box but whose label
  overlaps it will not be caught.
- No undo. Import replaces the whole state with no confirmation beyond
  the dialog; there's no history stack anywhere.
- Images aren't in the SVG export and there's no warning about total
  payload size across many images beyond a per-image >700KB dialog.
- View-mode and edit-mode panel fields are two parallel DOM
  representations (`<input>` + `.view-value` div) populated from the
  same data — if you add a new field, both halves need wiring or it
  will appear in one mode and silently vanish in the other.

## Testing approach used throughout this build

There is no test framework. Verification so far has been: extract the
`<script>` body and run `node --check` for syntax; parse the whole file
with an HTML parser to confirm the script tag isn't truncated; small
standalone Node scripts to test pure logic (isotonic regression,
wrapping math, selection semantics, scope filtering) against hand-built
fixtures; and rendering generated SVG through `cairosvg` to PNG for
visual verification before publishing. If you add a real test setup,
the pure-logic functions (`isotonicNonDecreasing`, `wrapLabel`,
`computeYearPositions`, `normalizeState`, `exportScope`) are the highest-
value candidates — they're already decoupled from the DOM.

## Images: real files, not base64

Images are no longer embedded as base64 in `node.image`. They live as real
files in an `img/` folder next to `index.html`, and `node.image` stores only
the filename (e.g. `"eros1.jpg"`), not a data URL or a path.

Why: base64 images inside the JSON/HTML made the file balloon and made
"Export HTML" (which serialises the whole page including data back into a
new file) increasingly heavy per image. A relative `img/<filename>` reference
keeps the data lightweight and is exactly how the diagram needs to work once
deployed to GitHub anyway — an `<img>` tag pointing at a relative path is the
natural fit for a static file next to a repo's `index.html`.

**Why not write directly into the folder from the browser:** the File System
Access API (`showDirectoryPicker`) can do this in Chromium browsers, but
support isn't reliable across Safari/iPad, and this project has already hit
one class of bug (see the `</script>` and `confirm()`/`alert()` entries
above) from assuming a browser capability that turned out to be
environment-dependent. The safe, universal mechanism instead: on upload, the
downscaled image triggers a normal file download with a deterministic name
(`slugify(nodeId).ext`), and the person moves it into their local `img/`
folder by hand. `state` only ever stores that filename.

**Session preview vs. persisted reference:** immediately after upload, the
image is shown via a short-lived `URL.createObjectURL()` blob (`
sessionImagePreviews`, keyed by node id) so there's visual feedback before
the file has actually been placed in `img/`. This is intentionally not
persisted. On reload, `renderPanelImage()` falls back to `img/<filename>`,
which only resolves once that folder genuinely exists next to `index.html`
(locally, or committed alongside it on GitHub). **This means images will
show broken inside a Claude.ai artifact preview** — there's no real
adjacent folder in that context. That's expected, not a bug: this feature
is built for the local-editing / GitHub-hosted phase of the project, not
the artifact-preview phase.

## PUBLIC_MODE

A single flag near the top of the script, `const PUBLIC_MODE = false;`.
Set to `true` before deploying anywhere the public (or a jury) might see
the file. It hides the toolbar entirely and hard-guards the edit-toggle
click handler so `editMode` cannot become `true` no matter how many times
it's clicked — verified with a standalone logic test, not just by reading
the code. Viewing, panning, zooming, clicking nodes for details, and the
category filter are all unaffected; only authoring is disabled.

Do not try to hide editing by just removing the toolbar's HTML or CSS —
the underlying functions (`selectNode`, drag handlers, etc.) would still be
reachable from the browser console. `PUBLIC_MODE` gates the actual state
transition (`editMode = !editMode`), not just its visibility, which is the
part that actually matters for a public deployment.
