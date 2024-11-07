/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: { // Configure your color palette here
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rojo:  '#DB4A4A',
      negro: '#292D3A',
      gris: '#F7F6F9'
    }
  },
  plugins: [],
}