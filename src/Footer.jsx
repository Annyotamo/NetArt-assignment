import phoneIcon from "./assets/phoneIcon.png";
import facebook from "./assets/facebook.png";
import internet from "./assets/internet.png";

import styles from "./css/Footer.module.css";
export default function Footer() {
    return (
        <div className={styles["footer-container"]}>
            <div>
                <img src={phoneIcon} />
                <p>
                    Toll free <strong>1800 200 1234</strong>
                </p>
            </div>
            <div>
                <img src={facebook} />

                <p>www.facebook.com/cripumps</p>
            </div>
            <div>
                <img src={internet} />

                <p>www.crigroups.com</p>
            </div>
        </div>
    );
}
