import webpack from "webpack";
import { Options } from "./types/configTypes";

export function configResolvers(options: Options): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
  };
}
