# Typography

| Family | Token | Role | Files |
| --- | --- | --- | --- |
| Libre Caslon Display | `font-display` | Headlines, figures, mobile-menu links | Regular 400 |
| Libre Caslon Text | `font-serif` | Italic emphasis, quotes, article body | Regular, Italic, Bold |
| Libre Franklin | `font-sans` | Interface, body copy, labels | Variable 100–900, roman and italic |

All three are SIL Open Font License, served from `fonts/` as WOFF2. **Why these**: Caslon is the face of American founding documents, and its Display cut has the fine contrast that makes a large headline feel engraved rather than shouted. Franklin is its natural partner: American, sturdy, built for reading at small sizes.

## Scale

Desktop sizes are the token values. Below 1280px, sizes interpolate linearly down to the phone size at 375px (the generated `@utility` classes in the Laravel section do this with `clamp()`).

| Style | Desktop | Phone | Line height | Use |
| --- | --- | --- | --- | --- |
| `display-2xl` | 96 | 52 | 0.96 | Homepage hero only |
| `display-xl` | 72 | 44 | 1.0 | Interior page h1 |
| `display-lg` | 56 | 38 | 1.04 | Feature h2 |
| `display-md` | 44 | 32 | 1.1 | Section h2 |
| `display-sm` | 34 | 28 | 1.15 | h3, article h2, CtaBand |
| `display-xs` | 26 | 24 | 1.2 | Card titles, timeline years, mobile menu |
| `figure` | 64 | 48 | 1.0 | Settlement amounts |
| `quote-lg` | 32 | 24 | 1.35 | Featured testimonial |
| `quote-md` | 22 | 22 | 1.5 | Testimonial cards |
| `article-body` | 19 | 18 | 1.7 | Article body |
| `title-lg` | 24 | 22 | 1.3 | Panel headings |
| `title-md` | 20 | 20 | 1.35 | Card titles |
| `title-sm` | 17 | 17 | 1.4 | FAQ questions, list titles |
| `lead` | 20 | 18 | 1.6 | Intros |
| `body-lg` | 18 | 18 | 1.65 | Marketing body |
| `body-md` | 16 | 16 | 1.6 | Default |
| `body-sm` | 14 | 14 | 1.55 | Secondary |
| `caption` | 13 | 13 | 1.5 | Legal, credits |
| `label-lg` / `label-md` / `label-sm` | 16 / 14 / 13 | same | 1.2–1.25 | Buttons, labels, badges |
| `eyebrow` | 12 | 12 | 1.3 | Section labels, uppercase +0.16em |

## Rules

- **Display weight is always 400.** Caslon Display has one weight by design; faux bold is forbidden (`font-synthesis: none` on headings).
- **Tracking**: display styles are tightened (−0.025em to −0.005em) as the size grows. Body text is never tracked. Uppercase labels open up to +0.16em.
- **Italic emphasis**: in a headline, `<em>` switches to Libre Caslon Text Italic at 0.86em so its x-height matches the Display roman. Use it for the last two or three words, once per headline.
- **Measure**: body 60–72 characters, `lead` 54–58, articles 68 (`container-article`).
- **Wrapping**: `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs. Use a non-breaking hyphen in “I‑5” and a non-breaking space in “§ 335.1”.
- **Figures**: Caslon’s lining figures for amounts (`figure`). Libre Franklin’s figures are proportional; use `tabular-nums` where its numbers stack in columns (phone numbers in office lists).
- **Hierarchy per section**: one eyebrow, one display headline, one lead. Never two display sizes in one card.

## Loading

Preload the two files that render above the fold, self-host the rest with `font-display: swap`:

```html
<link rel="preload" href="{{ Vite::asset('resources/fonts/LibreCaslonDisplay-Regular.woff2') }}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{{ Vite::asset('resources/fonts/LibreFranklin-Variable.woff2') }}" as="font" type="font/woff2" crossorigin>
```

Fallbacks are Georgia for the serifs and the system UI stack for Franklin. To keep layout shift near zero, add metric overrides to a fallback face (`size-adjust: 94%` on Georgia for Caslon Display is a good start; measure with the real headline).
