/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { colors: {
      myorange: '#BF6B04',
      mydarkpink:'#A66F89',
      myyellow:'#F29F05',
      mybrightpink:'#F2BBE3',
    }},
  },
  plugins: [],
}
