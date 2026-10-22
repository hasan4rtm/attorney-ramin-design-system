# TextLink
Inline links are `ink` text with a 1px vermilion underline; arrow links are vermilion labels that move the reader to the next page.

**Use** inline links inside paragraphs and legal text, arrow links at the end of a section or card (“Read Ramin’s story →”). Use the up-right arrow only for links that leave attorneyramin.com (rtmlawfirm.com, Google Maps). **Don’t** color whole paragraphs vermilion, underline headings, or use “Learn more” more than once per section.

## Blade
```blade
<x-link href="/insights/after-a-crash">document the scene</x-link>
<x-link href="/fees" quiet>how contingency fees work</x-link>
<x-link.arrow href="/about">Read Ramin’s story</x-link.arrow>
<x-link.arrow href="https://rtmlawfirm.com" external>Visit rtmlawfirm.com</x-link.arrow>
```

| Prop | Values | Default | Notes |
| --- | --- | --- | --- |
| `quiet` | bool | false | `ink-muted` text, `line-strong` underline, for fine print and footers. |
| `external` | bool | false | Arrow-up-right icon, `target="_blank" rel="noopener"`, plus visually hidden “(opens in a new tab)”. |

## Spec
- Inline: `text-decoration-color: accent-ink`, thickness 1px → 2px on hover, offset 0.22em; hover text `accent-ink`.
- Arrow link: `label-md` in `accent-ink`, 16px icon, icon slides 3px right on hover over `duration-base`. On `brand`, text is `on-brand`.

## Tailwind recipe
```html
<a class="text-ink underline decoration-accent-ink decoration-1 underline-offset-[0.22em] hover:text-accent-ink hover:decoration-2">…</a>
<a class="group inline-flex items-center gap-2 label-md text-accent-ink hover:underline">Read Ramin’s story <x-lucide-arrow-right class="size-4 transition-transform group-hover:translate-x-[3px]" /></a>
```
