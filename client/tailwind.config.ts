import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#6B7280",
        background: "#F9FAFB",
        "card-bg": "#FFFFFF",
        text: "#1F2937",
        accent: "#10B981",
        "dark-primary": "#4A90E2",
        "dark-secondary": "#9CA3AF",
        "dark-background": "#1F2937",
        "dark-card-bg": "#2D3748",
        "dark-text": "#F9FAFB",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
