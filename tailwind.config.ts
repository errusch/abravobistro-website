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
        burgundy: "#6B1D1D",
        cream: "#F5F0E8",
        gold: "#C9A961",
        taupe: "#E8E0D5",
        espresso: "#2C1810",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
