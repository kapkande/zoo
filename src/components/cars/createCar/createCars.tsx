
import styles from "./CreateCarForm.module.css";

export default function createCarForm(cars) {


    return (
        <ul>
            {cars.map((arr, i) => (
                <li key={i} className={styles.wrap}>
                    <div className={styles.name}>{arr[0]}</div>
                    <div className={styles.cost}>{arr[1]}</div>
                    <div
                        style={{
                            backgroundImage: `url(${arr[2]})`
                        }}
                        className={styles.image}></div>
                </li>
            ))}
        </ul>
    )
}