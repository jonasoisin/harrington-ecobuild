import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderColor: {
          DEFAULT: "#ef4444", // red-500
        },
        primary: {
          DEFAULT: "#D92D20", // Energy Red
          hover: "#B91C1C",
        },
        secondary: {
          DEFAULT: "#0B2B40", // PillarVolt Blue
          light: "#173A52",
        },
        "deep-red": "#8B0000",
        "red-500": "#ef4444",
        "background-light": "#F9FAFB",
        "background-dark": "#0A0D12",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
        "accent-light": "#F8FAFC",
        "accent-dark": "#1E293B",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
