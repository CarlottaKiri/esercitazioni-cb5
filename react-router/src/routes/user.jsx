import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles/details.module.scss";

export default function User() {
  const { user } = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.main}>
      <img src={userData.image} alt="user" />
      <h3>{userData.firstName}</h3>
      <h3>{userData.lastName}</h3>
      <Link to="/users"> Users List</Link>
    </div>
  );
}
