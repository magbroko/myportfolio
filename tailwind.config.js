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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          950: '#0a0f1a',
        },
        'deep-black': '#020617',
        accent: {
          emerald: '#10b981',
          sky: '#0ea5e9',
          blue: '#1e40af',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, rgb(15 23 42 / 0.8) 0%, rgb(2 6 23 / 0.9) 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
