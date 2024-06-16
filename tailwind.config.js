/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'spartan': ['League Spartan', 'sans-serif'],
    },
    colors: {
      'dark-gray': 'hsl(0, 0%, 63%)',
      'black': 'hsl(0, 0%, 0%)',
      'white': 'hsl(0, 0%, 100%)',
      'very-dark-gray': 'hsl(0, 0%, 27%)',
      'neural': '#A0A0A0'
    },
    extend: {},
  },
  plugins: [],
}

