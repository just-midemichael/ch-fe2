/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary50: "#e8f0fe",
        primary100: "#b6cffc",
        primary200: "#93b8fa",
        primary300: "#6297f8",
        primary400: "#FE8501",
        primary500: "#1464f4",
        primary600: "#125bde",
        primary700: "#0e47ad",
        primary800: "#0b3786",
        primary900: "#082a66",

        grey20: "#F0F5F7",
        grey30: "#DDDDDD",
        grey40: "#717171"
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "system-ui"],
        poppins: ['"Poppins"', "system-ui"]
      }
    }
  },
  plugins: []
};
