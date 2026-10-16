# SectionHeader
Eyebrow, display headline and optional lead that open every content section, with an optional arrow link on the right.

**Use** left-aligned by default; centered only for short testimonial and FAQ sections. **Don’t** stack two SectionHeaders, or write an eyebrow that repeats the headline.

## Blade
```blade
<x-section-header eyebrow="Practice areas" title="How I can help after an injury"
                  lead="Every case starts with a conversation…"
                  :action="['All practice areas', route('practice.index')]" />
<x-section-header eyebrow="Client stories" title="In their words" align="center" />
```

| Prop | Values | Default |
| --- | --- | --- |
| `level` | `h2` · `h3` | `h2` |
| `size` | `md` (`display-md`) · `lg` (`display-lg`) | `md` |
| `align` | `start` · `center` | `start` |

## Spec
- Eyebrow `eyebrow` in `accent-ink`, `space-3` above the headline. Lead `lead` in `ink-muted`, max 58ch.
- `space-12` between the header and the section content.
