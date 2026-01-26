/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-neon": "linear-gradient(135deg, #00D9FF, #FF006E)",
        "gradient-cyan": "linear-gradient(135deg, #0FF0FF, #00D9FF)",
        "gradient-magenta": "linear-gradient(135deg, #FF006E, #FF1493)",
      },
      colors: {
        bgDark: "#121212",
        // bgDark: "#0b192f",
        textPara: "#57556C",
        heading: "#3182CE",
        textWhite: "#FAF7F2",
        textLight: "#9ca3af",
        darkHover: "#18191E",
        success: "#59ff68",
        // 2026 Neon Accents
        accent1: "#00D9FF", // Neon cyan
        accent2: "#FF006E", // Neon magenta
        accent3: "#39FF14", // Electric lime
        // Glass effect colors
        glassDark: "rgba(18, 18, 18, 0.7)",
        glassLight: "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "neon-cyan": "0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)",
        "neon-magenta": "0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)",
        "neon-lime": "0 0 20px rgba(57, 255, 20, 0.5), 0 0 40px rgba(57, 255, 20, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
