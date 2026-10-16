# FaqAccordion
Questions and answers built on native `<details>`, one open at a time is not enforced.

**Use** on practice pages and Contact, four to eight questions. Answers state the rule plainly and cite it when it is law (“Code of Civil Procedure § 335.1”). **Don’t** hide required legal notices inside an accordion.

## Blade
```blade
<x-faq>
  <x-faq.item question="Do I pay anything up front?" open>
    No. RTM Law handles injury cases on a contingency fee…
  </x-faq.item>
</x-faq>
```

Emit `FAQPage` JSON-LD from the same data.

## Spec
- 1px `line` above the list and under each item. Summary: `title-sm` `ink`, padding `space-6` vertical, hover `accent-ink`; 32px chevron circle (1px `line`) rotates 180° over `duration-base` and fills `page-subtle` when open.
- Answer: `body-md` `ink-muted`, right padding `space-16` so lines stay short.
- Animate height with `interpolate-size: allow-keywords` where supported; otherwise it opens instantly.
