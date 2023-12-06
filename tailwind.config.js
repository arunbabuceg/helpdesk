/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'customblue': '#505cf4', 
      },
      borderColor: {
        'customblue': '#505cf4',
      },
    },
  },
  plugins: [],
};
