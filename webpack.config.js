const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "production",
  context: __dirname,
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [{ loader: "ts-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_DATE": JSON.stringify(process.env.BUILD_DATE),
      "process.env.GH_ACCESS_TOKEN": JSON.stringify(
        process.env.GH_ACCESS_TOKEN
      ),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "cheap-module-source-map",
};
