/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    content: {
      'arrowDownIcon': 'url("../images/icon-arrow-down.svg")'
    },
    colors: {
      //primary colors
      //text
      'veryDarkDesaturatedBlue': 'hsl(238, 29%, 16%)',
      'softRed': 'hsl(14, 88%, 65%)',
      //gradient bg
      'softViolet': 'hsl(273, 75%, 66%)',
      'softBlue': 'hsl(240, 73%, 65%)',
      //neutral colors
      'veryDarkGrayishBlue': 'hsl(237, 12%, 33%)',
      'darkGrayishBlue': 'hsl(240, 6%, 50%)',
      'white': 'hsl(0, 0%, 100%)',
      //dividers
      'lightGrayishBlue': 'hsl(240, 5%, 91%)'
    },
    fontFamily: {
      'KumbhSans': 'Kumbh Sans, sans-serif'
    }
  },
  plugins: [],
}

