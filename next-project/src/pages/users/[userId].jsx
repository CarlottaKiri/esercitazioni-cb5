import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Link from "next/link";

import Image from "next/image";

import { users } from "../api/users";

export default function User({ users }) {
  const router = useRouter();

  let id = router.query.userId;

  return (
    <div className={styles.mainInfo}>
      <Link href={`/users/${+id - 1}`}>Prev User</Link>
      <Link href={`/users/${+id + 1}`}>Next User</Link>
      <div className={styles.info}>
        <Image alt="user" width={200} height={200} src={users[id - 1].image} />
        <h4>User ID:{id}</h4>
        <h1>User Name:</h1>
        <h1 className={styles.name}>{users[id - 1].name}</h1>
        <h3>
          Description:<br></br> {users[id - 1].description}
        </h3>
        <h3>
          Rating: <br></br> {users[id - 1].userRating}
        </h3>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      users,
    },
  };
}
