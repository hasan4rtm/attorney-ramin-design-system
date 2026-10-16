# InsightCard
A link card for an article: 16:10 image, category, Caslon title, date and read time.

**Use** in a 3-column grid on the Insights index and as “Related reading” (3 cards) under articles. When an article has no photo, the card falls back to the navy pip panel with the category’s line icon. **Don’t** use stock photos of injured people, crashed cars or gavels.

## Blade
```blade
<x-insight-card :post="$post" />
```

| Field | Source |
| --- | --- |
| image | `$post->cover` (1600×1000 WebP); fallback panel uses `$post->category->icon` |
| category | `$post->category->name` — two words max, eyebrow style |
| title | `$post->title` — under 70 characters |
| meta | `$post->published_at->format('M j, Y')` · `$post->read_time` min read |

## Spec
- Card `raised`, `line`, `radius-md`, image clipped by the card radius.
- Fallback media: `brand` ground, 3px `line-brand` pips on an 18px pitch, 56px icon (1.25 stroke) in `on-brand-muted`.
- Body padding `space-6` / `space-8` bottom; category `eyebrow` `accent-ink`; title `display-xs`; meta 14px `ink-subtle`.
