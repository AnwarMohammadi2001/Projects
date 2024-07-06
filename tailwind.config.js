/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      vazir: ["vazirmatn"],
    },
  },
  plugins: [],
};
