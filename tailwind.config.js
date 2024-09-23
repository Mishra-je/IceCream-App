/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Lobster : ["Lobster", "sans-serif"],      
      },
      colors : {
        customgray: "#59427a",
      }
    },
  },
  plugins: [],
}