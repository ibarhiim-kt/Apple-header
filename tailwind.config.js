/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        SfProTextLight:['SF-Pro-Text-light'],
        SfProTextRegular:['SF-Pro-Text-Regular'],
        SfProTextUltralight:['SF-Pro-Text-Ultralight'],
        SfProDisplayBold:['SFPRODISPLAYBOLD'],
        SfProDisplayMedium:['SFPRODISPLAYMEDIUM'],
        SfProDisplayRegular:['SFPRODISPLAYREGULAR'],
        SFProIconsRegular:['SF-Pro-Icons-Regular.woff']
      },      
      scale: {
        '1016': '1.0161290323', // Custom scale
      },
    },

  },
  plugins: [],
}