---
name: DRYP.
description: Objects with stories. Reimagined for coffee.
colors:
  primary: "#C05A3E"
  primary-deep: "#9E3E26"
  neutral-bg: "#FBF9F5"
  neutral-surface: "#F3EFE6"
  neutral-border: "#E6E1D8"
  charcoal: "#151413"
  charcoal-soft: "#262422"
  muted: "#75726B"
  olive: "#5B6652"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.charcoal-soft}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  card-object:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: DRYP.

## Overview

**Creative North Star: "Yesterday × Tomorrow (The Archaeological Kiln & Slow Morning)"**

DRYP. balances emotional cultural nostalgia with disciplined contemporary product design. The interface avoids cold, clinical tech-minimalism and rejects artificial retro pastiche. Instead, it behaves like an editorial monograph of physical ceramic objects—warm, tactile, respectful of whitespace, and deeply grounded in daily morning rituals.

The aesthetic tension exists between the reference (which originates in memory: 35mm film lenses, prehistoric skeletons, early space modules) and the execution (which belongs to contemporary ceramic craftsmanship, calibrated fluid dynamics, and crisp typographic hierarchy).

**Key Characteristics:**
- Organic warmth over digital sterility (bone porcelain backdrops, unpolished grog textures, iron oxide accents).
- Strict 3-level narrative hierarchy on products (Emoción → Historia → Objeto & Café) before any purchase action.
- Progressive drop rhythm (T−7, T−3, T−1, LIVE) that treats releases as cultural moments rather than commercial transactions.
- Conversational, human microcopy with zero corporate jargon ("Nothing brewing here yet", "Almost gone", "Gone for now").

## Colors

The palette is derived directly from raw ceramic minerals, stoneware grog, and freshly extracted coffee.

### Primary
- **Volcanic Ember / Terracotta** (`#C05A3E`): Used as the primary narrative punctuation mark, active countdown indicator, and warm accent. Never covers more than 10% of a screen.
- **Deep Terracotta Slip** (`#9E3E26`): Hover and active states for primary accent interactions.

### Secondary
- **Artisanal Sage / Kiln Olive** (`#5B6652`): Used for verification, stock preservation indicators, and positive purchase feedback ("Nice choice. Added!").

### Neutral
- **Bone Porcelain** (`#FBF9F5`): Primary canvas backdrop; clean, soft, reflective of natural light without the harshness of pure white (`#FFFFFF`).
- **Warm Sandstone** (`#F3EFE6`): Secondary surface for cards, drop switcher track, and callout blocks.
- **Muted Grog Border** (`#E6E1D8`): Structural hairline divider for architectural grid lines.
- **Cast Basalt / Charcoal** (`#151413`): High-contrast primary text, primary button backgrounds, and sculptural outlines.
- **Muted Stone** (`#75726B`): Technical metadata, batch numbers, and secondary descriptions.

### Named Rules
**The Rarity Rule.** Volcanic Ember (`#C05A3E`) is reserved strictly for points of emotional heat—the hanging coffee droplet, live countdown badges, and narrative highlights. Its restraint preserves its impact.
**The No-Pure-Black Rule.** Pure `#000000` is strictly forbidden; dark surfaces and typography always carry warm basalt undertones (`#151413`, `#1F1E1C`).

## Typography

**Display Font:** Instrument Serif (with Georgia fallback)  
**Body Font:** Plus Jakarta Sans (with system-ui fallback)  
**Label/Mono Font:** Space Mono (with monospace fallback)  

