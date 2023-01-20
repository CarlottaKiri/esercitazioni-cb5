import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../msg";

import "./index.css";

const MessagesList = ({ filterSearch, tagSearch }) => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      setMsgList(
        posts.filter(
          (post) =>
            post.title.includes(filterSearch) &&
            post.tags[0].includes(tagSearch)
        )
      )
    );
  }, [filterSearch, tagSearch]);

  return (
    <div className="List">
      <h2 className="list-title">Recent Posts</h2>
      {msgList.map((msg) => (
        <Message data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default MessagesList;
