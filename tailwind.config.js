/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
      },
      colors: {
        coffee: {
          50: '#e8d6d0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        },
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
