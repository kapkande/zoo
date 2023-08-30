import { useState } from "react";
import styles from "./CreateCarForm.module.css";
import  carItem  from "../carForm/car";


export default function createCarForm() {
    const [name, setName] = useState('')
    const [prise, setPrise] = useState('')
    const createCar = (e:any)=>{
        // if ((e instanceof Event )){ return}
        e.preventDefault();
        carItem(name, prise)
        console.log({name, prise});
    }
    
    return (
        <form className={styles.form}>
            <input type="text" name="name" id="car-name"
                onChange={e => {
                    setName(e.target.value)
                }} value={name}  />
            <input type="number" name="cost" id="car-cost" onChange={e => {
                    setPrise(e.target.value)
                }} value={prise}  />
            <button onClick={e => createCar(e)}>Create</button>
        </form>

    )
}