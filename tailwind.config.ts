import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "#5C1A1B",
        cream: "#F9F5EB",
        gold: "#C9A96E",
        taupe: "#F0EAE0",
        espresso: "#2C1810",
        "espresso-light": "#3D2B1F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      spacing: {
        "section-sm": "5rem",
        "section": "7rem",
      },
      borderRadius: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
