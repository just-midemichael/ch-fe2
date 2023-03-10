/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "system-ui"],
        poppins: ['"Poppins"', "system-ui"]
      }
    }
  },
  plugins: []
};
