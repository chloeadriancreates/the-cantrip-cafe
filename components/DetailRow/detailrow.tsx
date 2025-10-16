import styles from "./detailrow.module.scss";
import { CategoryDetails } from "@/lib/types";

const DetailRow = ({ details }: { details: CategoryDetails[] }) => {
    return (
        <div className={styles.detailrow}>
            {details.map(({ category, title, content }: CategoryDetails) =>
                <div key={category}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

export default DetailRow;