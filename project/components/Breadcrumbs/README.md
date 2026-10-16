# Breadcrumbs
A one-line trail on Insights articles and practice-area detail pages.

**Use** below the header on pages two or more levels deep. **Don’t** show it on the homepage or top-level pages.

## Blade
```blade
<x-breadcrumbs :items="[['Home', '/'], ['Insights', '/insights'], [$post->title, null]]" />
```

Emit matching `BreadcrumbList` JSON-LD in the same component.

## Spec
- `body-sm` (14px). Links `ink-muted` → `ink` with underline on hover. Separator: 14px chevron-right in `line-strong`. Current page `ink`, truncated with an ellipsis at 40ch, `aria-current="page"`.
