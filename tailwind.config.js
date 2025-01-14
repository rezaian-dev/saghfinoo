/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#FAFAFA",
          2: "#F9F9F9",
          3: "#EDEDED",
          4: "#E1E1E1",
          5: "#D9D9D9",
          6: "#CBCBCB",
          7: "#ADADAD",
          8: "#909090",
          9: "#717171",
          10: "#505050",
          11: "#353535",
          12: "#212121",
          13: "#121212",
        },
        shade: {
          1: "#B41818",
          2: "#9E1515",
          3: "#871212",
          4: "#700F0F",
          5: "#5A0C0C",
          6: "#430909",
        },
        tint: {
          1: "#FDF1F1",
          2: "#FCE8E8",
          3: "#F9D2D2",
          4: "#F6BBBB",
          5: "#FCA197",
          6: "#F66262",
          7: "#E43434",
        },
        elight: {
          1: "#ED2E2E",
          2: "#FFF2F2",
        },
        slight: {
          1: "#00966D",
          2: "#F3FDFA",
        },
        wlight: {
          1: "#F4B740",
          2: "#FFF8E1",
        },
        black: "#0C0C0C",
        primary: "#CB1B1B",
        error: "#C30000",
        success: "#00966D",
        warning: "#A9791C",
        info: "#2F80ED",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "1.75rem",
        },
      },
      fontFamily: {
        Shabnam: "shabnam",
      },
      backgroundImage: {
        "home-desktop": "url('../images/backgrounds/background.webp')",
      },
      boxShadow: {
        custom:
          "0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 0 4px 0 rgba(47, 128, 237, 0.19)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
