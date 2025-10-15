import styles from "./page.module.scss";
import Navigation from "@/components/Navigation/navigation";
import SpellMenu from "@/components/SpellMenu/spellmenu";

const Home = async () => {
  // const response = await fetch("http://localhost:3000/api/spells", { next: { revalidate: 86400 } });

  const response = await fetch("http://localhost:3000/api");
  const { classes, levels, spells } = await response.json();

  return (
    <main className={styles.main}>
      <Navigation classes={classes} levels={levels} />
      <SpellMenu spells={spells} />
    </main>
  )
}

export default Home;