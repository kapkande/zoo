import styles from "./Car.module.css";
export default function carItem (name:string, prise:number) {
    console.log({name, prise});
    
    return (
        <div className={styles.wrap}>
            <div className={styles.name}>{name}</div>
            <div className={styles.cost}>{prise}</div>
        </div>
    )
}