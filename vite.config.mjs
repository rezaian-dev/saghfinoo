// vite.config.mjs

import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
    optimizeDeps: {
      include: ["leaflet", "leaflet/dist/leaflet.css"],
    },
  },
});