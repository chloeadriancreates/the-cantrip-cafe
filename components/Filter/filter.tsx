"use client"

import { useState } from "react";
import styles from "./filter.module.scss";
import { useSearchParams, useRouter } from "next/navigation";

const Filter = ({ type, index, name }: { type: string, index: string, name: string }) => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const { replace } = useRouter();

    const [pressed, setPressed] = useState(!!params.get(type)?.includes(index));

    const toggleFilter = (type: string, index: string) => {
        const existing = params.get(type)?.split("-");

        if (existing) {
            let selected: string[] = [];

            if (existing.includes(index)) {
                selected = existing.filter(cls => cls !== index);
                setPressed(false);
            } else {
                selected = [...existing, index];
                setPressed(true);
            }

            if (selected.length) {
                selected.sort();
                params.set(type, selected.join("-"));
            } else {
                params.delete(type);
            }
        } else {
            params.set(type, index);
            setPressed(true);
        }

        replace(`?${params.toString()}`);
    }

    return (
        <li className={styles.filter}>
            <button
                key={index}
                onClick={() => toggleFilter(type, index)}
                aria-pressed={pressed}
            >
                {name}
            </button>
        </li>
    )
}

export default Filter;