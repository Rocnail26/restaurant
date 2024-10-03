

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors:{
        primary: 'rgb(var(--color-primary))',
      }
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
}

