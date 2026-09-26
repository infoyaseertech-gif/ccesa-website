import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B1B18",
        canvas: "#F7F4EC",
        hairline: "#E1DACB",
        forest: {
          DEFAULT: "#1A5E3A",
          dark: "#0F3D26",
          light: "#EAF0E7",
        },
        gold: {
          DEFAULT: "#C9A227",
          dark: "#8A6A16",
          light: "#F5ECD2",
        },
        navy: {
          DEFAULT: "#14213D",
          dark: "#0D1629",
          light: "#E6E9F1",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
