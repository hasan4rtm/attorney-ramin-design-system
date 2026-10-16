# Motion

Motion confirms an action; it never performs. The site should feel like a well-run office: things respond promptly and quietly.

| Token | Value | Use |
| --- | --- | --- |
| `duration-fast` | 120ms | Hover and focus color changes |
| `duration-base` | 200ms | Buttons, toggles, chevrons, arrow nudges |
| `duration-slow` | 320ms | Mobile menu sheet, accordion height, header shadow on scroll |
| `duration-reveal` | 560ms | A section’s one-time fade-up |
| `ease-standard` | cubic-bezier(0.2, 0, 0, 1) | State changes |
| `ease-enter` | cubic-bezier(0, 0, 0.2, 1) | Things arriving |
| `ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Things leaving (use ~70% of the enter duration) |

## What moves

- **Hover**: color and border changes; arrow icons slide 3px right; cards gain `shadow-sm`. Nothing scales.
- **Header**: gains `raised`, its hairline and `shadow-sm` after 8px of scroll.
- **Mobile menu**: scrim fades in, sheet slides in from the right.
- **Accordion**: chevron rotates 180°; the panel height animates where `interpolate-size` is supported.
- **Reveal**: section content may fade up 12px over `duration-reveal` the first time it enters the viewport (Alpine `x-intersect.once`). It starts visible if JavaScript fails, and never applies to the hero or to legal text.
- **Livewire**: buttons show a spinner and “Sending…” while `wire:loading`; success messages replace the form without a page jump and receive focus.

## Theme switching

Switching themes is instant, with no cross-fade, so text never passes through low contrast. The theme is set before first paint, so a returning dark-mode visitor never sees a light flash (see the Laravel section).

## Reduced motion

Under `prefers-reduced-motion: reduce`, all transitions and animations drop to near zero, reveal is disabled and smooth scrolling is off. The `bundle.css` and generated `app.css` both include the rule.

## Don’ts

No parallax, no auto-advancing carousels, no counters that tick up to a settlement amount, no animated backgrounds, no bounce or elastic easing.
