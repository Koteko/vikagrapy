/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6',   // Standard Tailwind Blau (kann so bleiben)
          600: '#2563eb',   // etwas dunkler und sanfter
          700: '#1e40af',   // noch dunkler, schön für Überschriften
          custom: '#4a6fa5', // eigenes mildes Blau
        }
      }
    }
  },
  plugins: [],
}

