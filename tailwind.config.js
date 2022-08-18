/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "aura": 'Aurallia',
        "ops": "Open Sans",
        "rubik": ['Rubik', 'sans-serif']
      },
      colors: {
        'grey': '#eaeaea'
      }
    },
  },
  plugins: [],
}
