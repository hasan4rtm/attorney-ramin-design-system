# SiteFooter
The darkest navy band: lockup, short bio, three link columns, contact details and the required advertising notice.

**Use** on every page, unchanged. **Don’t** remove the legal paragraph or move it behind a link; California requires the responsible attorney’s name and address on advertising.

## Blade
```blade
<x-site-footer />
```

The component reads offices and social links from `config/site.php` so the firm can update them in one place.

## Spec
- Ground `brand-deep`; text `on-brand`; secondary text, column heads and legal copy `on-brand-muted`; dividers `line-brand`; focus `focus-on-brand`.
- Grid: 1.6fr / 1fr / 1fr / 1.2fr at lg, two columns at md, one on phones. Padding `space-20` top, `space-10` bottom.
- Column heads: `eyebrow` style. Links 15px; hover underline in `pip-on-brand`.
- Social buttons: 40px circles, 1px `line-brand`, 16px icons.
- Legal paragraph: `caption` (13px). Must include “Attorney advertising”, the responsible attorney and office address, “not legal advice”, “no attorney-client relationship”, and the past-results disclaimer.
