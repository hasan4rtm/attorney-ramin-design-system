# Shape & elevation

## Radius: tailored edges

A good suit has crisp lapels and soft shoulders. Controls get the crisp edge; surfaces get a gentle one.

| Token | Value | Use |
| --- | --- | --- |
| `radius-none` | 0 | Photography, full-bleed bands, the pip |
| `radius-xs` | 2px | Buttons, inputs, selects, checkboxes, badges |
| `radius-sm` | 4px | Alerts, disclaimers, menus, tooltips, the portrait caption card |
| `radius-md` | 8px | Cards, the form panel, inset CtaBand |
| `radius-lg` | 16px | Portrait panel, dialogs, mobile menu sheet |
| `radius-full` | 9999px | Avatars, the theme toggle, icon wells, social buttons |

Nested corners: inner radius = outer radius − padding (never larger than the outer).

## Borders

- 1px everywhere. `line` for dividers and card edges, `line-strong` for anything a person operates (inputs, checkboxes, secondary buttons), `line-brand` on navy.
- Focus adds a ring; it never thickens the border by itself except inputs, where the border turns `ink` and a 1px `ink` ring joins it.
- No colored side borders on cards.

## Shadows

| Token | Use |
| --- | --- |
| `shadow-xs` | Inputs and secondary buttons at rest |
| `shadow-sm` | Scrolled header, hovered cards |
| `shadow-md` | Dropdowns, the consultation form panel, the portrait caption card |
| `shadow-lg` | Mobile menu sheet, dialogs, toasts |
| `shadow-xl` | The hero portrait panel |
| `shadow-focus` | Focus ring as box-shadow where an outline would be clipped |

Light-theme shadows are tinted with `ink` (navy), never black. In dark they deepen to black at 50–80%, but elevation reads mainly from the surface step, so a floating element always moves up a surface (`raised` → `overlay`) as well.

## Layers

| Token | Value | Use |
| --- | --- | --- |
| `z-base` | 0 | Content |
| `z-raised` | 10 | Hovered cards, sticky in-page nav |
| `z-sticky` | 30 | Site header |
| `z-dropdown` | 40 | Menus, popovers |
| `z-overlay` | 50 | Scrim |
| `z-modal` | 60 | Mobile menu, dialogs |
| `z-toast` | 70 | Toasts, the focused skip link |
