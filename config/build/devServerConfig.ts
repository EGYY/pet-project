import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import { Options } from './types/configTypes';

export function devServerConfig(options: Options): DevConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
