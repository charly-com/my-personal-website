import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#00008B",
          yellow: "#FFC107",
          dark: "#0B0F19"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config
