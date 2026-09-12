# Vaksira — AntD Style Reference

A reference for keeping every component consistent with the "flat, restrained, AntD-native" look established on the landing page. The goal: every visual decision should trace back to an actual AntD token or component default — not an arbitrary value picked because it "looked fine."

---

## 1. Spacing — 8px grid, always

Use multiples of 8 (4 is the only allowed exception, for very tight gaps like icon-to-text).

| Use case | Value |
|---|---|
| Page/section padding | `48px` (sides), `96px` (top/bottom on hero-style sections) |
| Row/Col gutter | `[64, 48]` for major two-column splits, `48` for stat rows |
| `Space` between related items (buttons, nav) | `12`–`24` |
| `Space` between icon and label | `6` |

**Rule of thumb:** if you're about to type a spacing value that isn't a multiple of 8 (or 4), stop and round to the nearest one.

**Don't:** use Tailwind's arbitrary/default scale (`p-4`, `p-8`, `gap-3`) unless the value happens to already be a multiple of 8.

---

## 2. Color — one accent, everything else neutral

```js
const BRAND_COLOR = '#0bb6c2';
```

Set once via `ConfigProvider`:

```jsx
<ConfigProvider theme={{ token: { colorPrimary: BRAND_COLOR } }}>
```

The accent color appears in **at most two places per view**: the primary action (button/link) and one emphasis point (a heading span, an icon). It never tints shadows, backgrounds, or borders.

Everything else uses a neutral black-opacity ladder (AntD's own `colorText*` tokens, hardcoded here for reference):

| Role | Value |
|---|---|
| Primary text | `rgba(0,0,0,0.88)` (or default AntD text color — don't override) |
| Secondary/body text | `rgba(0,0,0,0.65)` |
| Tertiary/caption/footer text | `rgba(0,0,0,0.45)` |
| Hairline borders | `#f0f0f0` |
| Page background | `#fafafa` |
| Surface background (header, card, footer) | `#fff` |

**In a real app:** pull these from `theme.useToken()` (`colorText`, `colorTextSecondary`, `colorTextTertiary`, `colorBorderSecondary`) instead of hardcoding, so dark mode and future theme changes propagate automatically.

**Don't:** create gradients, colored shadows (`shadow-teal-200`), or tint multiple elements with the brand color "for cohesion." One accent, used sparingly, reads as more intentional than the same color repeated everywhere.

---

## 3. Elevation — shadow, never blur

One shadow level for resting/lifted elements (images, cards):

```css
box-shadow: 0 6px 16px rgba(0,0,0,0.06);
```

Low opacity (≤0.08), moderate blur, no spread, no color tint.

**Don't:**
- Use `backdrop-blur` + translucent white panels over a background image (glassmorphism-over-wallpaper is the #1 "AI-generated" tell).
- Stack multiple shadow layers or push opacity above ~0.15.
- Tint a shadow to match the brand color (`shadow-teal-100`).

If a component needs to feel more "raised" (e.g. a modal or dropdown), increase blur radius and offset slightly — don't increase opacity much.

---

## 4. Radius — one value, set globally

```jsx
<ConfigProvider theme={{ token: { borderRadius: 8 } }}>
```

Set once, inherited everywhere (buttons, images, future cards, inputs). Don't set per-element radius unless a component genuinely needs to differ (e.g. a pill-shaped tag).

**Don't:** use large radii (`24px`+, and definitely not `40px`) on outer containers. Oversized rounding on big surfaces is another strong "generated" signal — AntD's own default is 6–8px.

---

## 5. Typography — hierarchy via component, not utility classes

Use AntD's `Typography` components and let their built-in scale do the work:

```jsx
<Title level={1}>...</Title>       // page hero heading
<Title level={3}>...</Title>       // section/stat heading
<Paragraph>...</Paragraph>         // body copy
<Text type="secondary">...</Text>  // de-emphasized text
```

Don't manually decide font-size/weight/color combinations line-by-line (`text-sm text-gray-400 font-bold uppercase tracking-widest`). If the built-in levels don't cover a case, extend the theme's `fontSizeHeading*` tokens rather than one-off utility classes — that way every heading of the same "rank" looks the same across the whole app.

**Don't:** uppercase + letter-spacing everything for "polish" (`uppercase tracking-widest`). Reserve it for genuine labels/eyebrows, not body or footer text.

---

## 6. Component choice — use the primitive built for the job

Before hand-building something with `div`/`Title`/`Text`, check whether AntD already has a named component for it:

| Need | Use |
|---|---|
| A labeled number/metric | `Statistic` |
| Section separator | `Divider` |
| Grouped related items with consistent gaps | `Space` |
| Responsive column layout | `Row` / `Col` |
| Nav links | `Menu` (mode="horizontal") |

Reaching for the purpose-built component instead of reinventing it in raw markup is most of what "following AntD patterns" means in practice.

---

## 7. Motion — only when it communicates something

No hover-scale, no hover-translate, no decorative transitions. Rely on AntD's default interaction states (subtle color/opacity shift on buttons, menu items, links). Add motion only when it signals an actual state change (loading, expand/collapse, page transition) — never as ambient polish.

---

## 8. Layout shape — plain surfaces, not a "floating browser window"

Use `Layout` / `Layout.Header` / `Layout.Content` / `Layout.Footer` directly against a plain background color (`#fafafa` or `#fff`). Don't wrap the whole page in a large rounded card floating over a background photo — that's a stylistic pattern, not a structural one, and it fights AntD's actual layout components instead of using them.

---

## Quick gut-check before styling anything new

Ask, in order:
1. Is this spacing a multiple of 8?
2. Does this color come from the neutral ladder, or is it the one accent, used once?
3. Is this shadow subtle (≤0.08 opacity) with no color tint?
4. Is the radius the global theme value, not a one-off?
5. Is there an AntD component built for this exact thing?
6. Does this motion communicate a state change, or is it just decoration?

If the answer to any of these is "no," that's usually the thing making a component feel like AI-generated filler rather than a deliberate design choice.
