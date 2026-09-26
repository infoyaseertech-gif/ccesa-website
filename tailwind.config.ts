import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16221C",
        canvas: "#F7F5EF",
        forest: {
          DEFAULT: "#1A5E3A",
          dark: "#123F27",
          light: "#DCEBE1",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#F1E4B8",
        },
        navy: {
          DEFAULT: "#14213D",
          light: "#DDE1EA",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
