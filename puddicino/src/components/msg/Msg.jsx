import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";
import LikeButton from "../button/index";

const Message = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <>
      <div className="Message">
        <img src={user.image} alt={user.firstName} />
        <div className="Content">
          <p className="name">
            {user.firstName} {user.lastName}
          </p>
          <p className="nickname">@{user.maidenName}</p>
          <h4 className="title">{data.title}</h4>
          <p className="body">{data.body}</p>
          <p className="tag">#{data.tags[0]}</p>
          <LikeButton className="like-btn" />
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Message;
