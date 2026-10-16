# Alert
An inline message with icon, title and body in four tones.

**Use** `info` for neutral notices, `success` after a form is sent, `warning` for deadlines, `danger` for failures. Every alert carries an icon and words, never color alone. **Don’t** stack more than one alert, or use `danger` for marketing urgency.

## Blade
```blade
<x-alert tone="warning" title="Time limits apply">
  Most California injury claims must be filed within two years…
</x-alert>
```

| Prop | Values | Notes |
| --- | --- | --- |
| `tone` | `info` · `success` · `warning` · `danger` | Sets icon (info, circle-check, triangle-alert, circle-alert) and role: `status` for success, `alert` for danger, `note` otherwise. |
| `title` | string | One line. |

## Spec
- Ground `*-soft`, 1px border of the tone color at 28–32% (`color-mix`), `radius-sm`, padding `space-4` / `space-5`, 20px icon in the tone color.
- Title 15px/600 `ink`; body 15px `ink-muted`.
