import styles from "./page.module.scss";
import { getSpells } from "@/lib/fetch";
import Navigation from "@/components/Navigation/navigation";
import SpellMenu from "@/components/SpellMenu/spellmenu";

const Home = async () => {
  const { classes, levels, spells } = await getSpells();

  return (
    <main className={styles.main}>
      <Navigation classes={classes} levels={levels} spells={spells} />
      <SpellMenu spells={spells} />
    </main>
  )
}

export default Home;