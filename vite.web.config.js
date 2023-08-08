import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import rollupTsconfigPaths from "rollup-plugin-tsconfig-paths";

export default defineConfig({
  base: "/vue-web-otp/",
  plugins: [tsconfigPaths(), vue()],
  build: {
    rollupOptions: {
      plugins: [rollupTsconfigPaths()],
    },
    outDir: "./web",
  },
});
