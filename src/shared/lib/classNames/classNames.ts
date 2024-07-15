type Mods = Record<string, boolean | string | undefined>

export function cls(cls?: string, mods: Mods = {}, additional: string[] = []): string {
    const result = [
        cls,
        ...additional.filter(Boolean),
        ...Object.keys(mods)
            .filter((key) => mods[key]),
    ].join(' ');

    return result;
}
