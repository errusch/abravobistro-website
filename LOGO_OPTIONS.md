# á'Bravo Logo Refresh Options

## Option A: Classic Refresh

File: `public/images/abravo-logo-classic-refresh.svg`

This keeps the current logo's core ingredients: teal wordmark, black field, and the `eat well...enjoy` line. The goal is continuity. It should feel like the existing brand cleaned up for modern web use, not a reinvention.

Best use: legacy recognition, social profile images, or if the restaurant wants customers to immediately recognize the old site identity.

## Option B: Fresh Luxe

File: `public/images/abravo-logo-fresh-luxe.svg`

This moves the brand toward high-end bistro: cream serif wordmark, antique gold detail, espresso background, and a more editorial `BISTRO · BELLEVUE, WI` line. It is designed to match the darker, more cinematic website direction.

Best use: website header, Vercel launch, printed menus, reservation cards, and any touchpoint where á'Bravo should feel more premium.

## Current Website Header

The header currently uses **Option B: Fresh Luxe** via `LogoLockup` in `app/page.tsx`.

To try the classic version in the header, change:

```tsx
<LogoLockup variant="fresh" tone={atTop ? "dark" : "light"} compact />
```

to:

```tsx
<LogoLockup variant="classic" tone={atTop ? "dark" : "light"} compact />
```
