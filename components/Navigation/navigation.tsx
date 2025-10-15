"use client"

import { useState } from "react";
import { Class, Level } from "@/utils/types";
import Filters from "../Filters/filters";
import Search from "../Search/search";
import styles from "./navigation.module.scss";

const Navigation = ({ classes, levels }: { classes: Class[], levels: Level[] }) => {
    const [filters, setFilters] = useState(false);

    return (
        <nav className={styles.navigation}>
            <section>
                <button onClick={() => setFilters(!filters)} aria-pressed={filters}>
                    {filters ? "Hide filters" : "Show filters"}
                </button>
                <button>See a random spell</button>
                <Search />
            </section>
            {filters && <Filters classes={classes} levels={levels} />}
        </nav>
    )
}

export default Navigation;