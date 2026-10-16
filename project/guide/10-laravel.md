# Laravel implementation

How to turn this system into the attorneyramin.com codebase. **Stack**: Laravel 12 or later, PHP 8.3+, Livewire 3 (which ships Alpine.js 3 and the Focus plugin), Tailwind CSS v4 through `@tailwindcss/vite`, Vite. Icons: `mallardduck/blade-lucide-icons`.

## Project layout

```text
resources/
  css/app.css                      ← the generated theme below
  js/app.js                        ← Alpine theme store
  fonts/                           ← the six WOFF2 files from this system's fonts/
  views/
    components/
      layouts/app.blade.php        ← <html data-theme>, head, header, main, footer
      logo.blade.php  button.blade.php  link.blade.php  link/arrow.blade.php
      theme-toggle.blade.php  site-header.blade.php  mobile-menu.blade.php  site-footer.blade.php
      breadcrumbs.blade.php  hero.blade.php  hero/proof.blade.php  section-header.blade.php  cta-band.blade.php
      practice-card.blade.php  result-card.blade.php  testimonial.blade.php  credential-bar.blade.php
      insight-card.blade.php  byline.blade.php  timeline.blade.php  timeline/item.blade.php
      faq.blade.php  faq/item.blade.php  badge.blade.php  office-card.blade.php
      form/input.blade.php  form/select.blade.php  form/textarea.blade.php  form/checkbox.blade.php  form/radio-group.blade.php
      alert.blade.php  disclaimer.blade.php
    livewire/consultation-form.blade.php
app/Livewire/ConsultationForm.php
app/Models/Inquiry.php  app/Models/CaseResult.php  app/Models/Post.php
config/site.php                    ← phone, offices, social links, recognitions
lang/en/legal.php  lang/es/legal.php
```

Component names match the component pages in this system one to one: SiteHeader → `<x-site-header>`, CaseResultCard → `<x-result-card>`, FormField → `<x-form.input>` / `select` / `textarea`, and so on.

## Theme CSS

`resources/css/app.css`, generated from `tokens.json`. Semantic colors are CSS variables that switch under `[data-theme="dark"]`, so `bg-page`, `text-ink` and `bg-accent` adapt on their own; the `dark:` variant is rarely needed. Type styles become utilities with fluid sizes (`class="display-xl"`); the duration and z-index tokens become utilities too (`duration-fast`, `z-sticky`). Spacing is Tailwind’s default 4px scale, which is exactly the `space-*` tokens.

