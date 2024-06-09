import webpack from "webpack";

export function configLoaders(): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [tsLoader];
}
