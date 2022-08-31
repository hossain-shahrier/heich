/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      // sans: ['Helvetica', 'Arial', 'sans-serif'],
      sans: ['sohne-var', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
