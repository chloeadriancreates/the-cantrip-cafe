import styles from "./page.module.scss";
import SpellList from "@/components/SpellMenu/spellmenu";

const Home = async () => {
  const response = await fetch("http://localhost:3000/api/spells", { next: { revalidate: 86400 } });
  const spells = await response.json();

  return (
    <main className={styles.main}>
      <SpellList spells={spells} />
    </main>
  )
}

export default Home;