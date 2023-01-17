import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import "./index.css";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendList">
      <h3>Online Friends</h3>
      {friendsList.map((friend) => (
        <Friend data={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
