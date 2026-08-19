# Tableau Autobiographique

Interactive genealogy diagram for the VAE dossier — maps artistic practice,
curatorial work, teaching, and technical activity as a time-anchored,
categorized node-link graph. Built with D3.js, IBM Plex Mono (embedded), and
an SVG goo filter for the metaball effect.

## Working locally

1. Unzip this project. Keep `index.html` and the `img/` folder in the same
   directory — the diagram references images as `img/<filename>`, so if they
   drift apart, images will show broken.
2. Open `index.html` directly in a browser (double-click it, or drag it into
   a browser window). No server, no build step, no install.
3. Toggle **Edit mode** in the toolbar to continue editing. Your real dataset
   (207 nodes, 311 edges, 10 categories) is already the starting state —
   this isn't placeholder data anymore.
4. Autosave works locally too: with no Claude artifact backend available, it
   falls back to your browser's `localStorage` automatically. Watch the save
   status pill in the toolbar to confirm it says "Saved locally."
5. **Chrome or Edge recommended.** Safari's handling of `localStorage` under
   a local `file://` page can be inconsistent — if the save status keeps
   showing "Not saved," that's the likely cause, and Export JSON is your
   reliable fallback regardless of browser.

## Adding images while editing locally

Upload an image on a node as usual. It downscales automatically and
triggers a file download with a name matching the node — move that
downloaded file into `img/`. The diagram stores only the filename, never the
image itself, so the HTML file stays light no matter how many images you add.

**Export HTML does not bundle `img/`.** It re-saves your data into a new
self-contained HTML file, but images are referenced by filename, not
embedded — if you export to a new file or a new folder, copy `img/`
alongside it by hand, or the images will break in that copy specifically.

## Before this goes anywhere public (GitHub, a shared link, a jury)

Near the top of the script:
```js
const PUBLIC_MODE = false;
```
Change to `true`. This permanently disables editing for anyone viewing the
deployed file — the toolbar disappears and edit mode cannot be turned on
from the interface or the browser console. Viewing, panning, zooming,
clicking nodes, and the category filter all keep working. Set it back to
`false` on your local working copy to keep editing afterward — the public
and working versions should be two different states of this file, not the
same one.

## Exporting

- **Export JSON** — raw data, for backup or re-importing.
- **Export HTML** — the whole app with current data baked in, as a new
  standalone file (see the `img/` caveat above).
- **Export SVG** — vector output for InDesign/Illustrator. Scopes to
  whatever's active on screen: a category filter, a multi-selection, or the
  full map if neither is active.
- **Export Documentation** — category legend (with hex colors) and every
  node listed by category and year, generated from your live data.

## For anyone (including Claude Code) working on this next

Read **`CLAUDE.md`** first. It documents the data model, several non-obvious
architectural constraints, and a list of bugs that already happened once
along with their actual root causes — several of them the kind of thing
that looks like correct code until you know the specific reason it isn't.
