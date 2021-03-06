const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: {
    enabled: true,
    content: [
      './build/*.html',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}