import { useState } from "react";
import styles from "./CreateCarForm.module.css";



export default function createCarForm() {
    const [name, setName] = useState('');
    const [prise, setPrise] = useState('0');
    const [image, setImege] = useState('')
    const [cars, setCar] = useState(
        [{name: 'honda', prise: '11', link: 'https://sportishka.com/uploads/posts/2022-04/1651346208_27-sportishka-com-p-zadneprivodnie-mashini-mashini-krasivo-fot-42.jpg'},
         {name: 'honda', prise: '11', link: 'https://get.wallhere.com/photo/car-vehicle-sports-car-Ferrari-coupe-performance-car-Ferrari-458-458-italia-2012-netcarshow-netcar-car-images-car-photo-wheel-supercar-land-vehicle-automotive-design-automobile-make-luxury-vehicle-ferrari-spa-391760.jpg'}  
        ]
    );

    const createCar = (e: any) => {
        e.preventDefault();

        setCar([...cars, {name: name, prise:prise, link:image}]);
    }
    const clearInputs = () => {
        setName("");
        setPrise("0");
        setImege("");
      };
    return (
        <form className={styles.form}>
            <input type="text" name="name" id="car-name"
                onChange={e => {
                    setName(e.target.value);
                }} value={name} />

            <input type="number" name="cost" id="car-cost"
                onChange={e => {
                    setPrise(e.target.value);
                }} value={prise} />

            <input type="text" name="image" id="car-imege"
                onChange={e => {
                    setImege(e.target.value);
                }} value={image} />

            <button onClick={e => {createCar(e); clearInputs();}}>Create</button>

            <p>Вы кликнули {prise} раз(а)</p>
            <ul>
                {cars.map((arr, i) => (
                    <li key={i} className={styles.wrap}>
                        <div className={styles.name}>{arr.name}</div>
                        <div className={styles.cost}>{arr.prise}</div>
                        <div
                            style={{
                                backgroundImage: `url(${arr.link})`
                            }}
                            className={styles.image}></div>
                    </li>
                ))}
            </ul>
        </form>
    )
}