# Timeline
A vertical record of career milestones for the About page.

**Use** for dated, verifiable facts in order: admission, recognitions, firm milestones. The final item can be “Today”. **Don’t** use it for process steps (use a numbered list) or pad it with undated items.

## Blade
```blade
<x-timeline>
  <x-timeline.item year="2023" title="Named a Super Lawyers Rising Star">Selected again in 2024.</x-timeline.item>
  <x-timeline.item year="2025" title="Selected to Super Lawyers">Recognized for 2025 through 2027.</x-timeline.item>
  <x-timeline.item year="Today" title="Principal Attorney, RTM Law, APC" current>…</x-timeline.item>
</x-timeline>
```

The three items shown are the facts published on rtmlawfirm.com. Add education and bar admission year once Ramin confirms them.

## Spec
- Three columns: 120px year (`display-xs`, right-aligned), 24px rail, content. Rail: 1px `line`; markers 9px squares with a 1.5px `ink-subtle` border on `page`; the current item is a solid `pip` square.
- Title `title-sm`; body `body-sm` `ink-muted`; `space-10` between items. On phones the year moves above the title.
