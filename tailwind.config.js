/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/special-forms/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        brutus:'#101625'
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '14': '14',
        '15': '15',
        '16': '16',
      },
      gridColumnEnd: {
        '14': '14',
        '15': '15',
        '16': '16',
      }
    },
  },
  plugins: [],
}
