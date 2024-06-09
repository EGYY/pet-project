import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Options } from "./types/config";

export function configPlugins(options: Options): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
  ];
}
