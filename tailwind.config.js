module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    require('decanter')
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  }
}
