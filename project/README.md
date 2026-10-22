The personal brand system for **Ramin Montakab**, Principal Attorney at RTM Law, APC, published at **attorneyramin.com**. It sits beside the firm site, rtmlawfirm.com: the firm site handles intake for every practice area and office; this site is the person behind it. Build it with Laravel, Blade, Livewire, Alpine.js and Tailwind CSS v4, in a light and a dark theme.

## The idea: tailored counsel

Everything comes from the portrait. Ramin wears a midnight-navy suit, a white shirt and a deep red foulard tie, with a brighter red pocket square. The system turns suit, shirt and tie into its palette and its one ornament:

- **Navy** (the suit) is the ground of authority: headers of bands, the footer, the dark theme.
- **Porcelain** (the shirt) is the light ground: clean, cool, quiet.
- **Vermilion** (the tie’s red, cut as bright as the pocket square) is the one point of conviction: the primary action, links, the pip. Like a tie, it is narrow and there is only one.
- **The pip** is the tie’s square dot. It is the full stop in the wordmark, the bullet before an eyebrow, the marker on the current timeline item, and, once per page, a field of pips in the CtaBand.

Type is American and legal: **Libre Caslon** (Caslon was the face of the first printed Declaration of Independence) for headlines and the human voice, **Libre Franklin** (after Franklin Gothic, the American newspaper sans) for plain-spoken interface text.

## Principles

1. **Calm over loud.** Personal injury advertising shouts. This site doesn’t: no all-caps urgency, no flashing phone numbers, no “Call now!”. Confidence shows in space and restraint.
2. **One vermilion moment per view.** If two things on screen are vermilion fills, one of them is wrong.
3. **Evidence, not adjectives.** Name the recognition and its years, the verified amount and its county, the statute and its section. Never “best”, “top”, “expert” or “aggressive”.
4. **Personal and plain.** First person, short sentences, legal terms explained the first time they appear.
5. **Both themes are first-class.** Every pairing meets WCAG 2.2 AA in light and in dark, with one documented exception for text, the white label on the resting primary button (see Color); dark is midnight navy, never grey.

## Rules for building a page

**Color**
- Set the page on `page`; alternate long sections with `page-subtle`. Put cards on `raised` with a 1px `line` border.
- Set headlines and body in `ink`, secondary text in `ink-muted`, dates and captions in `ink-subtle`. Nothing smaller than 13px goes below `ink-subtle`.
- Fill the one primary action with `accent` and label it with `on-accent`. Use `accent-ink` for inline link underlines, eyebrows, quote marks and active-nav bars, never for paragraphs.
- Navy bands use `brand` (footer `brand-deep`) with `on-brand` / `on-brand-muted` text, `line-brand` rules and `focus-on-brand` rings. Primary buttons on navy switch to `accent-on-brand`.
- Status colors (`success`, `warning`, `danger`, `info` and their `-soft` grounds) only mean status, always with an icon and words. `danger` is a cool crimson, deliberately different from the vermilion accent.
- Never write a hex value in a component. Use the semantic tokens; primitives (`navy-*`, `vermilion-*`, `pewter-*`) exist for the semantic layer and for illustrations.

**Type**
- Headlines in the `display-*` styles (Libre Caslon Display, weight 400). Never bold, never all caps, never letter-spaced open.
- Emphasize two or three words of a headline with `<em>`, which renders in Libre Caslon Text italic at 0.86em.
- Testimonials and pull quotes in `quote-lg` / `quote-md`; Insights articles in `article-body`, max 68 characters a line.
- Everything else in Libre Franklin: `lead` for intros, `body-md` by default, `label-md` for buttons and labels, `eyebrow` (uppercase, +0.16em) above section headlines, `caption` for legal text.
- Use `figure` only for verified settlement and verdict amounts.

**Space and layout**
- Space on the 4px grid with `space-*` (identical to Tailwind’s `p-4`, `gap-8`…). Section padding is `section-sm` / `section-md` / `section-lg` (80 / 96 / 128px).
- Contain pages at `container-content` (1200px), header and footer at `container-wide`, articles at `container-article`. Gutters: `gutter-phone` 20px, `gutter-tablet` 32px, `gutter-desktop` 40px.
- Section header to content: `space-12`. Cards in a grid: `grid-gap` (32px; 20px on phones).

