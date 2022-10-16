/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(71.86deg, #9572fc 16.08%, #43e7ad 39.94%, #e1d55d 85.57%)', 
        galaxy: "url('/background-galaxy.png')",
      },
    },
  },
  plugins: [],
}
