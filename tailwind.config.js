/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Bebas Neue', 'system-ui', 'sans-serif'],
      nav: ['Lato', 'system-ui', 'sans-serif'],
    },
    colors: {
      gray: {
        100: 'rgb(77, 77, 77)',
      },
      blue: {
        100: 'rgb(65, 79, 107)',
        200: 'rgb(99, 118, 157)',
      },
      white: '#ffffff',
    },
  },
  plugins: [],
};
