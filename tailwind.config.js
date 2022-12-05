/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'black': '#070606',
        'white': '#FFFDFA',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'rabioli': '#D4145A',
        'fresa': '#E83F60',
        'durazno': '#F27168',
        'piel': '#F8D5AE',
        'vanilla': '#F7A276',
        'quemado': '#F7D256',
        'orange': '#FBB03B',
        'snow': '#A7C0CD',
      },
    },
  },
  plugins: [],
}
