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
        primary50: "#FFF9F6",
        primary100: "#FFF3EA",
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
        grey40: "#717171",
        grey50: "#252525",
        grey60: "#696969",
        grey70: "#424242",
        grey80: "#B3B3B3",
        grey90: "#545454",
        grey100: "#DFDFE6",

        black10: "#D7D7D7",
        black20: "#070707",
        black: "#2A2A2B",

        white10: "#FCFCFD",

        green10: "#05A660",
        green20: "#EBF8F1",
        red10: "#E53535",
        red20: "#FFEBEB",
        blue10: "##3772FF",
        yellow10: "#FF8800",
        yellow20: "#FFF3D8"
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "system-ui"],
        poppins: ['"Poppins"', "system-ui"]
      }
    }
  },
  plugins: []
};
