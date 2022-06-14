/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        title: "#272343",
        paragraph: "#2d334a",
        primary: "#ffd803",
        secondary: "#e3f6f5",
        tertiary: "#bae8e8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
