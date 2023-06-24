/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        neumorphic: "16px 16px 35px #181818, -16px -16px 35px #2a2a2a",
        active: "inset 14px 14px 28px #171717, inset -14px -14px 28px #2b2b2b",
      },
      borderRadius: {
        xl: "50px",
      },
      textShadow: {
        default: '0 0 5px #00FF67, 0 0 10px #00FF67, 0 0 15px #00FF67, 0 0 20px #00FF67'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
