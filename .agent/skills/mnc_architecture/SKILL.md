---
name: MNC Architecture Builder
description: A guidebook and set of patterns for building "Fortune 500" style corporate websites using React.
---

# MNC Architecture Builder

This skill provides the architectural patterns and design principles required to build "Formal Industry-Grade" websites (similar to R Systems, Accenture, Salesforce).

## Core Design Principles

1.  **Authority & Trust**:
    *   Use "Standard" sans-serif fonts (Inter, Roboto, Montserrat) for high legibility.
    *   Corporate Blue/Navy palettes mixed with ample white space.
    *   **Trust Signals**: Always place client logos, certifications, and awards "above the fold" or immediately following the hero.

2.  **Navigation Depth**:
    *   Implement **Mega Menus** instead of simple dropdowns.
    *   Structure: Services | Industries | Insights | Company.
    *   Menus should be comprehensive, often containing 3-4 columns of links.

3.  **Layout Patterns**:
    *   **The Hero**: Carousel or Cinematic Video Background. Low kinetic energy (slow movement), high visual fidelity.
    *   **The Grid**: Rigorous alignment (often 12-column). Cards should be uniform.
    *   **The Fat Footer**: 4-6 columns. Must include Legal, Privacy, Sitemap, and Office Locations.

## Component Specifications (React)

### 1. The Mega Menu
Structure your data as a nested object:
```javascript
const menuData = {
  capabilities: {
    columns: [
      { title: "Core Services", items: ["Cloud", "Data", "AI"] },
      { title: "Consulting", items: ["Strategy", "Compliance"] },
      { title: "Featured", component: <FeaturedCard /> }
    ]
  }
}
```

### 2. The Corporate Hero
*   Avoid "bouncy" animations. Use `transform: scale(1.05)` over 10s (Ken Burns effect).
*   Overlay text must have high contrast (White text on Dark overlay).

### 3. Typography Scale
*   H1: 48px - 64px (Bold/Heavy)
*   H2: 32px - 40px (SemiBold)
*   Body: 16px - 18px (Regular, high line-height 1.6)

## Color Palette (The "Mega Site" Blend)
*   `--color-primary`: #0A192F (Deep Navy - Authority)
*   `--color-accent`: #FF7A3D (Vibrant Orange - Innovation/Skifin)
*   `--color-surface`: #FFFFFF (Cleanliness)
*   `--color-text`: #333333 (Readability)

## React Implementation Tips
*   Use `CSS Modules` for scoped styling to prevent leakage in large apps.
*   Structure: `src/components/layout/MegaMenu`, `src/components/sections/TrustSignals`.
