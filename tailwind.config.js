/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'bg-primary': '#080A0F',
        'bg-secondary': '#0C0E14',
        'bg-card': '#10121A',
        'bg-card-hover': '#14161F',
        gold: '#C9A84C',
        'gold-dim': 'rgba(201, 168, 76, 0.15)',
        'gold-border': 'rgba(201, 168, 76, 0.25)',
        platinum: '#E8EAF0',
        'platinum-dim': 'rgba(232, 234, 240, 0.6)',
        teal: '#00D4AA',
        'text-primary': '#E8EAF0',
        'text-secondary': 'rgba(232, 234, 240, 0.55)',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        breath: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '100%': { transform: 'scale(1.15)', opacity: '0.6' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 30s linear infinite',
        breath: 'breath 8s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
