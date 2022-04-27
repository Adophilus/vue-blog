const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#6366f1',
        'dashboard-primary': '#6366f1'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
