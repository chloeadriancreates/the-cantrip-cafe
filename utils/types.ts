export type OriginalSpellBasics = {
    index: string,
    name: string,
    level: number,
    url: string
};

export type FormattedSpellBasics = OriginalSpellBasics & {
    classes: string[]
};