**Character:** An intentional dialogue between literary warmth (Instrument Serif's delicate editorial rhythm) and contemporary industrial precision (Plus Jakarta Sans and Space Mono).

### Hierarchy
- **Display** (Regular 400, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.08): Reserved for hero emotions and manifesto statements.
- **Headline** (Regular 400, `clamp(1.75rem, 3.5vw, 2.5rem)`, line-height 1.15): Section titles and product names.
- **Title** (Semi-bold 600, `1.25rem`, line-height 1.25): Card headers and dialogue prompts.
- **Body** (Regular 400, `1rem` / `0.875rem`, line-height 1.6, max 65ch): Storytelling passages and extraction explanations.
- **Label** (Bold 700, `0.75rem`, uppercase, letter-spacing 0.08em): Drop codes, batch tags, filter pills, and technical specs.

### Named Rules
**The Headline Emotion Rule.** Every product title must be accompanied by an italicized emotional headline (*"You never really outgrow dinosaurs."*) before technical dimensions or coffee notes are introduced.

## Layout

A flexible 12-column editorial grid structured with generous horizontal gutters (max container width 1280px) and substantial vertical breathing room (`80px–112px` section padding). 

Mobile layouts fold smoothly from two/three-column editorial spreads into single-column vertical scrolls without losing the relationship between the visual sculpture and its story.

## Elevation & Depth

DRYP. is flat-by-default with tactile tonal layering. Depth is communicated through natural tone differences (`#FBF9F5` over `#F3EFE6`), delicate 1px hairline borders (`#E6E1D8`), and soft diffuse ambient glows rather than aggressive drop shadows.

### Shadow Vocabulary
- **Ambient Sculpture Glow** (`box-shadow: 0 16px 32px -4px rgba(21, 20, 19, 0.08)`): Used exclusively under ceramic dripper previews.
- **Modal Elevation** (`box-shadow: 0 24px 48px -12px rgba(21, 20, 19, 0.25)`): Product detail modal and cart drawer overlay.

### Named Rules
**The Tonal Depth Rule.** Background tone changes (`#FBF9F5` → `#F3EFE6`) define hierarchy. Shadows never substitute for clear surface boundaries.

## Shapes

Forms are organic yet disciplined. Outer containers utilize generous rounded corners (16px–24px) reflecting the turned edge of a pottery wheel, while primary interactive triggers (buttons, search pills, countdown badges) use fully pill-shaped geometries (`9999px`).

## Components

### Buttons
- **Shape:** Pill (`rounded-full`, 9999px)
- **Primary:** Background `#151413`, text `#FBF9F5`, padding `16px 28px`. Subtle scale transform on active tap (`active:scale-95`).
- **Secondary:** Border 1px `#E6E1D8`, background transparent, text `#151413`. Hover fill `#F3EFE6`.

### Cards / Containers
- **Corner Style:** 24px (`rounded-3xl`) o 16px (`rounded-[16px]`)
- **Background:** `#F8F6F1` with 1px border `#E6E1D8`
- **Internal Padding:** 24px–32px
- **Hover State:** Border transitions to `#CDC5B8` with ambient sculpture lift.
- **The Pure Image Rule (Cards Clean Canvas):** Las imágenes de producto en las cards nunca deben tener tags, badges ni elementos superpuestos encima de la fotografía. La pieza cerámica debe exhibirse siempre limpia y sin obstrucciones visuales. Cualquier badge de estado (como *Agotado* / *Sold Out*) debe ubicarse exclusivamente fuera del contenedor visual de la imagen, en la esquina inferior derecha de la card (en la fila de precio).

### Drop Controller Switcher
- **Style:** Compact pill-track container in `#F3EFE6` with segmented tabs.
- **Active State:** `#151413` filled pill with glowing amber dot.

### Cart Drawer
- **Style:** 420px slide-over sheet in `#FBF9F5` with full microcopy integration.
- **Empty State:** Distinct circular ceramic icon with headline *"Nothing brewing here yet."*

## Do's and Don'ts

### Do:
- **Do** start every product experience with the 3 levels: Emoción → Historia → Objeto & Ritual.
- **Do** use exact brand microcopy (*"Nothing brewing here yet"*, *"Nice choice"*, *"Almost gone"*, *"Gone for now"*).
- **Do** maintain the Yesterday × Tomorrow tension (contemporary clean lines with nostalgic emotional anchors).
- **Do** present drippers as collectible sculptural objects meant to be kept on display.

### Don't:
- **Don't** use corporate e-commerce jargon ("Best-in-class", "Revolutionary coffee extraction", "Limited time offer").
- **Don't** use pure black (`#000000`) or pure cold white (`#FFFFFF`) for large surfaces.
- **Don't** display technical specifications before the emotional backstory has been established.
- **Don't** design literal retro kitsch or dated skeuomorphism; execution must remain crisp and modern.
- **Don't** colocar tags, badges o etiquetas encima de las imágenes de las cards. La fotografía debe mantenerse libre de obstrucciones visuales; los tags de estado van siempre en la parte inferior derecha de la card.
