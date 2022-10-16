/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(71.86deg, #9572fc 16.08%, #43e7ad 39.94%, #e1d55d 85.57%)', 
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67%)',
        galaxy: "url('/background-galaxy.png')",
      },
    },
  },
  plugins: [],
}
