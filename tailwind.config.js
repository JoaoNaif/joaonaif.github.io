/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-gradient-1': {
          'border-image': 'linear-gradient(to right, #68d1e9, #feb47b) 1',
          'border-image-slice': '1',
        },
        '.border-gradient-2': {
          'border-image': 'linear-gradient(to right, #68d391, #68d1e9) 1',
          'border-image-slice': '1',
        },
        '.border-gradient-3': {
          'border-image': 'linear-gradient(to right, #68d1e9, #ff0000) 1',
          'border-image-slice': '1',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

