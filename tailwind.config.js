const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': "375px",
      'desktop': "1440px",
    },
    fontFamily: {
      'spartan': ['League Spartan', 'sans-serif'],
    },
    colors: {
      'dark-gray': 'hsl(0, 0%, 63%)',
      'black': 'hsl(0, 0%, 0%)',
      'white': 'hsl(0, 0%, 100%)',
      'very-dark-gray': 'hsl(0, 0%, 27%)',
    },
    
    extend: {
      fontSize: {
        '12': '12px',
      },
      // width: {
      //   '160': '160px'
      //   '600': '600px',
      // },
      // height: {
      //   '14': '14px',
      //   '15': '15px'
      //   '1538': '1538px',
      // },
      ...defaultTheme,
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-unset': {
          'background': 'unset',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