```css
/* resources/css/app.css — generated from the Attorney Ramin design system tokens.json. Do not hand-edit values; change tokens.json and regenerate. */
@import "tailwindcss";

/* Dark mode follows <html data-theme="dark">, set before first paint (see "Theme switching"). */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
/* Inside a navy band (<section data-surface="brand">) components switch to their on-brand styles. */
@custom-variant on-brand (&:where([data-surface="brand"] *));

@font-face { font-family: "Libre Caslon Display"; src: url("../fonts/LibreCaslonDisplay-Regular.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Libre Caslon Text"; src: url("../fonts/LibreCaslonText-Regular.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Libre Caslon Text"; src: url("../fonts/LibreCaslonText-Italic.woff2") format("woff2"); font-weight: 400; font-style: italic; font-display: swap; }
@font-face { font-family: "Libre Caslon Text"; src: url("../fonts/LibreCaslonText-Bold.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: "Libre Franklin"; src: url("../fonts/LibreFranklin-Variable.woff2") format("woff2"); font-weight: 100 900; font-style: normal; font-display: swap; }
@font-face { font-family: "Libre Franklin"; src: url("../fonts/LibreFranklin-Italic-Variable.woff2") format("woff2"); font-weight: 100 900; font-style: italic; font-display: swap; }

@theme static { /* static: emit every variable, because the dark block below references primitives */
  --color-*: initial;
  --font-*: initial;
  --radius-*: initial;
  --shadow-*: initial;

  /* Primitives */
  --color-navy-50: #F2F5FA;
  --color-navy-100: #E3E9F3;
  --color-navy-200: #C6D1E5;
  --color-navy-300: #9DAFCF;
  --color-navy-400: #6E87B4;
  --color-navy-500: #4B6699;
  --color-navy-600: #364F80;
  --color-navy-700: #273D67;
  --color-navy-800: #1B2C4E;
  --color-navy-900: #131F38;
  --color-navy-950: #0A1222;
  --color-claret-50: #FCF2F4;
  --color-claret-100: #F8E1E6;
  --color-claret-200: #F0C2CC;
  --color-claret-300: #E496A8;
  --color-claret-400: #D4677F;
  --color-claret-500: #BE4260;
  --color-claret-600: #A12A48;
  --color-claret-700: #861E3B;
  --color-claret-800: #6C1931;
  --color-claret-900: #531427;
  --color-claret-950: #320A16;
  --color-pewter-0: #FFFFFF;
  --color-pewter-25: #FAFBFC;
  --color-pewter-50: #F4F6F9;
  --color-pewter-100: #EAEEF3;
  --color-pewter-200: #D8DEE6;
  --color-pewter-300: #BAC3CF;
  --color-pewter-400: #8F9AAA;
  --color-pewter-500: #687486;
  --color-pewter-600: #4F5A6B;
  --color-pewter-700: #3A4352;
  --color-pewter-800: #262D3A;
  --color-pewter-900: #171C26;
  --color-pewter-950: #0E1219;

  /* Semantic — light values; dark values are swapped in below */
  --color-page: var(--color-pewter-25);
  --color-page-subtle: var(--color-pewter-50);
  --color-raised: var(--color-pewter-0);
  --color-overlay: var(--color-pewter-0);
  --color-field: var(--color-pewter-0);
  --color-brand: var(--color-navy-900);
  --color-brand-deep: var(--color-navy-950);
  --color-portrait: var(--color-pewter-100);
  --color-portrait-glow: var(--color-pewter-0);
  --color-ink: #0E1A30;
  --color-ink-muted: #475266;
  --color-ink-subtle: #5F6B7E;
  --color-on-brand: #F4F6FA;
  --color-on-brand-muted: #B8C4DA;
  --color-accent: var(--color-claret-700);
  --color-accent-hover: var(--color-claret-800);
  --color-accent-pressed: var(--color-claret-900);
  --color-accent-ink: var(--color-claret-700);
  --color-accent-soft: var(--color-claret-50);
  --color-accent-on-brand: var(--color-claret-500);
  --color-on-accent: #FFFFFF;
  --color-pip: var(--color-claret-700);
  --color-pip-on-brand: var(--color-claret-400);
  --color-line: #E3E8EE;
  --color-line-strong: #7A8597;
  --color-line-brand: #2A3A5C;
  --color-focus: var(--color-ink);
  --color-focus-on-brand: #FFFFFF;
  --color-selection: var(--color-claret-100);
  --color-scrim: rgba(10, 18, 34, 0.56);
  --color-success: #1E6B47;
  --color-success-soft: #E7F4EC;
  --color-warning: #8A5A00;
  --color-warning-soft: #FDF3DC;
  --color-danger: #B42318;
  --color-danger-soft: #FDECEA;
  --color-info: var(--color-navy-600);
  --color-info-soft: #EAF0FA;

  --font-display: "Libre Caslon Display", "Libre Caslon Text", Georgia, "Times New Roman", serif;
  --font-serif: "Libre Caslon Text", Georgia, "Times New Roman", serif;
  --font-sans: "Libre Franklin", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;

  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  --shadow-xs: 0 1px 2px rgba(14, 26, 48, 0.06);
  --shadow-sm: 0 1px 2px rgba(14, 26, 48, 0.05), 0 2px 8px -2px rgba(14, 26, 48, 0.08);
  --shadow-md: 0 2px 4px -1px rgba(14, 26, 48, 0.06), 0 8px 24px -6px rgba(14, 26, 48, 0.12);
  --shadow-lg: 0 4px 8px -2px rgba(14, 26, 48, 0.06), 0 24px 48px -12px rgba(14, 26, 48, 0.18);
  --shadow-xl: 0 40px 80px -24px rgba(14, 26, 48, 0.28);

  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  --spacing: 0.25rem; /* space-N = N × 4px, so p-4 = 16px, gap-8 = 32px */

  --container-article: 680px;
  --container-narrow: 880px;
  --container-content: 1200px;
  --container-wide: 1360px;

  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 320ms;
  --duration-reveal: 560ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
}

@layer base {
  [data-theme="dark"] {
    color-scheme: dark;
    --color-page: var(--color-navy-950);
    --color-page-subtle: #0E182C;
    --color-raised: #131E36;
    --color-overlay: #18253F;
    --color-field: #0D1629;
    --color-brand: var(--color-navy-800);
    --color-brand-deep: #060B16;
    --color-portrait: var(--color-navy-800);
    --color-portrait-glow: var(--color-navy-600);
    --color-ink: #EEF2F8;
    --color-ink-muted: #AEB9CC;
    --color-ink-subtle: #8D99AE;
    --color-accent: var(--color-claret-500);
    --color-accent-hover: var(--color-claret-600);
    --color-accent-pressed: var(--color-claret-700);
    --color-accent-ink: var(--color-claret-300);
    --color-accent-soft: #2A0E19;
    --color-pip: var(--color-claret-400);
    --color-line: #1E2A44;
    --color-line-strong: #5B6B8A;
    --color-line-brand: #31446B;
    --color-focus: var(--color-ink);
    --color-selection: var(--color-claret-900);
    --color-scrim: rgba(3, 6, 12, 0.72);
    --color-success: #5CC499;
    --color-success-soft: #0F2A20;
    --color-warning: #F2C25C;
    --color-warning-soft: #2E2310;
    --color-danger: #F97066;
    --color-danger-soft: #3A1514;
    --color-info: #9DB5E8;
    --color-info-soft: #14213D;
    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.5);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5), 0 2px 8px -2px rgba(0, 0, 0, 0.5);
    --shadow-md: 0 2px 4px -1px rgba(0, 0, 0, 0.5), 0 8px 24px -6px rgba(0, 0, 0, 0.6);
    --shadow-lg: 0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 24px 48px -12px rgba(0, 0, 0, 0.7);
    --shadow-xl: 0 40px 80px -24px rgba(0, 0, 0, 0.8);
  }

  html { background: var(--color-page); color: var(--color-ink); font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--color-selection); color: var(--color-ink); }
  :focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
  h1, h2, h3, h4 { text-wrap: balance; }
}

/* Type styles — one utility per token style, fluid between 375px and 1280px */
@utility display-2xl { font-family: var(--font-display); font-size: clamp(3.25rem, 2.1105rem + 4.8619vw, 6rem); line-height: 0.96; font-weight: 400; letter-spacing: -0.025em; }
@utility display-xl { font-family: var(--font-display); font-size: clamp(2.75rem, 2.0249rem + 3.0939vw, 4.5rem); line-height: 1; font-weight: 400; letter-spacing: -0.02em; }
@utility display-lg { font-family: var(--font-display); font-size: clamp(2.375rem, 1.9088rem + 1.989vw, 3.5rem); line-height: 1.04; font-weight: 400; letter-spacing: -0.015em; }
@utility display-md { font-family: var(--font-display); font-size: clamp(2rem, 1.6892rem + 1.326vw, 2.75rem); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; }
@utility display-sm { font-family: var(--font-display); font-size: clamp(1.75rem, 1.5946rem + 0.663vw, 2.125rem); line-height: 1.15; font-weight: 400; letter-spacing: -0.005em; }
@utility display-xs { font-family: var(--font-display); font-size: clamp(1.5rem, 1.4482rem + 0.221vw, 1.625rem); line-height: 1.2; font-weight: 400; letter-spacing: 0em; }
@utility figure { font-family: var(--font-display); font-size: clamp(3rem, 2.5856rem + 1.768vw, 4rem); line-height: 1; font-weight: 400; letter-spacing: -0.02em; font-variant-numeric: lining-nums; }
@utility quote-lg { font-family: var(--font-serif); font-size: clamp(1.5rem, 1.2928rem + 0.884vw, 2rem); line-height: 1.35; font-weight: 400; font-style: italic; }
@utility quote-md { font-family: var(--font-serif); font-size: 1.375rem; line-height: 1.5; font-weight: 400; font-style: italic; }
@utility article-body { font-family: var(--font-serif); font-size: clamp(1.125rem, 1.0991rem + 0.1105vw, 1.1875rem); line-height: 1.7; font-weight: 400; }
@utility title-lg { font-family: var(--font-sans); font-size: clamp(1.375rem, 1.3232rem + 0.221vw, 1.5rem); line-height: 1.3; font-weight: 600; letter-spacing: -0.01em; }
@utility title-md { font-family: var(--font-sans); font-size: 1.25rem; line-height: 1.35; font-weight: 600; letter-spacing: -0.005em; }
@utility title-sm { font-family: var(--font-sans); font-size: 1.0625rem; line-height: 1.4; font-weight: 600; }
@utility lead { font-family: var(--font-sans); font-size: clamp(1.125rem, 1.0732rem + 0.221vw, 1.25rem); line-height: 1.6; font-weight: 400; }
@utility body-lg { font-family: var(--font-sans); font-size: 1.125rem; line-height: 1.65; font-weight: 400; }
@utility body-md { font-family: var(--font-sans); font-size: 1rem; line-height: 1.6; font-weight: 400; }
@utility body-sm { font-family: var(--font-sans); font-size: 0.875rem; line-height: 1.55; font-weight: 400; }
@utility caption { font-family: var(--font-sans); font-size: 0.8125rem; line-height: 1.5; font-weight: 400; }
@utility label-lg { font-family: var(--font-sans); font-size: 1rem; line-height: 1.25; font-weight: 500; }
@utility label-md { font-family: var(--font-sans); font-size: 0.875rem; line-height: 1.25; font-weight: 500; }
@utility label-sm { font-family: var(--font-sans); font-size: 0.8125rem; line-height: 1.2; font-weight: 500; letter-spacing: 0.01em; }
@utility eyebrow { font-family: var(--font-sans); font-size: 0.75rem; line-height: 1.3; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }

/* Motion and layer utilities (Tailwind has no theme namespace for these) */
@utility duration-fast { transition-duration: var(--duration-fast); }
@utility duration-base { transition-duration: var(--duration-base); }
@utility duration-slow { transition-duration: var(--duration-slow); }
@utility duration-reveal { transition-duration: var(--duration-reveal); }
@utility z-base { z-index: 0; }
@utility z-raised { z-index: 10; }
@utility z-sticky { z-index: 30; }
@utility z-dropdown { z-index: 40; }
@utility z-overlay { z-index: 50; }
@utility z-modal { z-index: 60; }
@utility z-toast { z-index: 70; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

Utility names you will use most: `bg-page`, `bg-page-subtle`, `bg-raised`, `bg-brand`, `text-ink`, `text-ink-muted`, `text-ink-subtle`, `text-on-brand`, `bg-accent`, `text-accent-ink`, `border-line`, `border-line-strong`, `rounded-xs`, `rounded-md`, `shadow-md`, `max-w-content`, `max-w-article`, `duration-base`, `ease-standard`, `z-sticky` (add `--z-index-*` if you prefer named layers), and the type utilities `display-*`, `title-*`, `body-*`, `label-*`, `eyebrow`, `caption`.

## Theme switching

Set the theme before the first paint, in the layout `<head>`, so dark-mode visitors never see a light flash:

```blade
<html lang="{{ app()->getLocale() }}" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#FAFBFC">
  <script>
    (function () {
      try {
        var m = localStorage.getItem('theme') || 'system';
        var dark = m === 'dark' || (m === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
        document.querySelector('meta[name=theme-color]').content = dark ? '#0A1222' : '#FAFBFC';
      } catch (e) {}
    })();
  </script>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  @livewireStyles
</head>
```

The Alpine store that the ThemeToggle drives (`resources/js/app.js`):

```js
document.addEventListener('alpine:init', () => {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  Alpine.store('theme', {
    mode: (() => { try { return localStorage.getItem('theme') || 'system'; } catch { return 'system'; } })(),
    init() { mq.addEventListener('change', () => this.mode === 'system' && this.apply()); },
    set(mode) {
      this.mode = mode;
      try { localStorage.setItem('theme', mode); } catch {}
      this.apply();
    },
    apply() {
      const dark = this.mode === 'dark' || (this.mode === 'system' && mq.matches);
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      document.querySelector('meta[name=theme-color]')?.setAttribute('content', dark ? '#0A1222' : '#FAFBFC');
    },
  });
});
```

Livewire 3 starts Alpine for you; with `wire:navigate` the `<html>` element persists between pages, so the theme carries over without re-running the head script.

## Writing components

Anonymous Blade components with `@props` and `$attributes->class()` so callers can add utilities. The Button, as the pattern for the rest:

```blade
{{-- resources/views/components/button.blade.php --}}
@props(['variant' => 'primary', 'size' => 'md', 'href' => null, 'icon' => null, 'iconRight' => null, 'block' => false])
@php
  $base = 'inline-flex items-center justify-center gap-2 rounded-xs border whitespace-nowrap transition-colors duration-fast ease-standard aria-disabled:pointer-events-none aria-disabled:opacity-45';
  $sizes = ['sm' => 'min-h-9 px-4 label-sm', 'md' => 'min-h-11 px-5 label-md', 'lg' => 'min-h-13 px-6 label-lg'];
  $variants = [
    'primary'   => 'border-transparent bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-pressed on-brand:bg-accent-on-brand',
    'secondary' => 'border-line-strong text-ink shadow-xs hover:border-ink hover:bg-page-subtle on-brand:border-on-brand-muted on-brand:text-on-brand on-brand:shadow-none on-brand:hover:bg-line-brand',
    'ghost'     => 'border-transparent text-ink hover:bg-page-subtle',
  ];
  $classes = [$base, $sizes[$size], $variants[$variant], 'w-full' => $block];
@endphp
@if ($href)
  <a href="{{ $href }}" {{ $attributes->class($classes) }}>
@else
  <button {{ $attributes->merge(['type' => 'button'])->class($classes) }}>
@endif
  @if ($icon) <x-dynamic-component :component="'lucide-'.$icon" class="size-4" /> @endif
  {{ $slot }}
  @if ($iconRight) <x-dynamic-component :component="'lucide-'.$iconRight" class="size-4" /> @endif
@if ($href) </a> @else </button> @endif
```

Navy bands set `data-surface="brand"` on their root (`<section data-surface="brand" class="bg-brand text-on-brand">`); the `on-brand:` variant then restyles anything inside, as the Button above shows.

## Icons

```bash
composer require mallardduck/blade-lucide-icons
php artisan vendor:publish --tag=blade-lucide-icons-config   # set 'attributes' => ['stroke-width' => 1.5]
```

Use `<x-lucide-phone class="size-5" />`. For the motorcycle icon, copy `assets/Icons/motorbike.svg` to `resources/svg/motorbike.svg`, replace its stroke color with `currentColor`, and register `resources/svg` as a Blade Icons set with the prefix `icon` (`<x-icon-motorbike />`).

## Fonts

Copy `fonts/*.woff2` to `resources/fonts/`; Vite fingerprints them through the `@font-face` URLs in `app.css`. Preload Libre Caslon Display and Libre Franklin roman (see Typography). For production, also download the latin-ext subsets so names like “Lucía” and Spanish punctuation never fall back.

## Content and data

- `config/site.php`: the main phone `(855) 786-9467`, the six offices with phones, social profiles, recognitions with years. Header, footer, OfficeCard and JSON-LD all read from here.
- `case_results`: type, amount, category, county, year, summary, `verified_at`. Public queries filter on `verified_at`.
- `posts` (Insights): title, slug, category, cover, body (Markdown rendered into `article-body`), `published_at`, `reviewed_by`.
- `inquiries`: what the ConsultationForm stores. Send a queued notification to the intake inbox; keep personal data out of logs; delete inquiries on a retention schedule stated in the privacy policy.
- `lang/{en,es}/legal.php`: every disclaimer string, so legal wording changes in one place.

## Head, SEO and sharing

```blade
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">   {{-- 180×180 export of ramin-avatar.svg --}}
<meta property="og:image" content="{{ asset('images/og-default.png') }}">
<link rel="alternate" hreflang="en" href="https://attorneyramin.com{{ $path }}">
<link rel="alternate" hreflang="es" href="https://attorneyramin.com/es{{ $path }}">
```

Emit JSON-LD: `Person` for Ramin (jobTitle “Principal Attorney”, worksFor “RTM Law, APC”, sameAs his firm profile and social links), `LegalService` for each office, `BreadcrumbList`, `FAQPage` and `Article` where those components appear.

## Performance budget

- LCP under 2.0s on a mid-range phone over 4G: preload the two fonts, serve the hero portrait as AVIF/WebP with `width`/`height` and `fetchpriority="high"`.
- CSS under 30 KB gzipped; JavaScript limited to Livewire and Alpine.
- CLS under 0.05: reserve image boxes with `aspect-ratio`, use fallback font metric overrides.

## Keeping code and system in sync

`tokens.json` is the source of truth. When a token changes here, regenerate the `@theme` block above from it and replace the one in `app.css`; never edit hex values in Blade files. Component markup follows the preview of the same name in this system.
