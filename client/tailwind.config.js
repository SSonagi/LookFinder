/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add the relevant paths to your project
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoSlab: ["Roboto Slab", "serif"],
        Roboto: ["Roboto", "serif"]
      }
    },
  },
  plugins: [],
}

