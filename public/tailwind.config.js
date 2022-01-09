module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  theme: {
    extend: {
      keyframes:{
        'wonder': {
          '0%': {
            transform: 'translate(0,0) scale(1)'
          },
          '50%': {
            transform: 'translate(140px,-80px) scale(1.2)'
          },
          '100%': {
            transform: 'translate(0,0) scale(1)'
          },
      },
      },

      animation: {
        'wonder': 'wonder 7s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
