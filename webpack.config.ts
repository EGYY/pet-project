import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";

const config: webpack.Configuration = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};

export default config;