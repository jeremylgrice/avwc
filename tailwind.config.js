/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // Dark blueish grey theme with custom background
        primary: {
          50: "#f1f3f7",
          100: "#e1e6ee",
          200: "#c7d2e1",
          300: "#a1b4cd",
          400: "#7590b4",
          500: "#57749e",
          600: "#455c83",
          700: "#394a6b",
          800: "#2d3748", // Darker for better contrast
          900: "#2d384c",
          950: "#1a202c", // Much darker for contrast
        },
        surface: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b", // Dark for contrast elements
          900: "#6A89A7", // Custom grey-blue background
          950: "#4a6b85", // Darker variant for better contrast
        },
        // Legacy colors for backward compatibility
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Monaco", "Consolas", "monospace"],
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
