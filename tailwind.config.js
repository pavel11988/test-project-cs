module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif", "normal"],
      },
      colors: {
        text_orange: "#F37020",
        text_black: "#0F172A",
        text_white: "#FFFFFF",
        text_grey: "#334155",
        //
        background_white: "#FFFFFF",
        background_orange: "#DA6A20",
        background_black: "#000000",
        background_primary_light: "rgba(255, 255, 255, 0.1)",
        background_orange_gradient:
          "linear-gradient(182.61deg, #DA6A20 62.95%, rgba(218, 106, 32, 0) 97.82%)",
        background_orange_gradientt:
          "linear-gradient(0deg, rgba(218,8,204,1) 0%, rgba(255,174,0,0) 100%);",
        //
        border_orange: "#DA6A20",
        border_white: "#FFFFFF",
        border_gray: "#d6d6d6",
        //
        button_primary_orange: "#DA6A20",
        button_color_transparent: "rgba(255, 255, 255, 0.002)",
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
