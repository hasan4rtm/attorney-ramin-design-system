# Disclaimer
The legal notices that must travel with results, testimonials, forms and the site itself.

**Use** `results` directly under any case result, `testimonial` under reviews, `consultation` beside forms, `advertising` in the footer and on the Disclaimer page. The text lives in `lang/en/legal.php` and `lang/es/legal.php` so it is written once and reviewed once. **Don’t** shrink below 13px, lower contrast below `ink-subtle`, or hide it in an accordion.

## Blade
```blade
<x-disclaimer kind="results" />          {{-- inline caption --}}
<x-disclaimer kind="consultation" block />
```

| `kind` | Text |
| --- | --- |
| `results` | Past results do not guarantee a similar outcome. Each case depends on its own facts. |
| `testimonial` | Testimonials do not constitute a guarantee, warranty or prediction regarding the outcome of your legal matter. |
| `consultation` | Sending a message through this site does not create an attorney-client relationship. Please don’t share confidential information until we have spoken. |
| `advertising` | Attorney advertising. Ramin Montakab, RTM Law, APC, 1327 N Broadway, Santa Ana, CA, is responsible for this website. Its content is general information, not legal advice. |

## Spec
- Inline: `caption` (13px/1.5) `ink-subtle`, max 90ch.
- Block: `page-subtle` ground, 1px `line`, `radius-sm`, padding `space-4` / `space-5`, 18px icon `ink-subtle`.
- Final wording is the responsible attorney’s decision; see the Attorney advertising section.
