# Testimonial
A client’s words in Caslon italic, with first name and initial, case type, source and rating.

**Use** the featured size (`quote-lg`) once per page and cards (`quote-md`) in a 2-column grid. Show Spanish reviews in Spanish with `lang="es"`. **Don’t** edit a review beyond trimming, invent reviews, or show full surnames without written permission.

## Blade
```blade
<x-testimonial name="Maria G." case="Car accident" source="Google review" :rating="5" featured>
  He called me back the same evening and explained every step.
</x-testimonial>
<x-disclaimer kind="testimonial" />
```

## Spec
- Quote mark: Caslon Display “ at 120px (80px in cards), `accent-ink`, `aria-hidden`.
- Quote: `quote-lg` or `quote-md`, `ink`, max 820px.
- Attribution: name 15px/600 `ink`; meta 14px `ink-subtle`; stars 16px filled `accent-ink` with `role="img" aria-label="5 out of 5 stars"`.
- Card variant: `raised`, `line`, `radius-md`, padding `space-8`.
