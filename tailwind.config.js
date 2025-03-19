/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: "var(--font-poppins)", // Utilisation de la variable CSS
          quicksand: "var(--font-quicksand)",
        },
      },
    },
    plugins: [],
  };
  