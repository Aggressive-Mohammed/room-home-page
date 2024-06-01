/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
     'dark-gray': "hsl(0, 0%, 63%)",
     'black': 'hsl(0, 0%, 0%)',
     'white': 'hsl(0, 0%, 100%)',
     'very-dark-gray': 'hsl(0, 0%, 27%)'
      
    },
    fontFamily: {
      'spartan': ['League Spartan', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

