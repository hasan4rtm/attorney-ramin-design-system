# PracticeAreaCard
A whole-card link to one practice area, with a line icon, a title and a one-sentence summary.

**Use** in a 3-column grid at xl, 2 at md, 1 on phones. Wrongful death and slip-and-fall cards take no icon. **Don’t** write summaries longer than two lines at desktop width or promise outcomes.

## Blade
```blade
<x-practice-card icon="truck" title="Truck accidents" :href="route('practice.show', 'truck-accidents')">
  Claims against trucking companies and their insurers, where federal safety rules and fleet records matter.
</x-practice-card>
```

## Spec
- `raised`, 1px `line`, `radius-md`, padding `space-8`, inner gap `space-4`.
- Icon well 48px circle, `page-subtle` fill, 1px `line`, 22px icon in `ink`.
- Title `title-md`; summary `body-sm` `ink-muted`; arrow link pinned to the bottom.
- Hover: border `line-strong` + `shadow-sm`, arrow slides 3px. The `<a>` wraps the card; the arrow label is a `<span>`.
