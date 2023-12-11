/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue':'bg-gradient-to-r from-cyan-500 to-blue-500',
    },
  },
  plugins: [],
}
}
