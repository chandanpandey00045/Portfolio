# Design System — Chandan Pandey Portfolio

This portfolio uses a Meta-design-inspired visual direction adapted for a personal engineering portfolio. It uses the source specification's light canvas, cobalt blue accents, pill-shaped calls to action, generous whitespace and rounded feature cards. It is not an official Meta site or an exact brand implementation.

## Visual intent
- White, editorial canvas with clear spacing and a quiet blue grid behind the hero.
- Cobalt blue (`#0064E0`) is the key accent for links, icons, focus states and small labels.
- Marketing-style primary actions are black pills; secondary actions are outlined pills.
- Surface cards stay flat with subtle grey borders and large corner radii instead of heavy shadows.
- Full-stack engineering and data engineering remain equal parts of the portfolio.

## Color tokens
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FFFFFF` | Page canvas |
| `--surface-100` | `#FFFFFF` | Cards and primary surfaces |
| `--surface-200` | `#F1F4F7` | Supporting surfaces and tag backgrounds |
| `--surface-300` | `#E7EDF3` | Raised/hover surfaces |
| `--foreground` | `#1C1E21` | Primary text |
| `--muted` | `#4B4C4F` | Paragraphs and supporting copy |
| `--subtle` | `#5D6C7B` | Hints and metadata |
| `--line` | `#DEE3E9` | Dividers and card borders |
| `--line-strong` | `#CED0D4` | Form controls and stronger borders |
| `--accent` | `#0064E0` | Links, icons, labels and focus states |
| `--accent-deep` | `#0457CB` | Active/pressed accent |
| Primary button | `#000000` | Main marketing CTA with white text |

## Typography
- Inter is the local Google Font integration used for interface and reading text, with Arial as a fallback.
- JetBrains Mono is used for terminal content, eyebrow labels and technical metadata.
- Hero display scales responsively; section headings use compact leading and slight negative tracking.
- Body copy defaults to 16px and a 1.5–1.65 line height for legibility.
- The source specification references Optimistic VF, a proprietary typeface; this project does not redistribute it and uses Inter as a substitute.

## Layout and components
- 4px spacing rhythm; section spacing is generous on desktop and reduced on mobile.
- Content width maxes at approximately 1200px.
- Feature/project cards use 28px rounding and a subtle `#DEE3E9` border, with little or no shadow.
- Primary button: black fill with white text, rounded to a full pill. Secondary button: transparent fill, dark text and an outlined pill.
- Tags use soft grey-blue surfaces and full pill rounding.
- Project category filters use pill controls and a clearly visible active state.

## Motion and accessibility
- Small interactions use approximately 220ms and `cubic-bezier(.2,.7,.2,1)`.
- Respect `prefers-reduced-motion`; focus styles are visible and blue.
- Preserve semantic landmarks, skip-to-content link, form labels and keyboard navigation.
- Keep readable contrast on light surfaces; do not use pale grey for paragraph text.

## Content rules
- Keep both full-stack and data-engineering work visible across the hero, skills and project sections.
- Replace placeholder outcomes, experience, email, LinkedIn and city before publishing.
- Never publish invented metrics, employers, certifications or project claims.
- The contact form is front-end-only until connected to a real API or email provider.
