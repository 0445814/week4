const path = require("path");

export default {
  base: "/week4/",
  alias: {
    "/@/": path.resolve(__dirname, "./src"),
  },
  assetsDir: "",
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src/styles/global/index.scss";',
    },
  },
};
