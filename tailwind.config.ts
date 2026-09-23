import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#123C2D",
        moss: "#527A58",
        cream: "#F4F0E7",
        sun: "#E5B85C",
        ink: "#17211D"
      }
    }
  },
  plugins: []
};

export default config;