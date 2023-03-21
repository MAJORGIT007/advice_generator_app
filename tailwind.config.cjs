/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': "#202733",
        'dark-grayish-blue': "#313A48",
        'grayish-blue': "#4F5D74",
        'light-cyan': "#CEE3E9",
        'neon-green': "#53FFAA",
      },
      fontFamily: {
        'manrope': "manrope",
      }
    },
  },
  plugins: [],
}
