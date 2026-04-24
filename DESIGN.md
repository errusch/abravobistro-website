---
name: á'Bravo Bistro
description: >
  Timeless, warm, and sophisticated visual identity for an established
  Wisconsin bistro. The design evokes the feeling of a handwritten menu
  in a candlelit room — elegant without being stuffy, inviting without
  being casual.
version: alpha
colors:
  burgundy: "#5C1A1B"
  cream: "#F9F5EB"
  gold: "#C9A96E"
  taupe: "#F0EAE0"
  espresso: "#2C1810"
  espresso-light: "#3D2B1F"
  white: "#FFFFFF"
  on-burgundy: "{colors.white}"
  on-gold: "{colors.espresso}"
  on-cream: "{colors.espresso-light}"
typography:
  display:
    fontFamily: "Playfair Display"
    fontSize: 3rem
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  heading-lg:
    fontFamily: "Playfair Display"
    fontSize: 1.875rem
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
  heading-md:
    fontFamily: "Playfair Display"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.05em"
    fontFeature: "'smcp' on"
  body:
    fontFamily: "Inter"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Inter"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  accent:
    fontFamily: "Caveat"
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
  nav:
    fontFamily: "Inter"
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.05em"
    fontFeature: "'smcp' on"
  label:
    fontFamily: "Inter"
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
    fontFeature: "'smcp' on"
rounded:
  sm: 2px
  md: 6px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.white}"
    typography: "{typography.nav}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.burgundy}"
    typography: "{typography.nav}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.espresso}"
    typography: "{typography.nav}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.white}"
    opacity: 0.9
  button-secondary-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.white}"
  button-gold-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.espresso}"
    opacity: 0.9
  card:
    backgroundColor: "rgba(255, 255, 255, 0.4)"
    rounded: "{rounded.md}"
    padding: "32px 40px"
  badge-vegetarian:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
  badge-gluten-free:
    backgroundColor: "{colors.white}"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
  menu-section-title:
    typography: "{typography.heading-md}"
    textColor: "{colors.burgundy}"
  menu-item-name:
    typography: "{typography.body}"
    textColor: "{colors.espresso-light}"
    fontWeight: 600
  menu-item-price:
    typography: "{typography.body}"
    textColor: "{colors.burgundy}"
    fontWeight: 600
  menu-item-desc:
    typography: "{typography.body-sm}"
    textColor: "rgba(61, 43, 31, 0.55)"
  ornament-divider:
    textColor: "{colors.gold}"
    opacity: 0.5
---

## Overview

á'Bravo Bistro's visual identity is rooted in **handwritten warmth and old-world elegance**. The design should feel like a premium bistro menu brought to life — warm candlelight tones, classic serif typography, and handwritten accents that signal the personal touch of an owner-operated establishment established in 1999.

The emotional tone is: *inviting, timeless, locally rooted, quietly luxurious*. This is not a trendy spot with neon and stark minimalism. It is a place where you celebrate anniversaries and Sunday brunches.

## Colors

The palette draws from the physical space: deep burgundy walls, cream linen tablecloths, gold-accented fixtures, and dark espresso wood.

