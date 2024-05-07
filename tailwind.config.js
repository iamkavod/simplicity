/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bruno-ace': ['"Bruno Ace"', 'sans-serif'],
        'bruno-ace-sc': ['"Bruno Ace SC"', 'sans-serif'],
      },
      colors: {
        primaryColor: "#03121B",
      }
    },
  },
  plugins: [],
}