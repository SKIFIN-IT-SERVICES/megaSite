---
name: MNC Architecture Builder
description: Guidebook for building content-rich, visually diverse enterprise sites.
---

# MNC Architecture Builder v2

## Page Template (8 Sections)

| # | Section | Visual Style | Content |
|---|---------|--------------|---------|
| 1 | **Hero** | Full-width Img/Video | Animated H1, Subheading, CTAs |
| 2 | **Overview** | Solid Color A | Description + **High-res Image** |
| 3 | **Features** | Gradient A | **9+ Cards** (Glassmorphism) |
| 4 | **Carousel** | Solid Color B | Tech Stack / Client Logos (Infinite scroll) |
| 5 | **Process** | Solid Color A | Zig-zag layout with **images per step** |
| 6 | **Stats** | Parallax Image | 4 Large counters |
| 7 | **FAQ/More** | Gradient B | Accordion list |
| 8 | **CTA** | Vibrant Gradient | Final conversion block |

---

## Visual Rules
1. **Never repeat background colors** sequentially.
2. **Headings must be WHITE** on dark backgrounds.
3. **Cards must contrast** with their section background.
4. **Images in every scroll view** (Introduction, Features, Process).

---

## Component Logic

### Carousel (Tech Stack)
- Infinite auto-scroll
- 10-15 logos/icons
- Pause on hover

### Features Grid
- 3x3 layout minimum (9 cards)
- Hover: Scale up + Border glow (different color than bg)

---

## Verification Checklist
- [ ] 8 distinct sections visible
- [ ] Alternating background colors
- [ ] Carousel is scrolling
- [ ] 9+ Feature cards
- [ ] Images visible in Overview and Process
- [ ] H1 is White and readable

