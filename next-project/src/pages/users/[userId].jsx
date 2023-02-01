import { useRouter } from "next/router";
import { users } from "../api/users";

export default function User({ users }) {
  const router = useRouter();
  const id = router.query.userId;

  return (
    <>
      <h1>User ID:{id}</h1>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      users,
    },
  };
}
