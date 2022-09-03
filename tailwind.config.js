/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{jsx, js}",
    "./src/components/Form/*.jsx",
    "./src/components/hooks/*.jsx",
  ],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      navBackground: '#cfdbe5',
      blue: '#869fab',
    },
    extend: {
      
    },
  },
  plugins: [],
}
