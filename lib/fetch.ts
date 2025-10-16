import { OriginalSpellBasics, FormattedSpellBasics } from "@/lib/types";

export const getSpells = async () => {
    const classResponse = await fetch("https://www.dnd5eapi.co/api/2014/classes");
    const classData = await classResponse.json();
    const classes = await classData.results;

    const levelNumbers = Array.from(
        { length: (9 - 0) / 1 + 1 },
        (value, index) => 0 + index * 1
    );

    const levels = levelNumbers.map(level => {
        return {
            index: `${level}`,
            name: level === 0 ? "Cantrip" : `Level ${level}`
        }
    })

    const responses = await Promise.all(
        classes.map(({ index }: { index: string }) => fetch(`https://www.dnd5eapi.co/api/2014/classes/${index}/spells`))
    );

    const payloads: Array<{ results: OriginalSpellBasics[] }> = await Promise.all(responses.map(r => r.json()));

    const spellMap = new Map<string, FormattedSpellBasics>();

    for (const [i, payload] of payloads.entries()) {
        const cls = classes[i];
        for (const spell of payload.results ?? []) {
            const existing = spellMap.get(spell.index);
            if (existing) {
                if (!existing.classes.includes(cls)) {
                    existing.classes.push(cls);
                }
            } else {
                spellMap.set(spell.index, { ...spell, classes: [cls] });
            }
        }
    }

    const spells = [...spellMap.values()].sort((a, b) => a.name.localeCompare(b.name));

    return {
        classes: classes,
        levels: levels,
        spells: spells
    };
};