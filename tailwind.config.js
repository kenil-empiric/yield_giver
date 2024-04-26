/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // gilroy: ["Gilroy", "sans-serif"],
        montserrat: ["Montserrat", "Helvetica, Arial, Lucida, sans-serif"],
        Open_Sans: ["Open Sans", "Helvetica, Arial, Lucida, sans-serif"],
      },
    },
  },
  plugins: [],
};
