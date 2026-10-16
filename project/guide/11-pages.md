# Page templates

The site map and the component order for each page. Every page uses SiteHeader, a `main` landmark and SiteFooter. Spanish pages mirror the English ones under `/es/`.

| Path | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Who Ramin is, what he handles, proof, how to reach him |
| `/about` | About Ramin | Story, values, milestones, recognitions |
| `/practice-areas` and `/practice-areas/{slug}` | Practice areas | One page per case type |
| `/results` | Case results | Verified settlements and verdicts |
| `/insights` and `/insights/{slug}` | Insights | Plain-language articles |
| `/media` | Media & speaking | Interviews, talks, community work (optional at launch) |
| `/contact` | Contact | The form, the phone, the offices |
| `/disclaimer`, `/privacy`, `/terms`, `/accessibility` | Legal | Required notices |

## Home

1. **Hero** — `display-2xl` headline, lead, primary + phone buttons, proof row, portrait.
2. **CredentialBar** — four facts, on `page`, directly under the hero.
3. **Practice areas** (`page-subtle`) — SectionHeader with “All practice areas” link, six PracticeAreaCards.
4. **Results** — SectionHeader, two featured CaseResultCards, three compact, Disclaimer `results`, “See all case results”.
5. **About teaser** — two columns: a `quote-lg` line in Ramin’s voice and a short bio with “Read Ramin’s story”.
6. **Testimonials** (`page-subtle`) — centered SectionHeader, one featured, two cards, Disclaimer `testimonial`.
7. **Insights** — SectionHeader, three InsightCards.
8. **FAQ** — four questions in `container-narrow`.
9. **CtaBand**.

## About Ramin

Compact hero (`display-xl` “About Ramin Montakab”, no buttons) → bio in `container-article` with one pull quote (`quote-lg`) → Timeline → CredentialBar (`brand` variant) → “Outside the office” paragraph with a photo → CtaBand. The bio needs Ramin’s own facts: education, bar admission year, why he practices injury law. None is invented here.

## Practice area detail

Breadcrumbs → compact hero (eyebrow “Practice area”, `display-xl` title, `lead`) → two columns at lg: content in `article-body` on the left (what to do, how fault is proven, what compensation covers, timeline) and a sticky ConsultationForm on the right (top offset = `header-height` + `space-6`) → FaqAccordion (practice-specific) → related CaseResultCards with Disclaimer → CtaBand. Wrongful death pages drop the icon and soften the CTA to “Talk with me when you’re ready”.

## Case results

Compact hero → filter row of case-type buttons (`secondary`, `sm`, pressed state uses `accent-soft` / `accent-ink`) → featured pair → compact grid → Disclaimer `results` at the top and bottom of the list.

## Insights article

Breadcrumbs → category eyebrow → `display-lg` title → ArticleByline → cover (16:10, square corners) → body in `container-article` using `article-body`, h2 in `display-sm`, h3 in `title-lg`, lists with pip bullets, block quotes in `quote-md` → Disclaimer block “This article is general information, not legal advice for your situation.” → three related InsightCards → CtaBand.

## Contact

Compact hero (“Talk to me about your case.”) → two columns: ConsultationForm (left, 7 columns) and a contact panel (right, 5 columns: phone in `title-lg`, hours, “Hablamos español”, Disclaimer `consultation`) → six OfficeCards → FaqAccordion.

## Legal pages

`container-article`, `display-lg` title, “Last updated” in `caption`, body in `body-lg` Libre Franklin (not Caslon, for scanning), numbered headings only where the document is genuinely numbered.

## Not found (404)

`display-xl` “This page isn’t here.”, a `lead` line “It may have moved. Try one of these instead.”, then arrow links to Home, Practice areas and Contact, and the phone number.
