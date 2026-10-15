import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#ffffff",
        panel: "#ffffff",
        cyan: "#0064e0",
        electric: "#0457cb",
        accent: "#0064e0",
        muted: "#4b4c4f",
        lime: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#0064e0",
          600: "#0457cb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: { glow: "0 8px 28px rgba(0, 100, 224, 0.08)" }
    }
  },
  plugins: []
};
export default config;
