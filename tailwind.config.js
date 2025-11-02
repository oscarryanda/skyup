/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skyup-teal': '#178A9E',
        'skyup-blue': '#0A64A4',
        'skyup-navy': '#002D9C',
        'skyup-orange': '#F97902',
        'skyup-red': '#F61B1B',
        'skyup-dark': '#3E3E3E',
        'skyup-light': '#F7F9FB',
        'skyup-secondary': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

