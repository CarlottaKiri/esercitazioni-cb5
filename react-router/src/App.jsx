import styles from "./App.module.scss";
import { Link } from "react-router-dom";
import image from "./logo.png";

function App() {
  return (
    <div className={styles.App}>
      <img className={styles.img} src={image} />
      <h1>Sorry!</h1>
      <h3>This page is currently under construction!</h3>
      <h4>Take a look at our </h4>
      <Link to="/users">Users</Link>
      <h4>section</h4>
    </div>
  );
}

export default App;
