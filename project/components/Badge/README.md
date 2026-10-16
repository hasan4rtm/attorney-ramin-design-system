# Badge
A short label for category, status or language, one or two words.

**Use** `neutral` for categories and read time, `accent` for “Featured”, `pip` for result type, `info` for language, `success` for resolved status. **Don’t** make badges clickable (use a filter chip button), or put more than three on one card.

## Blade
```blade
<x-badge>Car accidents</x-badge>
<x-badge tone="accent">Featured</x-badge>
<x-badge tone="info" icon="languages">Hablamos español</x-badge>
```

| Prop | Values | Default |
| --- | --- | --- |
| `tone` | `neutral` · `accent` · `pip` · `info` · `success` · `outline` | `neutral` |
| `icon` | Lucide name | — |

## Spec
- `label-sm` (13px/500), padding 3px 8px, `radius-xs`, 14px icons, `space-1` gap.
- neutral: `page-subtle` + 1px `line`, text `ink-muted`. accent: `accent-soft` / `accent-ink`. info: `info-soft` / `info`. success: `success-soft` / `success`. pip: neutral with a 6px `pip` square. On `brand`: transparent, `line-brand` border, `on-brand` text.
