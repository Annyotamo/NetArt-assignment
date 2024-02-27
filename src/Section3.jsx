import styles from "./css/Section3.module.css";

export default function Section3() {
    return (
        <div className={styles["sec-3-container"]}>
            <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
            <p>
                CHEMICALS & PROCESS <span>| </span> POWER <span>| </span> WATER & WASTE WATER <span>| </span> OILS & GAS{" "}
                <span>| </span> PHARMA <span>| </span> SUGARS & DISTILLERIES <span>| </span> PAPER & PULP{" "}
                <span>| </span>
                MARINE & DEFENCE <span>| </span> METAL & MINING <span>| </span> FOOD & BEVERAGE <span>| </span>{" "}
                PETROCHEMICAL & REFINERIES <span>| </span> SOLAR BUILDING <span>| </span> HVAC <span>| </span> FIRE
                FIGHTING <span>| </span> AGRICULTURE & RESIDENTIAL
            </p>
        </div>
    );
}
