import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { maroon: "#470112", gold: "#FFB401", blue: "#00619F", green: "#045B01", cream: "#F5EFE5", ink: "#241B1D" } } }, plugins: [] };
export default config;
