module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dcSuperDarkGray: "#23272a",
        dcDarkGray: "#2c2f33",
        dcGray: "#36393f",
        dcDarkGreen: "#3ba55d",
        dcBlurple: "#7289Da",
        dcLightGray: "#e3e5e8",
        dcSuperLightGray: "#f2f3f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
