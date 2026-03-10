# Marvelous Oghenetejiri Agbroko — Portfolio

A premium, cinematic portfolio showcasing the transition from Vanilla/Bootstrap to modern React/TypeScript architectures.

## Tech Stack

- **Framework:** React 18 + Vite (TypeScript)
- **Styling:** Tailwind CSS (Slate-900 dark mode, Emerald/Sky accents)
- **Animations:** Framer Motion (AnimatePresence, staggerChildren, viewport triggers)
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Project Structure

```
src/
├── components/     # Modular React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   └── FadeInView.tsx
├── data/          # Portfolio content & config
│   └── portfolio.ts
├── hooks/         # Custom hooks
│   └── useInView.ts
├── lib/           # Utilities
│   └── utils.ts
└── ...
```

## Customization

- **Contact info:** Edit `src/data/portfolio.ts` — add real phone numbers, project URLs, etc.
- **Projects:** Add/remove projects in the `projects` array.
- **Tech stack:** Modify `techStackItems` or the TechStack component icons.

## License

Private — All rights reserved.
