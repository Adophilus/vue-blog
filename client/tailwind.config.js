module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#6366f1'
      }
    }
  },
  plugins: []
}
