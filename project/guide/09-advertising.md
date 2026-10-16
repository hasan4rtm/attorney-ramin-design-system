# Attorney advertising

A lawyer’s website is a communication about legal services. In California it is governed by the Rules of Professional Conduct (Rules 7.1–7.5) and Business and Professions Code § 6157 and following. This section turns those rules into design requirements. It is a design checklist, not legal advice: Ramin, as the responsible attorney, approves the final wording, and the rules should be re-checked against the State Bar’s current text before launch.

## Requirements built into components

| Requirement | Where | Component |
| --- | --- | --- |
| Name and office address of the responsible lawyer (Rule 7.2) | Footer, Disclaimer page | SiteFooter, Disclaimer `advertising` |
| No false or misleading statements, no unjustified expectations (Rule 7.1) | Results, testimonials | Disclaimer `results`, `testimonial` |
| “No fee unless we win” must say whether the client owes costs (Rule 7.1 comment) | Any fee claim | FaqAccordion copy, Hero proof (fee claims kept out) |
| “Specialist” only if certified (Rule 7.4) | All copy | Voice & content word list |
| Firm name and trade names accurate (Rule 7.5) | Header, footer, bylines | “RTM Law, APC” |
| No attorney-client relationship from a form | Forms, contact page | Disclaimer `consultation`, ConsultationForm |
| SMS consent (TCPA) unchecked by default | Forms | Checkbox |

## Results

- Publish only results the responsible attorney has verified, with the amount, the case type and the year. Store them with a `verified_at` date.
- Say whether an amount is a settlement or a verdict, and whether it is gross.
- Place “Past results do not guarantee a similar outcome. Each case depends on its own facts.” directly under every result or group of results, at `caption` size in `ink-subtle` or stronger.
- Never animate amounts, total them (“$50 million recovered”) or round them up.

## Testimonials and reviews

- Real clients only, with written permission; first name and last initial.
- Quote reviews as written (trimming allowed, rewording not), with their source (“Google review”).
- Carry the testimonial disclaimer: “Testimonials do not constitute a guarantee, warranty or prediction regarding the outcome of your legal matter.”
- No paid or incentivized endorsements without disclosure.

## Recognitions

- Name the organization and the years: “Super Lawyers®, selected 2025–2027”, “Rising Stars, 2023–2024”. These are the years shown on rtmlawfirm.com; confirm before launch.
- Use official badge artwork only under the issuer’s license and terms; otherwise set the recognition in type, as the CredentialBar does.

## Site-wide

- Footer notice on every page: “Attorney advertising. This website is maintained by Ramin Montakab, RTM Law, APC, 1327 N Broadway, Santa Ana, CA, the attorney responsible for its content. The information here is general and is not legal advice. Contacting me through this site does not create an attorney-client relationship. Past results do not guarantee a similar outcome.”
- A Disclaimer page with the full text, and Privacy, Terms and Accessibility pages, all linked from the footer.
- Keep a dated archive of published pages; California requires lawyers to retain copies of advertising for a period after use.
- Content in Spanish carries the same notices in Spanish.
