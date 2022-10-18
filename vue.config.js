// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  outputDir: "lib",
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
};
