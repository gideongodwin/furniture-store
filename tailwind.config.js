/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'xs': {'max': '480px'},
      'sm': {'max': '640px'},
      'md': {'max': '992px'},
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
