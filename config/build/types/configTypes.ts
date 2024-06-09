export type Mode = 'production' | 'development'

export type Paths = {
    entry: string,
    build: string,
    html: string,
}

export type Env = {
    port: number,
    mode: Mode,
}

export type Options = {
    mode: Mode,
    paths: Paths,
    isDev: boolean,
    port: number,
}