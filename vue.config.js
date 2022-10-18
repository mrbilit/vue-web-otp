// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  outputDir: "lib",
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-web-otp/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
};
