# CaseResultCard
A verified settlement or verdict: type, amount, case category, one-line summary and year · county.

**Use** two featured cards with the `figure` style, compact cards with `display-sm` in a 3-column grid. Always place the Disclaimer “Past results do not guarantee a similar outcome” directly under the grid. **Don’t** publish an amount the responsible attorney hasn’t verified, round up, or show gross figures as net without saying so.

## Blade
```blade
@foreach ($results as $result)
  <x-result-card :featured="$loop->index < 2" :type="$result->type" :amount="$result->amount"
                 :category="$result->category" :year="$result->year" :county="$result->county">
    {{ $result->summary }}
  </x-result-card>
@endforeach
<x-disclaimer kind="results" />
```

Store results in a `case_results` table with a `verified_at` timestamp; the query only returns verified rows.

## Spec
- Card: `raised`, `line`, `radius-md`; padding `space-10` (featured) or `space-8`.
- Type: `eyebrow` in `accent-ink` with a 6px `pip` square. Amount: `figure` (64px, phone 48px) or `display-sm`, `ink`, lining figures, no wrap.
- Category `title-md` / `title-sm`; summary `body-md` `ink-muted`; foot `caption` `ink-subtle` above a 1px `line`.
