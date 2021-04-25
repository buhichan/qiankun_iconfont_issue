const webpack = require("webpack");
const wds = require("webpack-dev-server");
const path = require("path");

/**
 * @type {wds.Configuration}
 */
const devServerConfig = {
  historyApiFallback: true,
  hot: true,
};

/**
 * @type {webpack.Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: devServerConfig,
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};

module.exports = config;
