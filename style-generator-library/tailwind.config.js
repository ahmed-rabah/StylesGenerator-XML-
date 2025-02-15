/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
        lexend: ["Lexend Giga"],
        culpa: ["Mea Culpa"],
      },
    },
  },
  plugins: [],
}