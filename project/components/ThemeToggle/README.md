# ThemeToggle
A three-way control — Light, Dark, System — that sets `data-theme` on `<html>` and remembers the choice in `localStorage`.

**Use** the segmented version in the desktop header and the single cycling button in the mobile menu. **Don’t** hide the System option; most visitors never touch the toggle, and System is the default.

## Blade + Alpine
```blade
{{-- resources/views/components/theme-toggle.blade.php --}}
<div x-data role="group" aria-label="Color theme"
     class="inline-flex gap-0.5 rounded-full border border-line bg-page-subtle p-[3px]">
  @foreach (['light' => 'sun', 'dark' => 'moon', 'system' => 'monitor'] as $mode => $icon)
    <button type="button" @click="$store.theme.set('{{ $mode }}')"
            :aria-pressed="$store.theme.mode === '{{ $mode }}'"
            aria-label="{{ ucfirst($mode) }} theme"
            class="grid size-8 place-items-center rounded-full text-ink-subtle hover:text-ink aria-pressed:bg-raised aria-pressed:text-ink aria-pressed:shadow-xs">
      <x-dynamic-component :component="'lucide-'.$icon" class="size-4" />
    </button>
  @endforeach
</div>
```

The `theme` Alpine store and the no-flash `<head>` script live in the Laravel implementation section (“Theme switching”). The store resolves `system` with `matchMedia('(prefers-color-scheme: dark)')` and listens for changes.

## Spec
- Track: `page-subtle`, 1px `line`, `radius-full`, 3px padding. Segments 32×32px, icons 16px `ink-subtle`.
- Pressed: `raised` fill, `ink` icon, `shadow-xs`. State changes over `duration-base`.
- Cycle button (mobile): 44×44px circle, 1px `line`, order light → dark → system; its `aria-label` announces the current mode.
