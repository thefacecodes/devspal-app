/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: "rgba(0,0,0,0.5)",
      },
      fontFamily: {
        Ham: "Hammer",
      },
    },
  },
  plugins: [],
};
