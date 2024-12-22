/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
      },
      colors: {
        'light-coffee': '#C89F94',
      },

      fontFamily: {
        Karla: ['Karla', 'serif'],
      },

      keyframes: {
        slideDown: {
          '0%': { transform: ' translateY(-100%)' },
          '100%': { transform: ' translateY(0%)' },
        },
        expandMenu: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out ',
        expandMenu: 'expandMenu .4s ease ',
      },

      backgroundImage: {
        'slider-bg': "url('./images/pic-slider.jpg')",
      },
    },
  },
  plugins: [],
}
