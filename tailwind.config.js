/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-gray': "hsl(0, 0%, 63%)",
      'black': 'hsl(0, 0%, 0%)',
      'white': 'hsl(0, 0%, 100%)',
      'very-dark-gray': 'hsl(0, 0%, 27%)',
      'neutral': '#A0A0A0',
    },
    fontFamily: {
      'spartan': ['League Spartan', 'sans-serif'],
    },
    fontSize: {
      'base': '12px',
      'xl': '40px',
    },
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      fontWeight: {
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
}
