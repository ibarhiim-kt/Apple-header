/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        SfProTextLight:['SF-Pro-Text-light'],
        SfProTextRegular:['SF-Pro-Text-Regular'],
        SfProTextUltralight:['SF-Pro-Text-Ultralight'],
      }
    },
  },
  plugins: [],
}