import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#183628",
        moss: "#647c3b",
        leaf: "#9bbf61",
        clay: "#b76d43",
        cream: "#f6f1e7",
        bark: "#5b3a29"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(24, 54, 40, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
export default config;
