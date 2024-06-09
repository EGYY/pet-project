import webpack from "webpack";
import { Options } from "./types/configTypes";
import { configLoaders } from "./loaders";
import { configResolvers } from "./resolvers";
import { configPlugins } from "./plugins";
import { devServerConfig } from "./devServerConfig";

export function webpackConfig(options: Options): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? devServerConfig(options) : undefined,
    module: {
      rules: configLoaders(options),
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
