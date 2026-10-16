# CtaBand
The navy closing band that invites a consultation; the only place the foulard pip pattern appears.

**Use** once per page, directly above the footer, or after the results grid. **Don’t** put it next to another `brand` band or use it for newsletter sign-ups.

## Blade
```blade
<x-cta-band title="Talk to me about your case.">
  The consultation is free and confidential. …
</x-cta-band>
```

## Spec
- `brand` ground with `data-surface="brand"` so nested buttons and links switch to their on-brand styles; `radius-md` when inset in the container, square when full-bleed.
- Headline `display-sm` in `on-brand`; body `body-lg` in `on-brand-muted`, max 48ch.
- Actions: primary `lg` (`accent-on-brand`) and secondary `lg` (outline `on-brand-muted`), plus a `caption` line “Hablamos español”.
- Pip pattern: 4px squares on a 16px pitch in `line-brand`, right 40% of the band, masked to fade out leftward. It is decoration: `aria-hidden`.
