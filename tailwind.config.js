/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",

      blue: {
        300: "#4256D0",
        400: "#5C73DB",
        500: "#4763E4",
        700: "#5145CD",
        800: "#0E1B6B",
      },

      green: {
        100: "#DCFCE7",
        200: "#03543F",
      },

      red: {
        100: "#FEE2E2",
        600: "#DC2626",
        800: "#991B1B",
      },

      gray: {
        100: "#F4F4F5",
        200: "#E4E4E7",
        400: "#A1A1AA",
        500: "#71717A",
        800: "#27272A",
      },
    },

    extend: {
      backgroundImage: {
        "navbar-image": "url('/assets/images/bg-navbar.svg')",
        "custom-gradient":
          "linear-gradient(180deg, #131C55 0%, rgba(19, 28, 85, 0.35) 104.8%, rgba(19, 28, 85, 0) 169.64%)",
      },
    },
  },

  plugins: [],
};
