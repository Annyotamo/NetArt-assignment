import styles from "./css/Header.module.css";
import headerImg from "./assets/headerImg.png";
export default function Header() {
    return (
        <div className={styles["header-container"]}>
            <img src={headerImg} alt="Project logo" />
        </div>
    );
}
