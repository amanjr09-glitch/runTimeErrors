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
          red:"#ef4444",
          darkgreen:"#034737",
          blue:"#84E6FF",
          darkblue:"#007fff",
        },
        theme: "#cb722c",
    }
    },
  },
  plugins: [],
} 