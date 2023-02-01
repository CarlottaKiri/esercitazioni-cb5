import styles from "./styles.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.main}>
      {" "}
      <h1>RandomUsers.org</h1>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/users/1">Best User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
