import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import rollupTsconfigPaths from "rollup-plugin-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
      name: "@mrbilit/vue-web-otp",
      fileName: "vue-web-otp",
    },
    rollupOptions: {
      plugins: [rollupTsconfigPaths()],
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
