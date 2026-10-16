# ArticleByline
Author block for Insights articles: round portrait, name, role and date.

**Use** the full version under the article title and the compact version in related-article lists. **Don’t** show a byline for articles Ramin didn’t write or review.

## Blade
```blade
<x-byline :date="$post->updated_at" :read-time="$post->read_time" />
<x-byline compact :date="$post->published_at" />
```

## Spec
- Avatar 52px (compact 40px), `radius-full`, 1px `line`, the portrait on the `portrait` radial ground, cropped to head and shoulders. Use a pre-cropped 160×160 WebP in production.
- Name 15px/600 `ink`; role `body-sm` `ink-muted`; meta 13px `ink-subtle` (“Updated Sep 18, 2026 · 6 min read”).
- Add `Person` and `Article` JSON-LD with the same name and role.
