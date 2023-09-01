import { useState } from "react";
import styles from "./App.module.css";
import CarForm from './components/cars/createCar/CarForm.tsx';
import createCarForm from './components/cars/createCar/CreateCarForm';



function App() {
  // createCarForm()
 
  return (
    <div className="contener">
      <h1 className={styles.text}>Cars</h1>
      <CarForm></CarForm>
    </div>
  )
}

export default App
