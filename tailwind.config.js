/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'body': '#17171f',
        'selected-text': '#a3a3ff',
        'theme': '#3f3fff',
        'nav': '#404053',
        'secondary': '#919144',
        'badge': '#3f3f51',
        'input-border': '#565666',
        'input': '#2a2a35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}