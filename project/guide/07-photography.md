# Photography

## The portrait

`assets/Photography/ramin-montakab-portrait.png` is a 455×488 transparent cut-out: navy suit, white shirt, deep red foulard tie, brighter red pocket square. It is the source of the palette (the vermilion accent is the tie’s red at the pocket square’s brightness) and appears in the Hero, the ArticleByline avatar and the social image.

- Always place it on the **portrait panel**: `radial-gradient(120% 80% at 50% 30%, portrait-glow, portrait 62%)`. In light that is white into pewter-100; in dark, navy-600 into navy-800, which keeps the suit’s edge visible against the midnight page.
- Anchor it to the bottom edge of the panel, never floating. Crop at the torso; never crop the head.
- Panel ratio 4:5 in the hero, `radius-lg`, `shadow-xl`.
- The current file is small. Before launch, replace it with a cut-out at least 1600px tall from the original shoot, and export WebP/AVIF at 1x and 2x.

## Commissioning new photography

- **Subject**: Ramin at work: reviewing a file, talking with a client (consented), walking outside the Santa Ana office on N Broadway, in a deposition-room setting. Real places he uses.
- **Wardrobe**: the navy suit; white or pale blue shirt; a red tie, deep or bright. It keeps the photographs inside the palette.
- **Light**: natural window light or soft key light, warm-neutral white balance, real shadows. No ring-light glare.
- **Backgrounds**: architectural Southern California (stucco, palms in soft focus, office glass) or a seamless mid-grey for cut-outs.
- **Crops**: 4:5 portraits, 3:2 environmental, 16:10 for Insights covers.

## Never

Stock images of car crashes, ambulances, neck braces, crying people, gavels, scales of justice, courthouse columns or handshakes. Photos of clients without written consent. AI-generated people.

## Insights covers

Use real photographs of the subject (a freeway interchange for a car-accident article, a rideshare pickup zone for an Uber article), shot or licensed, without identifiable injured people. When none exists, the InsightCard falls back to the navy pip panel with the category icon.

## Alt text

Describe what matters to the page: “Ramin Montakab in a navy suit and red tie” for the hero portrait. Decorative images (the fallback panel, the pip pattern) get `alt=""` or `aria-hidden="true"`. The byline avatar is decorative because the name is next to it.

## Social image

`assets/Social/og-default.png` (1200×630): the reverse wordmark, descriptor and line “Personal injury counsel for Southern California families.” on `brand-deep`, the portrait on a navy panel with a pip field. Use it for `og:image` and `twitter:image` on pages without their own cover.
