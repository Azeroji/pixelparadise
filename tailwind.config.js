/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ['Pixelify Sans'],
        FiraCode: ['Fira Code'],
      },
      colors: {
        'BG':'#1c174f',
        'TXT':'#faeb07',
        'GRAY':'#ccd6f6',
        'PINK':'#bd4ea2',
        'BLUE':'#3b549e'
      }
    },
  },
  plugins: [],
}
