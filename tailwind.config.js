/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fade: 'fade 1s',
      },
    },
    fontFamily: {
      body: ['Bebas Neue', 'system-ui', 'sans-serif'],
      nav: ['Lato', 'system-ui', 'sans-serif'],
      section: ['Oswald', 'system-ui', 'sans-serif'],
    },
    colors: {
      gray: {
        100: 'rgb(77, 77, 77)',
        200: 'rgba(65, 79, 107, 0.502)',
        300: 'rgb(176, 180, 190)',
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
