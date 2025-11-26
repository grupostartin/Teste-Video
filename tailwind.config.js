/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumina: {
          bg: '#F9F9F4',
          primary: '#0F172A', // Slate 900
          secondary: '#D4AF37', // Muted Gold
          tertiary: '#C4A484', // Earthy tone
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}