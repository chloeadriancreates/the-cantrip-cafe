import styles from "./spellmenu.module.scss";
import { FormattedSpellBasics } from "@/utils/types";
import SpellCard from "../SpellCard/spellcard";

const SpellList = ({ spells }: { spells: FormattedSpellBasics[] }) => {
    return (
        <section className={styles.spellmenu}>
            {spells.map((spell: FormattedSpellBasics) => <SpellCard spell={spell} key={spell.index} />)}
        </section>
    )
}

export default SpellList;