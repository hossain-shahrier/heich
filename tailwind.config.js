/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      // sans: ['Helvetica', 'Arial', 'sans-serif'],
      sans: ['Lato', 'sans-serif'],
      //
      // sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      serif: [
        'sohne-var',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['dark'],
  },
};
