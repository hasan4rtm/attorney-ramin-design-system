# Layout & spacing

## Grid

A 12-column grid inside the container, mobile first.

| Range | Columns | Gutter (side padding) | Grid gap | Header |
| --- | --- | --- | --- | --- |
| < 768px | 4 | `gutter-phone` 20px | 20px | 64px, menu button |
| 768–1023px | 8 | `gutter-tablet` 32px | `grid-gap` 32px | 64px, menu button |
| 1024–1279px | 12 | `gutter-tablet` 32px | 32px | 80px, full nav |
| ≥ 1280px | 12 | `gutter-desktop` 40px | 32px | 80px, full nav |

Breakpoints are Tailwind’s defaults (`breakpoint-sm` 640 … `breakpoint-2xl` 1536), so `md:` and `lg:` mean what every Laravel developer expects.

## Containers

| Token | Width | Use |
| --- | --- | --- |
| `container-wide` | 1360px | Header, footer, hero |
| `container-content` | 1200px | Default sections |
| `container-narrow` | 880px | FAQ, contact form page, centered headers |
| `container-article` | 680px | Insights articles, legal pages |

In Tailwind: `mx-auto max-w-content px-5 md:px-8 xl:px-10`.

## Vertical rhythm

- Sections: `section-sm` 80px on phones, `section-md` 96px on tablets, `section-lg` 128px on desktop, top and bottom. Adjacent sections on the same ground share one padding (collapse the second section’s top padding).
- Section header → content: `space-12`. Eyebrow → headline: `space-3`. Headline → lead: `space-6`.
- Inside cards: padding `space-8` (`space-6` small, `space-10` featured), gap `space-4`.
- Between sub-blocks inside a section: `space-16`.
- Use `gap` on flex and grid parents; avoid margins between siblings.

## Composition

- The homepage alternates grounds to pace the scroll: `page` (hero) → `page` (credentials) → `page-subtle` (practice areas) → `page` (results) → `page-subtle` (testimonials) → `page` (insights) → CtaBand → footer.
- Text columns align to the left edge of the grid. Center only short, single-idea sections (testimonial headers, the final CtaBand on phones).
- Asymmetry over symmetry: the hero is 1.15 : 0.85, the CtaBand 1.3 : 1.
- One `brand` band per page plus the footer. Never two navy bands touching.

## Responsive behavior

- Hero: portrait stacks below the copy under `lg`, capped at 320px wide; proof row wraps.
- Card grids: 3 → 2 (md) → 1 (phone). Featured result cards: 2 → 1.
- CredentialBar: 4 → 2 → 1, rules switch from vertical to horizontal.
- Footer: 4 columns → 2 → 1; legal text stays full width.
- Touch targets are at least 44×44px below `lg`.
