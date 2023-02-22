/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      screens: {
        'tablet': {'max': '1000px'},
        'mobile': {'max': '700px'},
      },
    },
    plugins: [],
  }