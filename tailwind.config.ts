import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        systemColor: "#212121",
        borderColor: "#2B2B2B",
        systemText: "#BEBEBE",
        hireMeBg: "#383838",
        systemWhiteBorder: "#EFAFAF",
        dotColor: "#616161",
        greenDot: "#28C780",
        availableBg: "#223A2F",
        availableColorText: "#078E50",
        imgBorderColor: "#2C2C2C",
        boxBg: "#373737",
        boxBorder: "#393939",
        framerTemplateBg: "#424242",
        dotWhiteMode: "#CCCCCC",
        systemTextWhiteMode: "#858585",
        availableWhiteMode: "#DFF7EC",
        projectsBoxWhiteMode: "#F7F7F7",
        framerTemplateWhiteMode: "#F0F0F0",
      },
    },
  },
  plugins: [],
} satisfies Config;
