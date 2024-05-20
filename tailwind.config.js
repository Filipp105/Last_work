/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'] // Добавление Montserrat как базовый шрифт
      },
      colors: {
        slate: {
          800: "#141E33",
        },
      },
      screens: {
        "2xl": "1736px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
