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
      rojo: '#DB4A4A',
      negro:
      {
        DEFAULT: '#292D3A',
        50: '#F2F3F6',
        100: '#E5E6EB',
        200: '#C6C8D3',
        300: '#A7AAB9',
        400: '#888BA0',
        500: '#696C86',
        600: '#4A4E6D',
        700: '#3A3E55',
        800: '#2E3247',
        900: '#292D3A',
      },
      gris: '#F7F6F9'
    }
  },
  plugins: [],
}