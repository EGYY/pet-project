import webpack from "webpack";
import path from "path";
import { webpackConfig } from "./config/build/config";
import { Mode, Options, Paths } from "./config/build/types/config";

const mode: Mode = process.env.MODE as Mode || 'development';
const paths: Paths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
}
const isDev = mode === 'development';

const options: Options = {
  mode,
  paths,
  isDev
}

const config: webpack.Configuration = webpackConfig(options);

export default config;