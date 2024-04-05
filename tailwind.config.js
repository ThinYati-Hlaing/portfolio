/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      shadow: ["Rubik Doodle Shadow", "system-ui"],
      rubik: ["Rubik Maps", "system-ui"],
      satisfy: ["Satisfy", "cursive"],
    },
    extend: {
      colors:{
        primary: '#B809C3',
      }
    },
  },
  plugins: [],
};
