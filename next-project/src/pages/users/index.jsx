import styles from "./styles.module.scss";
import { users } from "../api/users";
import Link from "next/link";

export default function Users({ users }) {
  return (
    users &&
    users.map((user) => (
      <div className={styles.main}>
        <Link className={styles.content} href={`/users/${user.id}`}>
          <img src={user.image?.src} />
          <h3>Name: {user.name} </h3>
          {user.email ? (
            <h3 className={styles.mail}>Email: {user.email}</h3>
          ) : (
            <h3 className={styles.mail}>Email: Animals don't need an e-mail</h3>
          )}
          <h3>Owner: {user.owner}</h3>
        </Link>
      </div>
    ))
  );
}

export async function getStaticProps() {
  return {
    props: {
      users,
    },
  };
}
