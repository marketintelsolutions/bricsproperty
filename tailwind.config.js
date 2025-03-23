/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#28173c',
        primaryRed: '#c4833a',
        primaryGrey: '#c9c9c9',

      },
      maxWidth: {
        max: '1300px'
      },
      fontFamily: {
        sans: "Open Sans",
        poppins: "Poppins"
      },
      screens: {
        zr: "0px",
        mb: "430px",
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}

