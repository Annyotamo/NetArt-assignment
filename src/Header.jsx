import styles from "./css/Header.module.css";
import headerImage from "./assets/headerImage.png";
export default function Header() {
    return (
        <div className={styles["header-container"]}>
            <img src={headerImage} alt="Project logo" />
        </div>
    );
}
