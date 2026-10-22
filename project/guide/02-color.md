# Color

Three layers. **Primitives** are the raw scales: `navy` (the suit), `vermilion` (the red of the tie and pocket square) and `pewter` (a cool neutral biased toward navy). **Semantic tokens** name a job (`page`, `ink`, `accent`) and point at a primitive per theme. **Components** use semantic tokens only. Change a theme by changing the semantic layer; the components follow.

## The vermilion budget

Vermilion is the tie’s red: narrow, single, deliberate. Per view, allow one `accent` fill (the primary button) plus the `pip` and the `accent-ink` details: link underlines, eyebrows, quote marks, the active-nav bar. If a screen shows vermilion fills in two places, demote one to `secondary`. Never set a paragraph, a card background or a section band in vermilion.

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
| `accent` | vermilion-500 `#F53003` | vermilion-500 `#F53003` | Primary fill |
| `accent-hover` | vermilion-600 `#C42602` | vermilion-600 `#C42602` | Primary fill, hovered |
| `accent-ink` | vermilion-600 `#C42602` | vermilion-400 `#FF7055` | Vermilion as text |
| `line` | `#E3E8EE` | `#1E2A44` | Hairlines |
| `line-strong` | `#7A8597` | `#5B6B8A` | Control borders |

The full list, with usage notes, is in the Colors view.

## Contrast (WCAG 2.2)

Checked for every pair a usage note names, in both themes. Lowest values:

| Pair | Light | Dark | Needs |
| --- | --- | --- | --- |
| `ink` on `page-subtle` / `overlay` | 16.0 | 13.6 | 4.5 |
| `ink-muted` on `page-subtle` / `raised` | 7.3 | 8.4 | 4.5 |
| `ink-subtle` on `page-subtle` / `overlay` | 5.0 | 5.3 | 4.5 |
| `accent-ink` on `page-subtle` / `overlay` | 5.4 | 5.6 | 4.5 |
| `on-accent` on `accent-hover` | 5.8 | 5.8 | 4.5 |
| `on-accent` on `accent-pressed` | 7.9 | 7.9 | 4.5 |
| `on-accent` on `accent` / `accent-on-brand` | 3.96 | 3.96 | 4.5 (exception 1) |
| `on-brand-muted` on `brand` | 9.3 | 7.9 | 4.5 |
| `danger` on `danger-soft` | 6.0 | 5.9 | 4.5 |
| `accent` against `page-subtle` / `overlay` (button boundary) | 3.7 | 3.9 | 3.0 |
| `accent-on-brand` and `pip-on-brand` on `brand` | 4.1 | 3.5 | 3.0 |
| `pip` on `page-subtle` / `overlay` | 3.7 | 3.9 | 3.0 |
| `line-strong` on `page` / `raised` | 3.6 | 3.1 | 3.0 |

Two accepted exceptions, both on the primary button:

1. **The white label on the resting fill.** White on `#F53003` measures 3.96:1 in both themes: above the 3:1 that AA asks of large text and of a control’s boundary, under the 4.5:1 it asks of 13–16px button labels. The hovered and pressed fills pass. If strict AA is wanted on the resting button, darken the fill to `#E42B00` (4.5:1 at the same hue) or rest it on `accent-hover` `#C42602` (5.8:1); either means re-pointing the `accent` and `accent-on-brand` tokens.
2. **The hovered and pressed fills are darker**, so their edge drops under 3:1 against the navy `brand` band (hovered 2.8:1 light, 2.4:1 dark; pressed lower). In the dark theme the hovered fill is also under 3:1 on `raised` and `overlay` (2.9:1 and 2.6:1) and the pressed fill on every surface (2.4:1 or less). The button’s white label (5.8:1 or better) identifies it, which satisfies WCAG 1.4.11.

## Dark theme

Dark is midnight navy, the suit at night, never neutral grey. Surfaces step up in lightness (`page` → `page-subtle` → `raised` → `overlay`) because shadows barely read on navy. Vermilion is bright enough to stay put: `accent`, `pip` and their on-brand variants keep `vermilion-500` in both themes (4.7:1 against the dark `page`), and only `accent-ink` lightens to `vermilion-400` so text holds 5.6:1 or better on `raised` and `overlay`. The primary button’s hover goes darker, not lighter, so its white label gains contrast instead of losing it. The `brand` band moves from navy-900 to navy-800 so it still separates from the page.

## Status

| Token | Meaning | Always paired with |
| --- | --- | --- |
| `success` | Sent, resolved | circle-check icon + words |
| `warning` | Deadlines, time limits | triangle-alert icon + words |
| `danger` | Errors, failed sends | circle-alert icon + words |
| `info` | Neutral notices, Spanish available | info icon + words |

`danger` (`#B6143C` / `#FC7180`) is a crimson, cooler and bluer than the vermilion accent, so an error never reads as a brand color. Success (green) and danger (red) also differ in lightness and always carry an icon, so color is never the only signal.

## Don’ts

- No gradients except the portrait’s radial light.
- No vermilion text below 13px except link underlines.
- No pure black (`#000`) or pure grey; neutrals carry the navy bias.
- No white text on `accent-soft`, `page-subtle` or `portrait`.
