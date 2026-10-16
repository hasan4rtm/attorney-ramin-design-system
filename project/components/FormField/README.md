# FormField
Label, control, hint and error for text inputs, selects and textareas.

**Use** a visible label on every field; mark optional fields with “Optional” rather than starring required ones. Errors say what to fix. **Don’t** use placeholder text as the label, or validate while the visitor is still typing the first time.

## Blade
```blade
<x-form.input name="phone" label="Phone" type="tel" autocomplete="tel" wire:model.blur="phone"
              hint="We’ll call from (855) 786-9467." />
<x-form.select name="case_type" label="Type of case" :options="$caseTypes" wire:model="caseType" />
<x-form.textarea name="message" label="What happened?" wire:model.blur="message"
                 hint="A few sentences is enough. Don’t include medical record numbers." />
```

| Prop | Notes |
| --- | --- |
| `name` | Also the `id`; errors are read from `$errors->first($name)`. |
| `label` | Required. |
| `optional` | Adds the “Optional” marker. |
| `hint` | Linked with `aria-describedby`. |

On error the component sets `aria-invalid="true"` and points `aria-describedby` at the message.

## Spec
- Label `label-md` `ink`, `space-1.5` above the control. Optional marker 13px `ink-subtle`.
- Control: min-height 48px, padding 12px 14px, 16px text (prevents iOS zoom), `field` ground, 1px `line-strong`, `radius-xs`, `shadow-xs`. Placeholder `ink-subtle`.
- Hover border `ink-muted`. Focus: border `ink` + 1px `ink` ring (2px total).
- Error: border `danger`, message 14px `danger` with a 16px circle-alert icon.
- Disabled: `page-subtle` ground, `line` border, `ink-subtle` text.
- Select: native element with `appearance: none` and an 18px chevron in `ink-muted`. Textarea: min 140px, vertical resize.
