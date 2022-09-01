/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      // sans: ['Helvetica', 'Arial', 'sans-serif'],
      // sans: ['poppins', 'sans-serif'],
      //
      sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      serif: [
        'sohne-var',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      // sans: [
      //   'HM Sans Regular',
      //   'HMSansHebrew-Regular',
      //   'ヒラギノ角ゴ Pro W3',
      //   'Hiragino Kaku Gothic Pro',
      //   'Osaka',
      //   'メイリオ',
      //   'Meiryo',
      //   // 'ＭＳ Ｐゴシック',
      //   'MS PGothic',
      //   'sans-serif',
      // ],
    },
  },
  plugins: [],
};
