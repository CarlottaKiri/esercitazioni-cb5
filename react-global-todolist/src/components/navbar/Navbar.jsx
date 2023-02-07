import styles from "./styles.module.scss";

import { useState } from "react";

export default function Navbar() {
  const [input, setInput] = useState("");

  return (
    <div className={styles.main}>
      <h1>New Task:</h1>

      <form>
        <input type="text" placeholder="something to do..." />
      </form>
    </div>
  );
}
