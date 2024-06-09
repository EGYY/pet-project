export type Mode = 'production' | 'development'

export type Paths = {
    entry: string,
    build: string,
    html: string,
}

export type Options = {
    mode: Mode,
    paths: Paths,
    isDev: boolean,
}