- **Burgundy (#5C1A1B):** The primary brand color. Used for headlines, the logo wordmark, prices, and primary call-to-action buttons. Evokes warmth, wine, and richness.
- **Cream (#F9F5EB):** The dominant background. Warmer than pure white, it feels like aged paper or linen. Used as the base for all content sections.
- **Gold (#C9A96E):** The sole accent. Used sparingly for decorative dividers, handwritten script text, borders, and hover states. Represents the "Bravo" in the name — a moment of applause.
- **Taupe (#F0EAE0):** A secondary background for alternating sections or cards. Slightly darker than cream for subtle layering.
- **Espresso (#2C1810):** Near-black for footer backgrounds and high-contrast moments.
- **Espresso Light (#3D2B1F):** The primary body text color. Softer than pure black, it reads as ink on cream without the harshness of #000.

### Color Usage Rules

- Burgundy text on cream passes WCAG AA (contrast ratio ~12:1).
- Gold text on burgundy is used only for large display type (script headings), not body copy.
- White text appears exclusively on burgundy or espresso backgrounds.
- Never use pure black (#000000) anywhere in the UI.

## Typography

Three typefaces create a layered typographic voice:

1. **Playfair Display** — The voice of tradition. Used for all headings, menu item names, prices, and body paragraphs. Its high contrast and ball terminals feel like a classic broadsheet or engraved menu.
2. **Inter** — The voice of clarity. Used for navigation, buttons, labels, badges, and small metadata. Its neutrality keeps the design from feeling overly ornate.
3. **Caveat** — The voice of personality. Used exclusively for handwritten accents: "Established 1999", section pre-titles ("Our Story", "Join Us"), and ornamental labels. It should feel like the chef signed the menu by hand.

### Scale

- Display headings scale from 3rem on mobile to 6rem on desktop.
- Menu section titles are always uppercase with wide letter-spacing (`0.05em`) to feel like printed menu headers.
- Body copy uses a relaxed line-height (`1.6`) for comfortable reading of long menu descriptions.

## Layout

- **Max content width:** `1152px` (`max-w-6xl` / `72rem`).
- **Page padding:** `24px` on mobile, consistent `24px`–`48px` on desktop.
- **Section vertical spacing:** `80px` to `112px` (`py-20` to `py-28`). Generous whitespace between sections lets the content breathe.
- **Grid:** A 2-column layout for menu items on desktop (`md:grid-cols-2`), single column on mobile.
- **Two-column splits:** The About section uses a 3:2 ratio (story to info card), separated by a thin gold vertical rule.

### Responsive Breakpoints

- Mobile-first. Key shift at `768px` (`md:`) for navigation, grid layouts, and typography scaling.
- Hero display text scales from `3rem` → `4.5rem` → `6rem`.

## Elevation & Depth

Depth is achieved through **layered backgrounds and texture**, not drop shadows.

- **Paper texture overlay:** A subtle SVG noise filter at 2% opacity overlays the cream background, preventing a flat digital feel.
- **Background images:** Sections like About and CTA use photographic backgrounds at very low opacity (10–15%) with sepia filters, creating atmospheric depth without distraction.
- **Parallax dividers:** Full-width image strips with `background-attachment: fixed` create visual rhythm between sections. Faded at top and bottom via gradient overlays.
- **Card backgrounds:** Info cards use `rgba(255,255,255,0.4)` over textured backgrounds — translucent, not solid.

No box-shadows are used on cards or buttons. The design avoids modern "floating UI" tropes in favor of a grounded, printed-page aesthetic.

## Shapes

- **Border radius is minimal.** Primary buttons use `6px` (`rounded-md`). Badges use `2px` (`rounded-sm`). Cards use `6px`.
- **Ornamental dividers:** Horizontal rules flanking a decorative Unicode symbol (❧, ⚜) replace horizontal lines. These are rendered in gold at 50% opacity.
- **Vertical dividers:** Thin `1px` lines in gold at 30% opacity separate content areas (e.g., the About section split).

## Components

### Buttons

All buttons share the same structural DNA: uppercase, wide tracking (`0.1em`), medium weight, generous padding (`16px 32px`), `6px` border radius. Three variants exist:

1. **Primary** — Burgundy fill, white text. Used for the main CTA ("View Our Menu", "Reserve a Table").
2. **Secondary** — Transparent fill, burgundy border and text. Used for alternative actions ("Call to Reserve").
3. **Gold** — Gold fill, espresso text. Used exclusively on dark backgrounds (CTA section on burgundy) for maximum contrast.

Hover states are subtle opacity shifts or fill-inversions. No animated transforms or elevation changes.

### Menu Item

A menu item consists of:
- **Name** — Playfair Display, semi-bold, espresso light.
- **Price** — Playfair Display, semi-bold, burgundy. Right-aligned.
- **Description** — Playfair Display, small, espresso light at 55% opacity.
- **Badges** — Small uppercase labels (V, GF, VG) rendered as pills. Vegetarian = gold fill. Gluten-Free / Vegan = white fill with gold border.

Menu items are arranged in a 2-column grid within each section. A thin ornamental divider separates menu sections.

### Cards

Info cards (Hours/Location, Awards) use a translucent white background (`rgba(255,255,255,0.4)`), a subtle gold border (`1px solid rgba(201,169,110,0.3)`), and `6px` border radius. They sit on top of textured or photographic backgrounds.

## Do's and Don'ts

- **Do** use generous vertical spacing between sections. The site should never feel cramped.
- **Do** keep the handwritten (Caveat) accents minimal. One or two per section maximum.
- **Do** use Playfair Display for all body paragraphs and menu descriptions. The serif texture is part of the brand.
- **Don't** use pure black (#000000) anywhere. Espresso light (#3D2B1F) is the darkest text color.
- **Don't** add drop shadows to cards or buttons. The design relies on layering and texture, not elevation.
- **Don't** use more than three font sizes within a single section. The hierarchy is: display → heading → body → small.
- **Don't** use the gold accent for large blocks of text. It is reserved for decorative elements, accents, and badges only.
