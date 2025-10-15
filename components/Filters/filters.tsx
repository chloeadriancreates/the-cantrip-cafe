import styles from "./filters.module.scss";
import { Class, Level } from "@/utils/types";
import Filter from "../Filter/filter";
import Link from "next/link";

const Filters = ({ classes, levels }: { classes: Class[], levels: Level[] }) => {
    const resetFilters = () => {
        const filters = document.querySelectorAll("[class*='filters'] ul li button");
        filters.forEach(filter => filter.setAttribute("aria-pressed", "false"));
    }

    return (
        <div className={styles.filters}>
            <section>
                <h3>Classes</h3>
                <ul>
                    {classes.map(({ index, name }) => <Filter key={index} type="class" index={index} name={name} />)}
                </ul>
            </section>
            <section>
                <h3>Levels</h3>
                <ul>
                    {levels.map(({ index, name }) => <Filter key={index} type="level" index={index} name={name} />)}
                </ul>
            </section>
            <Link href="/" onClick={resetFilters}>Reset all filters</Link>
        </div>
    )
}

export default Filters;