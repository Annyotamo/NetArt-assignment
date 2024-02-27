import styles from "./css/Header.module.css";
import logo from "./assets/logo.png";
export default function Header() {
    return (
        <div className={styles["header-container"]}>
            <img src={logo} alt="Project logo" />
        </div>
    );
}
