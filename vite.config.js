import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const ViteImageOptimizerConfig = {
  jpg: {
    quality: 75,
  },
  png: {
    quality: 75,
  },
  jpeg: {
    quality: 75,
  },
};

export default defineConfig({
  base: "https://Yaroslav-Zozulya.github.io/pastry-calculator/",
  plugins: [react(), ViteImageOptimizer(ViteImageOptimizerConfig)],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
  },
});
