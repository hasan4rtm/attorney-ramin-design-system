# Color

Three layers. **Primitives** are the raw scales: `navy` (the suit), `claret` (the tie) and `pewter` (a cool neutral biased toward navy). **Semantic tokens** name a job (`page`, `ink`, `accent`) and point at a primitive per theme. **Components** use semantic tokens only. Change a theme by changing the semantic layer; the components follow.

## The claret budget

Claret is the tie: narrow, single, deliberate. Per view, allow one `accent` fill (the primary button) plus `accent-ink` details: link underlines, eyebrows, quote marks, the active-nav bar, pips. If a screen shows claret fills in two places, demote one to `secondary`. Never set a paragraph, a card background or a section band in claret.

## Roles

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| `page` | pewter-25 `#FAFBFC` | navy-950 `#0A1222` | Page ground |
| `page-subtle` | pewter-50 `#F4F6F9` | `#0E182C` | Alternate sections |
| `raised` | white | `#131E36` | Cards, scrolled header |
| `overlay` | white | `#18253F` | Mobile menu, dialogs |
| `field` | white | `#0D1629` | Inputs |
| `brand` | navy-900 `#131F38` | navy-800 `#1B2C4E` | Navy bands |
| `brand-deep` | navy-950 `#0A1222` | `#060B16` | Footer |
| `ink` | `#0E1A30` | `#EEF2F8` | Text |
| `ink-muted` | `#475266` | `#AEB9CC` | Secondary text |
| `ink-subtle` | `#5F6B7E` | `#8D99AE` | Meta, captions |
| `accent` | claret-700 `#861E3B` | claret-500 `#BE4260` | Primary fill |
| `accent-ink` | claret-700 | claret-300 `#E496A8` | Claret as text |
| `line` | `#E3E8EE` | `#1E2A44` | Hairlines |
| `line-strong` | `#7A8597` | `#5B6B8A` | Control borders |

The full list, with usage notes, is in the Colors view.

## Contrast (WCAG 2.2)

Checked for every pair a usage note names, in both themes. Lowest values:

| Pair | Light | Dark | Needs |
| --- | --- | --- | --- |
| `ink` on `page-subtle` / `overlay` | 16.0 | 13.6 | 4.5 |
| `ink-muted` on `page-subtle` | 7.3 | 8.4 | 4.5 |
| `ink-subtle` on `page-subtle` / `overlay` | 5.0 | 5.3 | 4.5 |
| `accent-ink` on `accent-soft` / `raised` | 8.5 | 7.3 | 4.5 |
| `on-accent` on `accent` | 9.3 | 5.1 | 4.5 |
| `on-accent` on `accent-on-brand` | 5.1 | 5.1 | 4.5 |
| `on-brand-muted` on `brand` | 9.3 | 7.9 | 4.5 |
| `line-strong` on `field` / `raised` | 3.6 | 3.1 | 3.0 |
| `danger` on `danger-soft` | 5.7 | 5.8 | 4.5 |
| `pip-on-brand` on `brand` | 4.7 | 4.0 | 3.0 |

One accepted exception: the `accent-on-brand` fill is 2.7:1 against the dark-theme `brand` band. The button’s white label (5.1:1) identifies it, which satisfies WCAG 1.4.11.

## Dark theme

Dark is midnight navy, the suit at night, never neutral grey. Surfaces step up in lightness (`page` → `page-subtle` → `raised` → `overlay`) because shadows barely read on navy. Claret lightens (`accent` claret-500, `accent-ink` claret-300) so it keeps its contrast; the primary button’s hover goes darker, not lighter, so its white label never drops below 4.5:1. The `brand` band moves from navy-900 to navy-800 so it still separates from the page.

## Status

| Token | Meaning | Always paired with |
| --- | --- | --- |
| `success` | Sent, resolved | circle-check icon + words |
| `warning` | Deadlines, time limits | triangle-alert icon + words |
| `danger` | Errors, failed sends | circle-alert icon + words |
| `info` | Neutral notices, Spanish available | info icon + words |

`danger` (`#B42318` / `#F97066`) is a warm vermilion, brighter and more orange than claret, so an error never reads as a brand accent. Success (green) and danger (red) also differ in lightness and always carry an icon, so color is never the only signal.

## Don’ts

- No gradients except the portrait’s radial light.
- No claret text below 13px except link underlines.
- No pure black (`#000`) or pure grey; neutrals carry the navy bias.
- No white text on `accent-soft`, `page-subtle` or `portrait`.
