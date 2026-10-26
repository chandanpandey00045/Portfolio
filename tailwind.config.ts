import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          500: "#0064e0",
          600: "#0052cc",
          700: "#0747a6",
          800: "#003882"
        },
        cyan: "#0052cc", // Map legacy references to clean royal/cobalt blue
        slate: {
          850: "#151e2e"
        }
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"]
      },
      boxShadow: {
        none: "none"
      }
    }
  },
  plugins: []
};
export default config;
