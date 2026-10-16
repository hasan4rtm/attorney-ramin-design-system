# MobileMenu
A right-hand sheet below 1024px with the full navigation set in Caslon, the two contact actions and the theme cycle button.

**Use** only from the SiteHeader menu button. **Don’t** nest sub-menus; practice areas live on their own index page.

## Blade + Alpine
```blade
<div x-data="{ open: false }" @keydown.escape.window="open = false">
  <x-button variant="secondary" size="md" class="lg:hidden" aria-label="Open menu"
            @click="open = true" ::aria-expanded="open" icon="menu" />
  <template x-teleport="body">
    <div x-show="open" x-transition.opacity class="fixed inset-0 z-overlay bg-scrim" @click="open = false"></div>
    <nav x-show="open" x-trap.noscroll="open" x-transition:enter="transition duration-slow ease-enter"
         x-transition:enter-start="translate-x-full" role="dialog" aria-modal="true" aria-label="Menu"
         class="fixed inset-y-0 right-0 z-modal flex w-[min(380px,92vw)] flex-col rounded-l-lg bg-overlay p-6 shadow-lg">
      …
    </nav>
  </template>
</div>
```

Requires the Alpine Focus plugin for `x-trap` (bundled with Livewire 3).

## Spec
- Scrim `scrim` at `z-overlay`; sheet `overlay`, `radius-lg` on the left corners, `shadow-lg`, `z-modal`, enters from the right over `duration-slow` / `ease-enter`.
- Links: `display-xs` (Caslon 26px), 14px vertical padding, 1px `line` dividers, chevron in `ink-subtle`; current page in `accent-ink`.
- Footer: primary and secondary buttons, `lg`, full width; then “Ver en español” and the theme cycle button.
- Escape and the scrim close it; focus returns to the menu button.
