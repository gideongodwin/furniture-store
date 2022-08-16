/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "aura": 'Aurallia',
        "swit": "Switzer"
      },
      colors: {
        'grey': '#eaeaea'
      }
    },
  },
  plugins: [],
}
