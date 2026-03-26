/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0A',
          card: '#121212',
          border: '#2A2A2A',
        },
        brand: {
          primary: '#A855F7', // Neon Purple
          accent: '#4F46E5',  // Indigo
        }
      }
    },
  },
  plugins: [],
}
