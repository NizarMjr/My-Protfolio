/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('../public/assets/bg-landing.webp')",
      }
    },
  },
  plugins: [],
}
