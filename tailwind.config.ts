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
      lineHeight: {
        main: "32.69px",
        alternate: "38.14px",
      },
      boxShadow: {
        wrapper: "0px 0px 25px 0px #8EA0AD59",
      },
      colors: {
        blue: "#01457A",
        desert: "#FDD96640",
      },
      screens: {
        wrapper: "1380px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },

    fontFamily: {
      title: ["Century Gothic", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
