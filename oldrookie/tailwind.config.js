/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/list/page.js",
    "./app/layout.js",
    "./app/list/layout.js",
    "./compnents/header/nav.js",
  ],
  theme: {
    backgroundImage: {
      title: "url('/img/title.png')",
      footer: "url('/img/footer.png')",
      banner01: "url('/img/banner01.png')",
      banner02: "url('/img/banner02.png')",
      banner03: "url('/img/banner03.png')",
    },

    screens: {
      sm: { max: "768px" },
      md: { min: "769px", max: "1023px" },
    },

    maxWidth: {
      "custom-size": "20rem",
      "50vh": "50vh",
    },

    extend: {
      colors: {
        "main-color": "#0042FF",
      },
    },
    // screens: {
    //   m: { min: "390px", max: "425px" },
    //   t: { min: "426px", max: "900px" },
    //   d: { min: "900px", max: "1440px" },
    //   dl: { min: "1440px" },
    // },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
