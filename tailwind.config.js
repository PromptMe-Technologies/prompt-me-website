/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "screen-white": "var(--screen-white)",
        "button-black": "var(--button-black)",
        "wolf-grey": "var(--wolf-grey)",
        "lemon-green": "var(--lemon-green)"
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}