/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "white",
        black: "black",
        lighttext: "#329999",
        text: "#008080",
        lightgray: "#545454",
        background: "#333333", // dark gray
        heading: "#2ecc71",
        button: "#3498db",
      },
      animation: {
        "bounce-short": "bounce 20s linear infinite ",
        "pulse-short": "pulse 10s ease-in-out infinite ",
      },
    },
  },
  plugins: [],
};
