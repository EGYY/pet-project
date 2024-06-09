import { Options } from "./types/configTypes";
import type { Configuration as DevConfiguration } from "webpack-dev-server";

export function devServerConfig(options: Options): DevConfiguration {
    return {
        port: options.port,
        open: true,
    }
}