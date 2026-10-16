# Button
Buttons start an action or go to the consultation form; the claret primary appears once per view, for the thing the page is for.

**Use** `primary` for “Request a free consultation” and form submits, `secondary` for the phone call and second actions, `ghost` for low-emphasis actions inside cards and toolbars. **Don’t** put two primaries side by side, use claret for destructive actions, or write labels longer than five words.

## Blade
```blade
<x-button href="{{ route('contact') }}" size="lg">Request a free consultation</x-button>
<x-button variant="secondary" href="tel:+18557869467" icon="phone">Call (855) 786-9467</x-button>
<x-button type="submit" wire:loading.attr="aria-busy" wire:target="submit">Send my case details</x-button>
```

| Prop | Values | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `primary` · `secondary` · `ghost` | `primary` | On a `brand` band, primary switches to `accent-on-brand` and secondary to an `on-brand-muted` outline automatically when the band has `data-surface="brand"`. |
| `size` | `sm` 36px · `md` 44px · `lg` 52px | `md` | Use `lg` in heroes and CtaBand, `sm` only inside dense UI. |
| `href` | URL | — | Renders `<a>`; otherwise `<button type="button">`. |
| `icon` / `iconRight` | Lucide name | — | 16px icon, `gap-2`. Arrow icons go on the right. |
| `block` | bool | false | Full width (mobile menu, form submit). |
| `loading` | bool | false | Spinner + “Sending…”, sets `aria-busy`. With Livewire use `wire:loading` on the inner spans. |

## Spec
- Height 36 / 44 / 52px; padding `space-4` / `space-5` / `space-6`; radius `radius-xs`; label `label-md` (13 / 14 / 16px, weight 500, +0.01em).
- primary: `accent` → hover `accent-hover` → active `accent-pressed`, label `on-accent`.
- secondary: 1px `line-strong`, `shadow-xs`, label `ink`; hover border `ink` + `page-subtle` fill.
- ghost: no border; hover `page-subtle`.
- Disabled: 45% opacity, `aria-disabled="true"`, no pointer events. Focus: 2px `focus` outline, 2px offset (`focus-on-brand` on navy).
- Transitions: colors over `duration-fast` with `ease-standard`.

## Tailwind recipe
```html
<!-- primary, md -->
<a class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xs bg-accent px-5 label-md text-on-accent transition-colors duration-fast ease-standard hover:bg-accent-hover active:bg-accent-pressed">…</a>
<!-- secondary, md -->
<a class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xs border border-line-strong px-5 label-md text-ink shadow-xs hover:border-ink hover:bg-page-subtle">…</a>
```

## Content
Verb first, sentence case, no “Click here”, no exclamation marks. Phone buttons show the number itself: “Call (855) 786-9467”.
