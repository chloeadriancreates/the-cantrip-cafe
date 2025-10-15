export type Base = {
    index: string,
    name: string,
}

export type Class = Base & {
    url: string
}

export type Level = Base

export type OriginalSpellBasics = Base & {
    level: number,
    url: string
};

export type FormattedSpellBasics = OriginalSpellBasics & {
    classes: Class[]
};