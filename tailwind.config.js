/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        root : 'Mukta'
      },
      backgroundColor:{
        dark : '#161616',
        light: '#FBFBFB'
      },
      colors:{
        dark : '#161616',
        light: '#FBFBFB'
      }
    },
  },
  plugins: [],
}