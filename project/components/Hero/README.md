# Hero
The opening of the homepage: the thesis headline, a first-person lead, the two contact actions, three proof points and the portrait.

**Use** once per page. The homepage uses `display-2xl`; interior pages use the `compact` variant with `display-xl` and no portrait. **Don’t** use stock photography, background video, or a headline longer than eight words.

## Blade
```blade
<x-hero eyebrow="Personal injury attorney · Southern California">
  <x-slot:title>Serious injuries deserve <em>personal attention.</em></x-slot:title>
  I’m Ramin Montakab, principal attorney at RTM Law, APC. …
  <x-slot:proof>
    <x-hero.proof icon="award">Super Lawyers® 2025–2027</x-hero.proof>
    <x-hero.proof icon="languages">Hablamos español</x-hero.proof>
    <x-hero.proof icon="map-pin">Six California offices</x-hero.proof>
  </x-slot:proof>
</x-hero>
```

| Prop / slot | Notes |
| --- | --- |
| `eyebrow` | Two to six words, preceded by the 7px `pip` square. |
| `title` | `<em>` renders in Libre Caslon Text italic at 0.86em — use it for the last two or three words only. |
| default slot | The lead, `lead` style, `ink-muted`, max 54ch. |
| `proof` | Up to three items: verifiable facts only (recognitions with years, languages, offices). |
| `portrait` | Defaults to the cut-out portrait; pass `false` on interior pages. |

## Spec
- Grid 1.15fr / 0.85fr at lg, `space-16` gap, padding `space-24` top and bottom (`space-20` on phones, portrait stacks under the copy and shrinks to 320px wide).
- Portrait panel: 4:5, `radius-lg`, `shadow-xl`, radial light from `portrait-glow` into `portrait`, image bottom-anchored at 104% width. Caption card bottom-left: `raised`, `line`, `radius-sm`, `shadow-md`.
- Proof row: 1px `line` top border, 14px `ink-muted`, 18px icons in `accent-ink`.
