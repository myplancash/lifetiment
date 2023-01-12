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
        'blue': '#1803A5',
        'azul-cielo': '#506CF0',
        'black': '#070606',
        'white': '#FFFDFA',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'mercurio': '#A7C0CD',
        'tahiti': '#3ab7bf',
        'rabioli': '#D4145A',
        'fresa': '#E83F60',
        'durazno': '#F27168',
        'naranja': '#FE7860',
        'toronja': '#FC766A',
        'brown': '#783937',
        'piel': '#F8D5AE',
        'suave': '#EEA47F',
        'vanilla': '#F7A276',
        'humano': '#F1AC88',
        'quemado': '#F7D256',
        'orange': '#FBB03B',
        'snow': '#A7C0CD',
      },
    },
  },
  plugins: [],
}
