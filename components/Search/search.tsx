"use client"

import styles from "./search.module.scss";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams);
        const search = event.target.value;

        if (search) {
            params.set("search", search);
        } else {
            params.delete("search");
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <fieldset className={styles.search}>
            <label htmlFor="search">Search for a spell</label>
            <input id="search" placeholder="Search for a spell..." onChange={handleSearch} />
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0103 0C18.6465 0.000113532 24.0212 5.40077 24.0214 12.0555C24.0214 15.0449 22.9355 17.7804 21.1394 19.8879C21.1495 19.8972 21.1605 19.9057 21.1703 19.9156L29.7536 28.534C30.0876 28.8694 30.0874 29.4132 29.7536 29.7486C29.4196 30.084 28.8773 30.084 28.5432 29.7486L19.9599 21.1301C19.9531 21.1233 19.9472 21.1154 19.9407 21.1084C17.8254 22.977 15.0508 24.1117 12.0103 24.1118C5.37389 24.1117 0 18.7104 0 12.0555C0.00023638 5.40079 5.37403 0.000132158 12.0103 0ZM12.0103 1.71432C6.32737 1.71445 1.71455 6.34102 1.71432 12.0555C1.71432 17.7701 6.32723 22.3973 12.0103 22.3975C17.6933 22.3974 22.3071 17.7701 22.3071 12.0555C22.3068 6.34101 17.6932 1.71443 12.0103 1.71432Z" />
            </svg>
        </fieldset>
    )
}

export default Search;