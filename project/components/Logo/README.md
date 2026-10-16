# Logo
The wordmark is “Ramin Montakab” set in Libre Caslon Display with a claret square full stop, the pip; render it as inline SVG so it inherits `currentColor`.

**Use** the wordmark in the header (26px tall desktop, 21px phone), the lockup with “Attorney at Law” in the footer and on print, the RM monogram for social avatars and the favicon. **Don’t** recolor the pip to anything but `pip` / `pip-on-brand`, re-typeset the name in a live font, add a tagline inside the lockup, outline, stretch or place it on a photo without the `brand` panel behind it.

## Blade
```blade
<x-logo />                                  {{-- wordmark, ink on page --}}
<x-logo variant="lockup" class="w-60" />    {{-- with ATTORNEY AT LAW --}}
<x-logo variant="monogram" class="size-12" />
```

| Prop | Values | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `wordmark` · `lockup` · `monogram` | `wordmark` | Paths come from `assets/Logos/*.svg`; copy the `<path>` data into `resources/views/components/logo.blade.php`. |
| `label` | string | “Ramin Montakab” | Becomes `aria-label` when the logo is a link. |

Inside the component: `<svg fill="currentColor">` for the letters, `<rect class="fill-pip">` for the pip, `<path class="fill-ink-muted">` for the descriptor. On `brand` surfaces wrap it in `text-on-brand` and switch the pip with `[.bg-brand_&]:fill-pip-on-brand` or pass `:on-brand="true"`.

## Spec
- Clear space: the cap height of the R on every side. Minimum size: wordmark 120px wide on screen, monogram 24px.
- Ink: `ink` on light grounds, `on-brand` on navy. The pip is `pip` (claret-700) on light, `pip-on-brand` (claret-400) on navy.
- The static files in `assets/Logos` are pre-colored for places that can’t take CSS (email signatures, Google Business Profile, PDFs).
