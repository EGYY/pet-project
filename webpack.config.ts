import webpack from 'webpack';
import path from 'path';
import { webpackConfig } from './config/build/config';
import {
    Env, Mode, Options, Paths,
} from './config/build/types/configTypes';

export default (env: Env) => {
    const mode: Mode = env.mode as Mode || 'development';
    const isDev = mode === 'development';
    const port = +env.port || 3000;

    const paths: Paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const options: Options = {
        mode,
        paths,
        isDev,
        port,
    };

    const config: webpack.Configuration = webpackConfig(options);

    return config;
};
