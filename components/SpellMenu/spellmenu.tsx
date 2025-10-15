"use client"

import styles from "./spellmenu.module.scss";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic'
import { FormattedSpellBasics } from "@/utils/types";
const SpellCard = dynamic(() => import("../SpellCard/spellcard"))

const SpellMenu = ({ spells }: { spells: FormattedSpellBasics[] }) => {
    const [suggested, setSuggested] = useState("");
    const [flipped, setFlipped] = useState("");

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const filterSpells = (spells: FormattedSpellBasics[]) => {
        const classes = params.get("class");
        const levels = params.get("level");
        const search = params.get("search");

        return spells.filter(spell => {
            const matchesClass = !classes || spell.classes.find(cls => classes.includes(cls.index));
            const matchesLevel = !levels || levels.includes(`${spell.level}`);
            const matchesSearch = !search || spell.name.toLowerCase().includes(search.toLowerCase());
            return matchesClass && matchesLevel && matchesSearch;
        });
    }

    const filteredSpells = filterSpells(spells);

    return (
        <section className={styles.spellmenu}>
            {filteredSpells.length ?
                filteredSpells.map((spell: FormattedSpellBasics) =>
                    <SpellCard
                        spell={spell}
                        key={spell.index}
                        flipped={flipped === spell.index}
                        setFlipped={setFlipped}
                        suggested={suggested === spell.index}
                        setSuggested={setSuggested}
                    />
                )
                :
                <p>No spell matches your query. Try some other filters (or get homebrewing)!</p>
            }
        </section>
    )
}

export default SpellMenu;