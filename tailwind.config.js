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
      'neural': '#A0A0A0',
    },
    
    extend: {
      width: {
        '160': '160px',
        '194': '194px',
        '62': '62px',
        '311': '311px',
        '362': '362px',
        '375': '375px',
        '464': '464px',
        '376': '376px',
        '400': '400px',
        '484': '484px',
        '580': '580px',
        '560': '560px',
        '600': '600px',
        '840': '840px',
        '1440': '1440px',
      },
      height: {
        '14': '14px',
        '15': '15px',
        '56': '56px',
        '80': '80px',
        '110': '110px',
        '238': '238px',
        '261': '261px',
        '266': '266px',
        '278': '278px',
        '310': '310px',
        '360': '360px',
        '534': '534px',
        '373': '373px',
        '266': '266px',
        '667': '667px',
        '213': '213px',
        '227': '227px',
        '110': '110px',
        '800': '800px',
        '1538': '1538px',
      },
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
