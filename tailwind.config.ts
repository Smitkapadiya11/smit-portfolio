import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-secondary)",
        card: "var(--card)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        gold: "var(--secondary)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-line": "pulse-line 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-line": {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: ".3", transform: "scaleY(0.7)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
