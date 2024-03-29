import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Work Sans": ['"Work Sans"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-cool": {
          400: "#7D89B0",
          700: "#404968",
        },
        error: {
          "50": "#FEF3F2",
          "500": "#F04438",
        },
        "gray-btn-hover": "#EFF1F5",
        accent: "#0096FF",
      },
    },
  },
  plugins: [],
};
export default config;
