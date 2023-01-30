import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Root() {
  const [usersData, setUsersData] = useState([]);
  const { user } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsersData(data.users));
  }, []);
  return (
    <>
      {usersData.map((user) => (
        <>
          <Link to={`/users/${user.id}`}>
            {user.firstName}
            <br></br>
            {user.lastName}
          </Link>
          <br></br>
        </>
      ))}
    </>
  );
}
