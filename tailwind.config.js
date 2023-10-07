/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        gray: {
          50: "#F5F5F5",
          100: "#F0F0F0",
          200: "#E5E5E5",
          300: "#999999",
          400: "#2B2B2B",
          500: "#262626",
          550: "#232322",
          600: "#1C1C1C",
          700: "#171717",
          800: "#020202",
        },
        pallete:{
          green:"#47DC80",
          purple:"#5858DA",
          darkgreen:"#034737",
          blue:"#84E6FF",
          white: "#F5F5F5",
          black: "#000",

        },
        theme: "#47DC80",
        
    }
    },
  },
  plugins: [],
}
