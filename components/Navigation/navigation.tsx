import Search from "../Search/search";
import styles from "./navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <Link href="/">Browse all spells</Link>
            <Link href="/">See a random spell</Link>
            <Search />
        </nav>
    )
}

export default Navigation;