/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blue: "#1677ff",
        purple: "#4257b2",
        pink: "#ff49db",
        orange: "#ff7849",
        "green-dark": "#13ce66",
        yellow: "#f5e459",
        wheat: "rgba(255,234,193,1)",
        "gray-dark": "#3e4a5c",
        gray: "#939bb4",
        "gray-light": "#d3dce6",
      },
      fontWeight: {
        bold: "600",
      },
    },
  },
  plugins: [],
};