**Shape and depth**
- Controls are tailored: `radius-xs` (2px) on buttons, inputs and badges. Cards `radius-md`, the portrait panel and dialogs `radius-lg`, photography square.
- Cards rest flat on a border. Shadows belong to things that float: `shadow-sm` for the scrolled header and hovered cards, `shadow-md` for menus and the form panel, `shadow-lg` for dialogs and the mobile menu, `shadow-xl` for the hero portrait only.
- Focus is always visible: 2px solid `focus`, 2px offset.

**Motion**
- Change state over `duration-fast` / `duration-base` with `ease-standard`. Sheets and accordions use `duration-slow`. A section may fade up once over `duration-reveal`; everything stops under `prefers-reduced-motion`.

## Voice in one paragraph

Ramin speaks in the first person, to one reader, in plain sentences. “I represent people hurt by careless drivers” — not “Our aggressive legal team fights for maximum compensation.” Headlines and buttons use sentence case. Phone numbers are written `(855) 786-9467`. Spanish appears in Spanish (“Hablamos español”), marked with `lang="es"`. No emoji, no exclamation marks. The Voice & content section has the full guide and word list.

## Legal guardrails

Every case result carries “Past results do not guarantee a similar outcome.” Every testimonial carries the testimonial disclaimer. Every form carries the no-attorney-client-relationship notice. The footer names the responsible attorney and his office address. Use the Disclaimer component for all four; the Attorney advertising section explains why.

## Iconography

- Use **Lucide** (v0.460, ISC license) at a 1.5px stroke, 16 / 20 / 24px, drawn inline so icons take `currentColor`. In Blade use `mallardduck/blade-lucide-icons` (`<x-lucide-phone class="size-5" />`).
- Lucide has no motorcycle, so `motorbike.svg` comes from **Tabler Icons** (v3.19, MIT) on the same 24px grid, restroked to 1.5px. This is the only exception.
- The curated set is in `assets/Icons` (pre-colored `navy-500` for previews only). Practice-area icons: car, truck, motorbike, bike, footprints, car-taxi-front, wine (DUI), dog, brain, baby, package-x (defective products), hand-heart (neurodivergent advocacy). Wrongful death and slip-and-fall take no icon.
- No gavels, scales of justice, columns or handshakes. No emoji anywhere.

## Logo

The wordmark is new with this system; no personal mark existed. It is “Ramin Montakab” in Libre Caslon Display, converted to outlines, with the vermilion pip as its full stop. Variants: wordmark, lockup with “ATTORNEY AT LAW” in Libre Franklin 600 at +0.26em, and the RM monogram. Keep clear space equal to the cap height. Render it inline (`<x-logo>`) so the letters take `ink` or `on-brand` and the pip takes `pip` or `pip-on-brand`; the files in `assets/Logos` are pre-colored for email, PDFs and profiles. The favicon is the R with its pip on a navy square.

## Photography

The cut-out portrait (`assets/Photography/ramin-montakab-portrait.png`) always sits on the portrait panel: a radial light from `portrait-glow` into `portrait`, which keeps the navy suit separate from the dark theme. Future photography: natural light, Southern California places Ramin actually works in, the same navy suit. No stock photos of crashes, injuries, courtrooms or handshakes. The Photography section covers art direction, crops and alt text.

## What is in this system

- **Tokens**: 73 colors in two themes (38 semantic, 35 primitives), 22 type styles in three families, spacing, radius, shadow, layout, breakpoints, z-index, duration and easing.
- **Fonts**: Libre Caslon Display, Libre Caslon Text (regular, italic, bold) and Libre Franklin (variable, roman and italic), as WOFF2 latin subsets, SIL Open Font License. Self-host them; add the latin-ext subsets for production.
- **Components**: 26, each with a live preview, a Blade API and a Tailwind recipe. They share one stylesheet, `components/bundle.css` (class prefix `ar-`), which mirrors what the Tailwind classes produce.
- **Assets**: logos, the portrait, a 1200×630 social image and 44 icons.
- **Sections**: Voice & content, Color, Typography, Layout & spacing, Shape & elevation, Motion, Photography, Accessibility, Attorney advertising, Laravel implementation, Page templates.
