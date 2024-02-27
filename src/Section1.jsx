import styles from "./css/Section1.module.css";
import section1 from "./assets/section1.png";
import section2 from "./assets/section2.png";

export default function Section1() {
    return (
        <div className={styles["sec-1-container"]}>
            <img src={section1} alt="" />
            <div>
                <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                <ul>
                    <li>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as
                        trustworthy products for various projects across the globe to save energy.
                    </li>
                    <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency
                        Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart
                        pumps with IoT enabled control panel.
                    </li>
                </ul>
                <img src={section2} alt="content image" />
                <p>
                    Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr.
                    G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
                    Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>
            </div>
        </div>
    );
}
