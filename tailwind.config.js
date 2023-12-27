/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"hsl(1, 90%, 64%)",
        secondary: "hsl(219, 85%, 26%)"
      },
      fontFamily:{
        jakarta :"Plus Jakarta Sans"
      },
      fontWeight:{
        jakarta500:"500",
        jakarta800: "800"
      }
    },
  },
  plugins: [],
}

