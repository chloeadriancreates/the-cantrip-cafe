"use client"

import styles from "./spellcard.module.scss";
import { FormattedSpellBasics } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";
import Sparkle from "../Sparkle/sparkle";
import Link from "next/link";

const SpellCard = ({ spell, flipped, setFlipped, suggested, setSuggested }: { spell: FormattedSpellBasics, flipped: boolean, setFlipped: Dispatch<SetStateAction<string>>, suggested: boolean, setSuggested: Dispatch<SetStateAction<string>> }) => {

    const { name, index } = spell;
    return (
        <article className={styles.spellcard} data-spell={index} data-flipped={flipped} data-suggested={suggested}>
            <div>
                <div>
                    <div>
                        <button
                            onClick={() => setFlipped(index)}
                            onMouseOver={() => setSuggested(index)}
                            onMouseLeave={() => setSuggested("")}
                            onFocus={() => setSuggested(index)}
                            onBlur={() => setSuggested("")}
                        >
                            <Sparkle theme="light" />
                            {name.replaceAll("/", " / ")}
                            <Sparkle theme="light" />
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <Link
                            href={`/spell/${index}`}
                            onMouseOver={() => setSuggested(index)}
                            onMouseLeave={() => setSuggested("")}
                            onFocus={() => setSuggested(index)}
                            onBlur={() => setSuggested("")}
                        >
                            <Sparkle theme="dark" />
                            Read more about this spell
                            <Sparkle theme="dark" />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SpellCard;