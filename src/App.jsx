import Footer from "./Footer";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import styles from "./css/App.module.css";

export default function App() {
    return (
        <div className={styles["main-container"]}>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    );
}
