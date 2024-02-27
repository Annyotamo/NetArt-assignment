import section3 from "./assets/section3.png";
import styles from "./css/Section2.module.css";

export default function Section2() {
    return (
        <>
            <div className={styles["sec-2-container"]}>
                <p>
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF
                    MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.{" "}
                </p>
                <img src={section3} alt="section 2 image" />
                <p>
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors C.R.I.
                </p>
            </div>
            <hr />
        </>
    );
}
