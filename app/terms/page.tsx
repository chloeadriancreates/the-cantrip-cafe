import "../globals.scss";
import styles from "./page.module.scss";
import type { Metadata } from "next";
import { terms } from "@/lib/terms";

export const metadata: Metadata = {
    title: "Mentions légales",
};

const Terms = () => {
    const { title, subtitle, description, articles } = terms;

    return (
        <main className={styles.main}>
            <section data-container="header">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                {description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
            {articles.map(({ title, content }, articleIndex) => (
                <section data-container="article" key={articleIndex}>
                    <h3>Article {articleIndex + 1} : {title}</h3>
                    {content.map((paragraph, paragraphIndex) =>
                        <p key={paragraphIndex}>{paragraph}</p>
                    )}
                </section>
            ))}
        </main>
    )
}

export default Terms;