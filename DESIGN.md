---
name: DevSarthi
colors:
  surface: '#fdf9ef'
  surface-dim: '#dddad0'
  surface-bright: '#fdf9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3e9'
  surface-container: '#f2eee4'
  surface-container-high: '#ece8de'
  surface-container-highest: '#e6e2d8'
  on-surface: '#1c1c16'
  on-surface-variant: '#414944'
  inverse-surface: '#31312a'
  inverse-on-surface: '#f4f0e6'
  outline: '#717974'
  outline-variant: '#c0c9c2'
  surface-tint: '#396754'
  primary: '#013626'
  on-primary: '#ffffff'
  primary-container: '#1e4d3b'
  on-primary-container: '#8cbda6'
  inverse-primary: '#a0d1b9'
  secondary: '#2c694e'
  on-secondary: '#ffffff'
  secondary-container: '#aeeecb'
  on-secondary-container: '#316e52'
  tertiary: '#003622'
  on-tertiary: '#ffffff'
  tertiary-container: '#004f33'
  on-tertiary-container: '#60c595'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbeed5'
  primary-fixed-dim: '#a0d1b9'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#204f3d'
  secondary-fixed: '#b1f0ce'
  secondary-fixed-dim: '#95d4b3'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#0e5138'
  tertiary-fixed: '#92f7c3'
  tertiary-fixed-dim: '#75daa8'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005235'
  background: '#fdf9ef'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d8'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system reflects an "Intellectual Architect" personality—balancing the traditional academic prestige of Mumbai University with the cutting-edge precision of AI engineering. The target audience consists of engineering students who require deep focus and technical clarity.

The visual style is a fusion of **Modern Corporate** and **Glassmorphism**. It utilizes a sophisticated, academic color palette layered with translucent "glass" panels to represent the layers of AI intelligence. The interface should feel structured, authoritative, and frictionless, evoking a sense of calm intelligence rather than chaotic "hacker" energy.

## Colors
The palette is rooted in a "Deep Academic" spectrum. 
- **Primary (#1E4D3B):** Used for global navigation, primary actions, and branding to establish authority.
- **Secondary/Tertiary:** Used for success states, progress indicators, and active highlights within technical components.
- **Neutral (#F4F0E6):** The core background color. This warm off-white "paper" tone reduces eye strain during long study sessions and differentiates the product from typical cold-white SaaS tools.
- **Surface Colors:** Use semi-transparent white overlays (0.4 - 0.7 opacity) on top of the neutral background to create the glassmorphic layering effect.

## Typography
This design system employs a tiered typographic strategy:
- **Source Serif 4:** Reserved for page titles, module headers, and academic milestones. It provides the "Traditional University" weight.
- **Hanken Grotesk:** Used for all functional UI, descriptions, and inputs. Its contemporary geometry balances the serif's weight.
- **JetBrains Mono:** Strictly for code snippets, AI terminal outputs, and metadata (e.g., file sizes, timestamps). 

Maintain high contrast; use the Primary Deep Green for titles and a slightly desaturated version for body text to ensure maximum readability on the warm background.

## Layout & Spacing
The layout uses a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

The philosophy centers on "Logical Grouping." Spacing should be generous between different modules (e.g., 64px between the AI Chat and the Study Material) but tight within components (8px/16px) to maintain a technical, data-dense feel. 

Vertical rhythm is strictly maintained using multiples of 8px. Elements should be aligned to the grid to evoke the precision of engineering blueprints.

## Elevation & Depth
Depth is communicated through **Layered Glassmorphism** rather than traditional heavy shadows.
1. **Base Layer:** The warm neutral #F4F0E6 background.
2. **Surface Layer:** White containers with 60% opacity and a 16px backdrop-blur. 
3. **Object Layer:** Buttons and active cards use a subtle 1px "inner glow" (white stroke at 20% opacity) and an ambient, low-opacity shadow (#1E4D3B at 8%) to feel lifted.
4. **Interactive Layer:** On hover, surfaces increase in opacity and shadow spread, simulating a physical "press-ready" state.

## Shapes
The shape language is **Professional and Precise**. 
- Use **0.25rem (4px)** for functional elements like input fields, checkboxes, and buttons to maintain a "technical" edge.
- Use **0.75rem (12px)** for larger layout containers and premium cards to soften the overall aesthetic and make the "glass" panels feel sophisticated rather than sharp.
- Avoid full pills (rounded-full) except for status indicators or notification badges.

## Components
- **Premium Cards:** Backgrounds use white at 70% opacity with a 20px backdrop-blur. Include a 1px border using `glass_stroke_hex`.
- **Terminal Chat Bubbles:** AI responses should appear in a dark container (#081C15) using JetBrains Mono text. Student queries use the Sage Green (#2D6A4F) with Hanken Grotesk.
- **Buttons:** 
    - *Primary:* Deep Forest Green background, Hanken Grotesk Semi-Bold, white text.
    - *Ghost:* 1px Deep Forest Green border, no background, 4px corner radius.
- **Code Editor:** Monaco-inspired. Background should be #081C15. Syntax highlighting must utilize the Emerald and Sage tones for consistency.
- **Interactive Timelines:** A vertical 2px line in Sage Green. Nodes should be "hollow" circles that fill with Emerald when a syllabus milestone is completed.
- **Input Fields:** Bottom-border only or very subtle 1px outlines. Focus state should shift the border color to Emerald with a soft 4px outer glow.