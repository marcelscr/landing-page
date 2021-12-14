module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: true,
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
