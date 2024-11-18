module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Endre stier etter mappestrukturen
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FAFAF8',
        'primary': '#0C2C40',
        'secondary': '#733D4B',
        'accent': '#4F5D3C',
        'copy': '#0C0C0C',
      },
    },
  },
  plugins: [],
}