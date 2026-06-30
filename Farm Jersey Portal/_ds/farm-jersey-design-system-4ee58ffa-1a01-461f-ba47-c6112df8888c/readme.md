# Farm Jersey — Design System

Farm Jersey is an Arm's-Length Organisation (ALO) that helps Jersey's local **farmers, growers and fishers** reach more customers and access funding to grow sustainable, resilient businesses. It administers the island's **Rural Support Scheme (RSS)** — grants, loans and advice — and runs initiatives like **Cultivate** (rural skills) and **Genuine Jersey** (the local-produce mark). The flagship product is the public marketing + support **website**, fronting a member "My Dashboard".

This repository is the brand's design system: tokens, fonts, brand assets, reusable React components, foundation specimen cards, and a website UI kit.

## Sources
- **Figma:** "Farm Jersey.fig" (attached). Built on a Relume/"ElectroFleece" component framework, re-themed for Farm Jersey. Real site screens live on the *Site-Design* page (Home, About, Resources, Apply for a grant, Producers Listing, Events, Genuine Jersey, Honesty Box, Next-Gen Dairy, …). Foundations on *Color*, *Typography*, *Icons*; Figma Variables under collections *Colors* (71) and *Ungrouped* (21).
- **Uploads:** Brockmann font family (8 OTF weights/italics) and `FJ LOGO.svg` (the wordmark).
- Token values, palette, and the shield geometry were extracted directly from the file — not from any public Relume spec.

---

## CONTENT FUNDAMENTALS

**Voice.** Warm, civic, and grounded — a public body that genuinely champions islanders. Confident but never corporate; it speaks *for* the rural community, not down to it.

**Person.** Inclusive **"we" / "our"** for Farm Jersey and the island ("our rural and marine economy", "what we grow in Jersey, grows us"), and **"you / your"** when addressing a producer ("access your dashboard", "tell us about your business"). Collective ownership is the through-line.

**Casing.** Sentence case for body and most UI. Headlines are sentence case with a **full stop as a design device** — short declarative statements end in a period: *"Industry Events."*, *"Cultivate Jersey."*, *"Stay connected."* Proper nouns are capitalised: Rural Support Scheme (RSS), Genuine Jersey, Cultivate.

**Spelling.** British English — *revitalising, apprenticeships, programme, organisation, prioritise.*

**Tone examples (verbatim from the file):**
- *"Jersey's Rural Economy: The Foundation of Our Future."*
- *"Farm Jersey exists to help our rural and marine economy thrive… driving our island towards a sustainable, vibrant and inclusive rural economy."*
- *"Helping build the future of the rural economy and supporting the farmers and fishers who bravely grow and catch our food."*
- *"What We Grow in Jersey, Grows Us"*

**Length.** Headlines are short and punchy. Body is plain-language and practical, explaining *who qualifies* and *what to do next*. Calls to action are verbs: *Apply for the RSS, Get Business Support, Learn more, Log in, Apply to join.*

**Emoji:** none. **Iconography** carries visual support instead (see ICONOGRAPHY).

---

## VISUAL FOUNDATIONS

**The big idea — square, honest, high-contrast.** This is *not* a soft, rounded, gradient brand. Corners are **hard (radius 0)**, lines are **1px solid black**, and contrast is high. It feels like clean signage / printed matter for the land.

**Colour.**
- **Spring Green `#AAF7A6`** (`--primary-60`) is the signature — used as a full-bleed section colour and accent, almost always paired with **deep field green `#395237`** text. A softer `#9DD2A4` appears in patterns.
- **Soil Tan `#C69A71`** (`--neutral-20`) is the earth accent — used as a full-bleed background behind mission quotes, with white text.
- **Dark `#231F20`** is the near-black surface for mission bands, the newsletter block and the footer.
- **Ink `#0E0F11` / pure black** for headlines, body and borders. White `#FFFFFF` is the dominant page background.
- Full neutral, primary, secondary (mint), and semantic scales (success/warning/error/info, 10–100) come from Figma Variables → `tokens/fig-tokens.css`.

**Type.**
- **Inter** does nearly all the work — headings (weight 600, tracking **−0.022em**) and body (weight 400, tracking **−0.011em**, line-height 1.5). Headings are large and tightly tracked.
- **Brockmann** (uploaded) is reserved for the **largest hero display** moments (up to ~196px in the file) — wordmark-scale statements only.
- Scale: Display (clamp→196) · H1 56 · H2 48 · H3 40 · H4 32 · H5 24 · H6 20 · Body 18/16/14.

