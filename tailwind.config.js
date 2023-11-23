/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#1f597b",
          400: "#2196f3",
          500: "#1564c0",
        },
        neutral: {
          100: "#ffffff",
          200: "#e2e2e2",
          300: "#aaaaaa",
          950: "#000000",
        },
        accent: {
          green: "#4cb050",
          orange: "#ff9700",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
