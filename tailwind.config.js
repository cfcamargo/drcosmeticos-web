/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,html}"],
  theme: {
    extend: {
      colors : {
        "rose" : '#D1A59E',
        "ligth-text" : '#767676',
        "ouro" : '#D8AD6C'
      },
      screens : {
        xs : '360px'
      }
    },
  },
  plugins: [],
}
