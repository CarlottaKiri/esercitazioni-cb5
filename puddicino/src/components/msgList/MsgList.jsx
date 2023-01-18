import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../msg";

import "./index.css";

const MessagesList = ({ filterSearch }) => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      setMsgList(posts.filter((post) => post.title.includes(filterSearch)))
    );
  }, [filterSearch]);

  return (
    <div className="List">
      {msgList.map((msg) => (
        <Message data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default MessagesList;
