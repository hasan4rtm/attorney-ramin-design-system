# OfficeCard
One RTM Law office: city, street address, tap-to-call number and a directions link.

**Use** on Contact, in a 3-column grid. Office data comes from `config/site.php` and must match rtmlawfirm.com and the Google Business Profiles. **Don’t** list an address without its phone number.

## Blade
```blade
@foreach (config('site.offices') as $office)
  <x-office-card :office="$office" />
@endforeach
```

Offices published on rtmlawfirm.com: Santa Ana (1327 N Broadway, (949) 287-4342), Los Angeles (145 S Spring St, (323) 990-8853), San Diego (591 Camino De La Reina, (858) 330-3314), Torrance (2916 W 16th St, (424) 999-7553), Bakersfield (4900 California Avenue, (661) 402-3200), Victorville (16888 Nisqualli Rd, (760) 278-7810).

## Spec
- `raised`, `line`, `radius-md`, padding `space-6`. City `title-md`; address `<address>` `body-md` `ink-muted`.
- Phone: 16px/600 `ink`, tabular figures, `tel:` link, hover `accent-ink`, 18px icon `ink-subtle`.
- Foot: 1px `line` top; arrow link “Get directions” (external) and an “Español” badge.
- Add `LegalService` JSON-LD per office.
