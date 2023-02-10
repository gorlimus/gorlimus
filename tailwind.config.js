/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4F1DE",
        secondary: "#E07A5F",
        greAcc: "#81B29A",
        pale: "#3D405B",
        yelAcc: "#F2CC8F",
      },
    },
  },
  plugins: [],
};
