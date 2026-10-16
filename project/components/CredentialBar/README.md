# CredentialBar
A ruled strip of four facts: recognitions with years, firm role, languages or offices.

**Use** under the hero or on the About page; the `brand` variant works as a band between sections. **Don’t** list a recognition without its issuing organization and years, or use badge artwork you don’t have a license for (Super Lawyers provides official badge files to selected attorneys).

## Blade
```blade
<x-credential-bar :items="[
  ['Recognition', 'Super Lawyers®', 'Selected 2025–2027'],
  ['Recognition', 'Rising Stars', 'Super Lawyers, 2023–2024'],
  ['Firm', 'Principal Attorney', 'RTM Law, APC'],
  ['Languages', 'Hablamos español', 'Consultations in Spanish'],
]" />
```

Uses `<dl>`: label → `<dt>`, value and detail → `<dd>`.

## Spec
- 1px `line` top and bottom, 1px `line` between items, padding `space-6`. Four columns at lg, two at md, one on phones.
- Label `eyebrow` `ink-subtle`; value 17px/600 `ink`; detail `body-sm` `ink-muted`. On `brand`: rules `line-brand`, text `on-brand` / `on-brand-muted`.
