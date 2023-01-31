import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export default function UserCard({ user }) {
  const navigate = useNavigate();
  const onHandleClick = () => navigate(`/users/${user.id}`);
  return (
    <>
      <div onMouseUp={onHandleClick} className={styles.main}>
        <h4>{user.firstName}</h4>
        <h4>{user.lastName}</h4>
      </div>
    </>
  );
}
