/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["FairyMuffinRoundPop"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      // Only the hues matter. Change the Lightness and Chroma as necessary.
      "ii-pink": "oklch(65% 0.295 0)",
      "ii-red":  "oklch(65% 0.295 22)",
      "ii-green": "oklch(65% 0.295 145)",
      "ii-blue": "oklch(65% 0.295 246)",
      "ii-magenta": "oklch(65% 0.295 330)",

      // A very deep blue.
      "ii-background": "oklch(0.01 0.12 265)",
    },
  },
  plugins: [],
};
