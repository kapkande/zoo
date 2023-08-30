import styles from "./App.module.css";
import CreateCarForm from './components/cars/createCar/CreateCarForm.tsx';

function App() {
  // createCarForm()

  return (
    <div className="contener">
      <h1 className={styles.text}>Cars</h1>
      <CreateCarForm></CreateCarForm>
    </div>

  )
}

export default App
