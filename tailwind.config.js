/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'xs': {'max': '480px'},
      'sm': '480px',
      'md': '640px',
      'lg': '992px',
      'xl': '1200px'
    },
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