**Layout.** Centred max-width container **1280px**, generous **~96px** section padding, 5% side gutters. Hero content is often centre-aligned; content sections use 2- and 3-column grids. Sections alternate between white, a faint grey (`#F9FAFB`), tan, dark, and green for rhythm — **never more than is needed.**

**Backgrounds & motifs.** Mostly flat colour. The brand's signature texture is a **decorative farm pattern** — chevrons, dot diamonds/grids, checker triangles and circle outlines in deep green — tiled over the spring-green "Cultivate" sections (`assets/brand/farm-pattern.svg`). Real **photography** is warm and documentary: people at events, fields, dairy, markets. No illustration, no 3D, no stock-y gradients.

**Borders, cards & elevation.** Cards are either **borderless** (image + text, the events/blog pattern) or a **1px solid black box**. Corners square. Shadows are **restrained and cool-grey** (`rgba(93,99,112,…)`), used sparingly — most separation is done with **lines and colour blocks**, not shadow. Overlays (modal/toast) use a heavier `rgba(0,0,0,0.25)`.

**Buttons & interactive.** Primary = **solid black**, white text. Accent = **green** with deep-green text. Secondary = **1px black outline**. Ghost = bare text + arrow. All square. Links are black, underlined, frequently with a trailing **arrow** ("Learn more →").

**Motion.** Quiet and functional — short (~120–180ms) ease transitions on colour/opacity for hovers and toggles. No bounces, no decorative loops. Hover = subtle darken / colour shift; press relies on native. Focus = a **green focus ring** (`--primary-50`) on inputs.

**Radius rule.** Square everywhere; the only round elements are **avatars** and **status dots/count badges** (deliberate exceptions).

---

## ICONOGRAPHY

- The file uses **Material Icons (Filled)** throughout (hundreds of glyphs across Action, Alert, Communication, Content, Navigation, Social, etc.). We ship these via **Material Symbols (Outlined, FILL 1)** from Google Fonts — a faithful, CDN-available match — exposed as the `.material-symbols-outlined` helper class and consumed by components through icon-name props (e.g. `iconTrailing="arrow_forward"`, `<FeatureIcon icon="eco" />`). *Substitution flagged: Material Symbols stands in for the file's static Material Icon instances.*
- **Brand marks** are vector and live in `assets/brand/`: the **FARM JERSEY wordmark** (`farm-jersey-wordmark.svg`), the geometric **FJ shield** (`fj-shield.svg`, also inlined in the `Logo`/`Shield` components for bundle reliability), and the **farm pattern** tile (`farm-pattern.svg`).
- **Social** icons in the footer use Material Symbols equivalents.
- **No emoji**, no unicode-glyph icons.

---

## INDEX

**Foundations**
- `styles.css` — global entry point (import this one file). `@import`s everything below.
- `tokens/fig-tokens.css` — raw Figma Variables (palette + numeric tokens, incl. mobile mode).
- `tokens/colors.css` — brand + semantic colour aliases (`--fj-green`, `--text-heading`, `--surface-dark`, …).
- `tokens/typography.css` — type scale + `.fj-*` helper classes.
- `tokens/fonts.css` — `@font-face` (Brockmann) + Inter & Material Symbols imports.
- `tokens/spacing.css` — spacing scale, radius (0), borders, shadows, layout.
- `fonts/` — Brockmann OTFs. `assets/brand/` — logo, shield, pattern. `assets/img/` — photography.

**Components** (`window.FarmJerseyDesignSystem_4ee58f`)
- *actions/* — `Button`, `Link`
- *forms/* — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- *data-display/* — `Card`, `Table`, `Tag`, `Badge`, `Avatar`, `AvatarGroup`
- *feedback/* — `Alert`, `Toast`, `Tooltip`, `Modal`
- *navigation/* — `Breadcrumbs`, `Tabs`, `Collapse`, `Accordion`
- *brand/* — `Logo`, `Shield`, `FeatureIcon`, `Navbar`, `Footer`

**Specimen cards** — `guidelines/*.card.html` (Colors, Type, Spacing, Brand) + each component directory's `*.card.html`. All render in the **Design System tab**.

**UI kit** — `ui_kits/website/` — Home, Resources, and Apply screens (interactive). Open `index.html`.

**Skill** — `SKILL.md` (Agent Skills compatible).
