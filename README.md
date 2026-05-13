# Marvelous Oghenetejiri Agbroko — Portfolio

A premium, cinematic portfolio built with a refined dark luxury aesthetic — deep near-black backgrounds, champagne gold accents, and editorial typography. Designed to signal craft, seniority, and attention to detail.

## Design System

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#080808` | Page background |
| `--bg-secondary` | `#0f0f0d` | Section alternates |
| `--bg-card` | `#111110` | Project cards |
| `--gold` | `#c9a84c` | Primary accent |
| `--gold-hover` | `#b8922a` | Gold on hover / muted |
| `--platinum` | `#f0e8d5` | Body text, titles |
| `--text-secondary` | `#9a9080` | Supporting text |
| `--text-muted` | `#6a6258` | Timestamps, captions |
| `--border-default` | `#1a1815` | Default borders |
| `--border-subtle` | `#2a2520` | Subtle separators |
| `--status-green` | `#2d6a4f` | Available / success states |
| `--teal` | `#00D4AA` | Accent highlights |

**Fonts**
- `Cormorant Garamond` — display / hero headings
- `Montserrat` — UI / body text, nav, labels, buttons
- `JetBrains Mono` — section labels, tech chips, metadata

## Tech Stack

- **Framework:** React 18 + Vite (TypeScript strict)
- **Styling:** Tailwind CSS (custom luxury palette — no default slate/emerald/sky)
- **Animations:** Framer Motion (`AnimatePresence`, staggered fade-up, scroll-triggered reveals, page transitions)
- **Routing:** React Router v6 (`useNavigate`, `useParams`, lazy-loaded project detail)
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check without emitting
npx tsc --noEmit

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx            # Full-viewport editorial hero, staggered fade-up
│   ├── About.tsx           # Two-column layout, credentials sidebar
│   ├── Projects.tsx        # Filterable grid (All / Featured / category tabs)
│   ├── ProjectCard.tsx     # Luxury card, gold hover glow, scale(1.015)
│   ├── TechStack.tsx       # CSS marquee rows + capability cards
│   ├── Contact.tsx         # Editorial heading, gold-underline form
│   ├── Navbar.tsx          # Blur-glass on scroll, fullscreen mobile overlay
│   ├── FadeInView.tsx      # Scroll-triggered reveal wrapper (Framer Motion)
│   ├── Footer.tsx          # Minimal one-line gold footer
│   └── Layout.tsx          # Outlet wrapper (legacy, unused in main routing)
├── pages/
│   └── ProjectDetail.tsx   # Slide-in project detail page (lazy-loaded)
├── data/
│   └── portfolio.ts        # All project data, contact info, TypeScript interfaces
├── hooks/                  # Custom hooks (useInView, useMousePosition, etc.)
├── lib/
│   └── utils.ts            # clsx / tailwind-merge helper
├── App.tsx                 # BrowserRouter + AnimatePresence route transitions
├── main.tsx
└── index.css               # CSS variables, grain overlay, cursor, font imports
```

## Customization

- **Projects:** Edit the `projects` array in `src/data/portfolio.ts`. Set `featured: true` to place a project in the hero row. Update `githubUrl` and `liveUrl` when ready.
- **Contact info:** Update `contactInfo` in `src/data/portfolio.ts` (email, GitHub, LinkedIn).
- **Colors:** All design tokens live in `:root` in `src/index.css` and are mirrored in `tailwind.config.js`.
- **Section order:** Adjust the component order in the `HomePage` function in `src/App.tsx`.

## Features

- Custom gold cursor with ring — CSS-only, no JS library
- SVG grain/noise texture overlay on body
- Navbar blur-glass transition at 80px scroll depth
- Project filter tabs with `AnimatePresence` layout transitions
- Project detail page with `x: 100% → 0` slide-in entrance
- `React.lazy` + `Suspense` for code-split project detail
- `React.memo` on `ProjectCard` for render optimization
- Opposing-direction CSS marquee rows in TechStack
- Semantic HTML landmarks (`<main>`, `<nav>`, `<section>`, `<footer>`)
- `aria-label` on all icon-only interactive elements

## License

Private — All rights reserved.
