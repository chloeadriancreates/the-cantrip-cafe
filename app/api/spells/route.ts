import { NextRequest, NextResponse } from "next/server";
import { OriginalSpellBasics, FormattedSpellBasics } from "@/utils/types";

export const GET = async (request: NextRequest) => {
    const classes = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];

    const responses = await Promise.all(
        classes.map(name => fetch(`https://www.dnd5eapi.co/api/2014/classes/${name}/spells`))
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

    const results = [...spellMap.values()].sort((a, b) => a.name.localeCompare(b.name));
    return NextResponse.json(results);
};