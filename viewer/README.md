# Design system viewer

A static website for browsing the Attorney Ramin design system. No Node, PHP or database: plain HTML, CSS and JavaScript that read the files in `project/` directly.

## Upload to shared hosting

Upload these four items into one folder on the host, for example `public_html/design-system/`:

```
index.html
.htaccess        (Apache / LiteSpeed; harmless elsewhere)
viewer/          (app.js, app.css, catalog.json, vendor/marked.min.js)
project/         (the design system itself)
```

Then open `https://attorneyramin.com/design-system/`. All paths are relative, so any folder name works, including the domain root. Don’t upload `prompt.txt`, `RAMIN-T.png` or `viewer/.vscode`; they aren’t needed.

## Publishing an update

Browsers cache CSS, JavaScript, fonts and images, so a visitor could keep seeing an old version after you upload a new one. `index.html` carries a cache key, `?v=1.1.0`, on its four `<link>` and `<script>` tags; `viewer/app.js` reads the key from its own tag and adds it to every file it loads (`bundle.css`, the fonts, logos, photos and icons). After uploading a change, raise the number on all four tags in `index.html` (for example to `?v=1.1.1`) and upload `index.html` too; every visitor then gets the new files without clearing their cache. The HTML, JSON and Markdown need no key: `.htaccess` tells browsers to revalidate them on every visit.

## Run it on your computer

It needs a web server (browsers block the file reads when you double-click `index.html`). Any of these work from the `design-system` folder:

- VS Code **Live Server**: right-click the root `index.html` → “Open with Live Server”.
- `python3 -m http.server 4400`, then open http://localhost:4400
- `npx serve .`

## Adding pages

The viewer reads `viewer/catalog.json` to know what to show. When you add a guide page or a component to `project/`, add its path or name there:

- `sections`: Markdown files under `project/`, in menu order (`README.md` first is the Overview).
- `components`: folder names under `project/components/`, in menu order. Each component’s group, height and width come from line 1 of its `preview.html`.

Everything else (colors, type, spacing, assets) is read from `project/tokens.json` and `project/design-system.json`, so token changes show up as soon as the files are uploaded.
