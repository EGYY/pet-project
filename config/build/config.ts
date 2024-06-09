import webpack from "webpack";
import path from "path";
import { Options } from "./types/config";
import { configLoaders } from "./loaders";
import { configResolvers } from "./resolvers";
import { configPlugins } from "./plugins";

export function webpackConfig(options: Options): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    module: {
      rules: configLoaders(),
    },
    resolve: configResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    plugins: configPlugins(options),
  };
}
