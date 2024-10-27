import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        deepBlue: "#002B5B",
        coolGray: "#4A4A4A",
        warmGold: "#C9A46A",
        lightBlue: "#E8F0FE",
        offWhite: "#F7F7F7",
        // primary: "#619E91",
        // secondary: "#91619E",
        // tertiary: "#9E9161",
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
