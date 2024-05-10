/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "color-text": "var(--color-text)",
      blue: "var(--blue)",
      white: "var(--white)",
      gray: "var(--gray)",
      "blue-gray": "var(--blue-gray)",
      "dark-blue": "var(--dark-blue)",
      "white-light": "var(--white-light)",
      "light-grey": "var(--light-grey)",
      red: "var(--red)",
    },
  },

  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
