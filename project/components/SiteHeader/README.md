# SiteHeader
The sticky top bar: wordmark, five destinations, Español, the theme toggle and the consultation button.

**Use** on every page. Nav order is fixed: About, Practice areas, Results, Insights, Contact. **Don’t** add a sixth item, put the phone number in claret, or make the header transparent over photos (it sits on `page`).

## Blade
```blade
<x-site-header :current="request()->routeIs('about') ? 'About' : null" />
```

| Prop | Values | Default | Notes |
| --- | --- | --- | --- |
| `current` | nav label | — | Sets `aria-current="page"` and the 2px `accent-ink` underline. |
| `cta` | bool | true | Hide the button on the contact page itself. |

Behavior (Alpine): `x-data="{ scrolled: false }" @scroll.window="scrolled = window.scrollY > 8"` toggles the scrolled style. Below `lg` the nav, phone, Español and toggle collapse into the menu button, which opens MobileMenu.

## Spec
- Height `header-height` (80px) at lg+, 64px below. Inner width `container-wide`, side padding `gutter-desktop` / `gutter-phone`. `z-sticky`.
- At top: `page` ground, no border. Scrolled: `raised`, 1px `line` bottom border, `shadow-sm`, transition `duration-slow`.
- Nav links: 15px Libre Franklin 500, `ink-muted` → `ink` on hover; current link `ink` with a 2px `accent-ink` bar under it.
- The button reads “Free consultation” here (short form) and links to /contact.
- Include a skip link as the first focusable element: “Skip to content”, visible on focus, `z-toast`.
