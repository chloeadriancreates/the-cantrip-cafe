"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Class, FormattedSpellBasics, Level } from "@/lib/types";
import Filters from "../Filters/filters";
import Search from "../Search/search";
import styles from "./navigation.module.scss";

const Navigation = ({ classes, levels, spells }: { classes: Class[], levels: Level[], spells: FormattedSpellBasics[] }) => {
    const [filters, setFilters] = useState(false);
    const { replace } = useRouter();

    const selectRandomSpell = () => {
        const random = Math.floor(Math.random() * spells.length);
        replace(`/spell/${spells[random].index}`);
    }

    return (
        <nav className={styles.navigation}>
            <section>
                <Search />
                <div>
                    <button onClick={selectRandomSpell}>See a random spell</button>
                    <button onClick={() => setFilters(!filters)} aria-pressed={filters}>
                        {filters ? "Hide filters" : "Show filters"}
                    </button>
                </div>
            </section>
            {filters && <Filters classes={classes} levels={levels} setFilters={setFilters} />}
        </nav>
    )
}

export default Navigation;