import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Users() {
  const { user } = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="user">
      <img src={userData.image} alt="user image" />
      <h3>{userData.firstName}</h3>
      <h3>{userData.lastName}</h3>
    </div>
  );
}
