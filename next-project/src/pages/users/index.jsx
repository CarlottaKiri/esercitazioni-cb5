import styles from "./styles.module.scss";
import { users } from "../api/users";
import Link from "next/link";
import Image from "next/image";

export default function Users({ users }) {
  return (
    users &&
    users.map((user) => (
      <div className={styles.main}>
        <Link
          className={styles.content}
          href={`/users/${user.id}`}
          users={users}
        >
          <Image alt="user" width={100} height={100} src={user.image} />
          <h3>
            Name: <h3 className={styles.name}> {user.name}</h3>
          </h3>
          <p className={styles.sparkle}>✧</p>
          {user.email ? (
            <h3 className={styles.mail}>
              Email:<br></br> {user.email}
            </h3>
          ) : (
            <h3 className={styles.mail}>Email: Animals don't need an e-mail</h3>
          )}
          <p className={styles.sparkle}>✧</p>
          <h3>
            Owner:<br></br>
            {user.owner}
          </h3>
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
