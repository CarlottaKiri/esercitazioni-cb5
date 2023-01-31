import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import styles from "./styles/lists.module.scss";

export default function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=20`)
      .then((res) => res.json())
      .then((data) => setUsersData(data.users));
  }, []);
  return (
    <div className={styles.main}>
      <h1> Users List</h1> <Link to={"/"}>Home</Link>
      <h4>Click on an user to learn more about them!</h4>
      {usersData.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
