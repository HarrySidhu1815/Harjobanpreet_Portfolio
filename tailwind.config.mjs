/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",      // for Page Router
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",        // for App Router
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          outfit: ['Outfit', 'sans-serif'],
          ovo: ['Ovo', 'serif']
        },
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001F'
        },
        boxShadow: {
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        }
      },
    },
    plugins: [],
  }
  