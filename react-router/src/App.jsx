import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.title}>
          <h1>GUGGOL</h1>
          <h3>.it</h3>
        </div>
        <p>Choose a random option and expand your knowledge!</p>
        <div className={styles.links}>
          <Link to="/users">Users</Link>
          <Link to="/users/4">User Of The Year</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts/6">Post Of The Year</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
