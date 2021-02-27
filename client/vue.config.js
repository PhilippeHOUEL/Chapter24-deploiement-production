module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "http://locahost:3000"
  },
  outputDir: "../client-build"
};
