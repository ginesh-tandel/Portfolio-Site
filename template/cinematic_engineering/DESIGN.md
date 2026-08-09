---
name: Cinematic Engineering
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#ccc3d2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#958e9b'
  outline-variant: '#4a4450'
  surface-tint: '#d7baff'
  primary: '#dec4ff'
  on-primary: '#3f1a70'
  primary-container: '#c8a2ff'
  on-primary-container: '#553387'
  inverse-primary: '#6f4ca2'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#84e1b1'
  on-tertiary: '#003823'
  tertiary-container: '#68c597'
  on-tertiary-container: '#005034'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eddcff'
  primary-fixed-dim: '#d7baff'
  on-primary-fixed: '#280056'
  on-primary-fixed-variant: '#573488'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#98f6c4'
  tertiary-fixed-dim: '#7cd9a9'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005235'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  bg-secondary: '#111111'
  bg-elevated: '#161616'
  text-primary: '#f0f0f0'
  text-secondary: '#a0a0a0'
  text-muted: '#555555'
  border-low: '#1e1e1e'
  border-high: '#2a2a2a'
  accent-amber: '#ffad66'
  code-bg: '#0d0d0d'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 96px
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-editorial:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  section-gap: 128px
  max-width-main: 1152px
  max-width-editorial: 768px
---

## Brand & Style

This design system embodies the intersection of high-end technical journals and modern digital product engineering. It is defined by a "Cinematic Engineering" aesthetic—a sophisticated, dark-themed environment that prioritizes architectural rigor, senior credibility, and editorial authority.

The visual style is a blend of **Minimalism** and **Modern Corporate**, utilizing heavy whitespace, a strictly controlled palette, and razor-thin hairlines to evoke a sense of precision. Every element is intentional, avoiding generic "hacker" tropes in favor of a restrained, luxurious atmosphere that reflects the transformation of code into impactful business products.

- **Tone:** Senior, credible, technical, and business-focused.
- **Visual Motif:** Transformation (Code → Architecture → Product).
- **Execution:** High-contrast typography, obsidian canvases, and magnetic interactions.

## Colors

The palette is rooted in an **Obsidian Near-Black** foundation to establish depth and cinematic focus. Primary text uses a high-contrast **Off-White**, while technical metadata is pushed back into the background using **Muted Charcoal**.

- **Primary Accent:** "Precision Soft Violet" (#c8a2ff) is the signature interactive color, used for critical states and navigation indices.
- **Functional Accents:** "Cyan Systems Blue" (#3b82f6) and "Emerald System Green" (#73d0a1) are reserved for technical diagram nodes and status indicators, signaling different architectural tiers.
- **Borders:** Extremely subtle 1px hairlines serve as the primary structural dividers, maintaining a clean, technical grid without visual clutter.

## Typography

The system utilizes **Geist** for its modern, technical, yet editorial feel, paired with **JetBrains Mono** for developer-centric data and labels.

- **Hero Headings:** Use `display-lg` with extremely tight letter-spacing and leading to create a "wall of text" impact that feels authoritative.
- **Editorial Flow:** Body copy should be constrained to a maximum width of `512px` to ensure high readability and mimic a professional journal layout.
- **Technical Metadata:** All scene counters (e.g., `03 / 11`) and section identifiers use `label-caps` to provide a systematic, rigid structure to the narrative flow.

## Layout & Spacing

The layout follows an **Editorial Grid** philosophy, characterized by generous vertical whitespace and full-screen chapter-based compositions.

- **The Chapter Model:** Each major section acts as a full-screen viewport (`min-h-screen`) with `128px` of vertical padding.
- **Grid Structure:** A 12-column underlying grid is used, but content typically manifests as an equal 2-column layout. Editorial text is often separated from visual diagrams or code blocks by a `64px` gap.
- **Responsive Reflow:** On mobile, columns stack vertically. Large display type scales down aggressively to maintain the "tight" aesthetic without breaking layout boundaries.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Fine Outlines** rather than traditional shadows.

- **Surface Tiers:** Backgrounds transition from `#0a0a0a` (root) to `#111111` (containers) to `#161616` (elevated chrome/badges).
- **Hairline Borders:** Depth is defined by 0.5px or 1px borders in `#1e1e1e`. These act as "ghost borders"—providing structure without adding weight.
- **Interactive Depth:** Glassmorphism is used sparingly, primarily in the top navigation bar (`backdrop-blur-md`) to maintain context as the user scrolls through the cinematic narrative.

## Shapes

The shape language is strictly **Sharp (0px)** for all primary UI elements, representing engineering precision and architectural "blueprints."

- **Exceptions:** A soft `rounded-lg` (8px) is permitted only for "Window Mockup" containers to simulate modern OS interfaces.
- **Nodes:** Technical diagram nodes are perfect circles, encased in a subtle, low-opacity halo ring to suggest activity.

## Components

### Buttons
- **Primary:** Sharp-edged (`rounded-none`), solid off-white fill with obsidian text. Implement a **magnetic follow effect** where the button subtly tracks the cursor within a small radius.
- **Secondary:** Ghost style with a 1px `#2a2a2a` border. On hover, the border and text transition to high-contrast off-white.

### Technical Window Frames
Used for case studies. These include a top header bar (`#161616`), three static window control dots, and a monospace title tag (e.g., `architecture_v2.sys`). The content area uses the Charcoal Canvas (#111111) background.

### Architectural Nodes & Connections
- **Nodes:** 6px radius circles in functional colors (#c8a2ff, #3b82f6).
- **Connections:** 1px dashed SVG paths. Use `ScrollTrigger` to animate the drawing of these lines as the user enters the section, symbolizing "building" the system.

### Input Fields & Chips
- **Inputs:** Minimalist bottom-border-only design with monospace labels.
- **Chips/Tags:** Monospace text with fine borders and no fill, emphasizing a "schematic" feel.