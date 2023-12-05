/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        17: "-15.787deg",
      },
    },
    fontFamily: {
      sans: "Open Sans, sans-serif",
    },
  },
  plugins: [],
};
