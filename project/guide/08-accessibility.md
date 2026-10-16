# Accessibility

Target: **WCAG 2.2 AA** in both themes, tested before launch with keyboard only, VoiceOver (Safari, iOS) and NVDA (Firefox, Windows). Injury clients include people with brain injuries, limited mobility and limited vision; accessibility is part of the service.

## Built into the tokens

- Every text pair named in a usage note meets 4.5:1 in light and dark; control borders and focus rings meet 3:1. See the contrast table in Color.
- Status is never color alone: each Alert, field error and badge carries an icon and words.
- The smallest text is 13px (`caption`); body text is 16px and inputs are 16px so iOS does not zoom.

## Keyboard and focus

- A “Skip to content” link is the first focusable element.
- Focus is a 2px solid `focus` outline at 2px offset on every interactive element; `focus-on-brand` on navy. Never remove it, even for mouse users (`:focus-visible` handles that).
- The mobile menu traps focus while open, closes with Escape and returns focus to the menu button.
- Accordions use native `<details>`/`<summary>`.
- Card links wrap the whole card in one `<a>`; nothing else inside is focusable.

## Targets

At least 44×44px for touch targets below `lg` (buttons `md`/`lg`, menu button, theme cycle button). The desktop theme toggle segments are 32px, above the 24px AA minimum.

## Forms

- Visible labels on every field; “Optional” marks the exceptions.
- Errors appear after the field loses focus or on submit, are linked with `aria-describedby`, set `aria-invalid="true"`, and say how to fix the problem.
- The form announces success with `role="status"` and moves focus to the message.
- Autocomplete attributes on name, tel and email.
- A honeypot field and rate limiting stop spam; no CAPTCHA puzzles.

## Language and structure

- `<html lang="en">` on English pages, `lang="es"` on Spanish pages and on Spanish runs inside English pages.
- One `h1` per page, headings in order, landmarks (`header`, `nav`, `main`, `footer`).
- Phone numbers are real `tel:` links; addresses use `<address>`.

## Motion and media

Respect `prefers-reduced-motion` (see Motion). Videos get captions and transcripts; nothing autoplays with sound.

## Statement

Publish an Accessibility page with the conformance target, the date of the last audit and a phone number and email for reporting barriers. Link it in the footer.
