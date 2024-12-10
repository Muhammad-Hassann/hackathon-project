import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      colors: {
        "primary-green": "#195A00",
        "primary-yellow": "#FF9F0D",
        "secondary": "#AF872F",
        "secondary-black": "#0D0D0D",
        "textColor": "#333333",
        
      },
      fontFamily: {
        'sans': ["Helvetica", "sans-serif"],
        'serif': ["Inter", "serif"],
        'great': ["Great Vibes", "cursive"],
      }
    },
  },
  plugins: [],
};
export default config;
