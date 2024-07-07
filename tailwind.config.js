/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      vazir: ["vazirmatn"],
    },
  },
  plugins: [],
};
