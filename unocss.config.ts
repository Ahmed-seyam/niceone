import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-  width: 1280px) { ... }
    },

    colors: {
      primary: "#577D86",
      secondary: "#569DAA",
      tertiary: "#87CBB9",
      fourtiary: "#B9EDDD",
      dark: {
        black: "#000",
        primary: "#121518",
        secondary: {
          dark: "#003763",
          light: "#2B8DDB",
        },
        tertiary: "#222831",
        quadratic: "#0e1114",
      },
      red: "#ff4c4c",
      white: "#fff",
      grey: {
        light: {
          1: "#f9f9f9",
          2: "#f3f3f3",
          3: "#e6e6e6",
          4: "#c1c1c1",
          5: "#aaa",
        },
        dark: {
          1: "#999",
          2: "#777",
          3: "#666",
          4: "#333",
          5: "#222",
          6: "#111",
        },
      },
    },
  },
  shortcuts: {
    autogrid: "grid grid-flow-col items-center gap-2 ",
    fontenglish: "font-[Karla,sans-serif]",
    basicshadow:
      "transition-all	 duration-300	 shadow-[0_0_1rem_rgba(0,0,0,.09)] hover:shadow-[0_0_1.5rem_rgba(0,0,0,.12)]",
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({}),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
