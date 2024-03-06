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
        "gradient-custom": "linear-gradient(90deg, #FDD966 0%, #BCD77E 68.54%)",
        "gradient-background":
          "linear-gradient(180deg, #FFFFFF 35.7%, #D8EFFF 100%)",
        "gradient-card": "linear-gradient(90deg, #FBFDFF 0%, #D8EFFF 100.86%)",
      },
      boxShadow: {
        wrapper: "0px 0px 25px 0px #8EA0AD59",
      },
      colors: {
        blue: "#01457A",
      },
    },
    screens: {
      wrapper: "1380px",
    },
    fontFamily: {
      title: ["Century Gothic", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
