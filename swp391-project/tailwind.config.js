/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white:"#fff",
        blue: "#5892ef",
        purple: "#4257b2",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#f5e459",
        "gray-dark": "#273444",
        gray: "#939bb4",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [],
};
