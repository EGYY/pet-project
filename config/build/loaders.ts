import webpack from 'webpack';
import { Options } from './types/configTypes';
import { buildCssLoader } from './loaders/buildCssLoader';

export function configLoaders(options: Options): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(options.isDev);

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }],
                ],
            },
        },
    };

    return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader];
}
