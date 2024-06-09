import webpack from "webpack";

export function configResolvers(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
