# Checkbox
Checkboxes and radio buttons with the label to the right and optional fine print beneath.

**Use** checkboxes for consent and independent options, radios for one choice such as preferred language. The SMS consent box is never pre-checked. **Don’t** hide consent text behind a link.

## Blade
```blade
<x-form.checkbox name="sms_consent" wire:model="smsConsent">
  I agree to receive calls and text messages about my inquiry from RTM Law at the number I provided.
  <x-slot:hint>Message and data rates may apply. Reply STOP to opt out. Consent is not a condition of service.</x-slot:hint>
</x-form.checkbox>
<x-form.radio-group name="language" label="Preferred language" :options="['en' => 'English', 'es' => 'Español']" />
```

## Spec
- 20px box, 1px `line-strong`, `radius-xs` (radios `radius-full`), `field` ground. Checked: `ink` fill with a `page`-colored check. Hover border `ink-muted`. Focus: 2px `focus` outline, 2px offset.
- Label 15px `ink`, `space-3` from the box; hint 13px `ink-subtle`. The whole label is the hit area.
