/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",   // Azul Tailwind (ou substitua pela sua cor)
        secondary: "#64748B", // Cinza azul Tailwind
        accent: "#F59E0B",    // Amarelo
      },
      container: {
        center: true, // centraliza automaticamente
        padding: "1rem", // padding padrão lateral (você pode mudar)
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px", // personalizado (opcional)
        },
      },
    },
  },
  plugins: [],
}

