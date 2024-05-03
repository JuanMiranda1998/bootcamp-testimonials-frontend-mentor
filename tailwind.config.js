/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainPattern': "url('/pattern-bg.svg')",
        'curve': "url('/pattern-curve.svg')",
        'quotations': "url('/pattern-quotes.svg')",
      }
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom-2': 'left bottom -2rem',
      right: 'right',
      'right-2': 'center right 1rem',
      top: 'top',
      'top-left-2': 'top -2rem left 9rem',
      'top-2': 'center top 2rem',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'smallQuotes': '70px',
      'largeQuotes': '100px',
      'curveSize': '450px',
      'mobile': '300px',
      'desktop': '600px'
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'main': ['Inter'],
    }
  },
  plugins: [],
}

