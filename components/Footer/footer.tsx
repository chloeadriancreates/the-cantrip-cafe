import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/terms">Terms of use</Link>
            <div>
                <span>Made with ♥︎ by</span>
                <Link href="https://chloeadrian.dev">Chloé Adrian</Link>
                <span>in 2025</span>
            </div>
        </footer>
    )
}

export default Footer;