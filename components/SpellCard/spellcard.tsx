import { SpellBasics } from "@/utils/types";
import styles from "./spellcard.module.scss";

const SpellCard = ({ spell }: { spell: SpellBasics }) => {
    return (
        <div className={styles.spellcard}>{spell.name}</div>
    )
}

export default SpellCard;