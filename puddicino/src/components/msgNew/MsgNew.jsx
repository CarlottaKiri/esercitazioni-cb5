import { useState, useEffect } from "react";
import "./index.css";
import { POST } from "../../utils/http";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [userText, setUserText] = useState("");
  const [urlText, setUrlText] = useState("");
  const [tagText, setTagText] = useState("");

  const [messagePost, setMessagePost] = useState({});

  const onHandleMessage = (e) => setMessageText(e.target.value);
  const onHandleTitle = (e) => setTitleText(e.target.value);
  const onHandleUser = (e) => setUserText(e.target.value);
  const onHandleUrl = (e) => setUrlText(e.target.value);
  const onHandleTag = (e) => setTagText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      image: urlText,
      maidenName: userText,
      title: titleText,
      body: messageText,

      userId: 5,
    });
  };

  useEffect(() => {
    if (messagePost.maidenName && messagePost.title)
      POST("posts/add", messagePost);
  }, [messagePost]);

  const FileSelector = (e) => {
    document.getElementById("selectedFile").click();
  };

  return (
    <div className="NewMsg">
      <form onSubmit={onSubmit}>
        <div className="title-section">
          <h1>Want to share something?</h1>
          <p>Let your friends know what's on your mind!</p>
        </div>
        <div className="img-section">
          <p>Select your pfp:</p>

          <input
            value={urlText}
            onChange={onHandleUrl}
            type="file"
            id="selectedFile"
          />
          <input type="button" value="Browse..." onClick={FileSelector} />
          <input
            value={userText}
            onChange={onHandleUser}
            type="text"
            placeholder="@username"
          />
        </div>
        <div className="content-section">
          <input
            type="text"
            value={titleText}
            onChange={onHandleTitle}
            placeholder="Title"
          />

          <input
            className="msg-content"
            value={messageText}
            onChange={onHandleMessage}
            type="text"
            placeholder="Share something!"
          />
          <input
            value={tagText}
            onChange={onHandleTag}
            type="text"
            placeholder="#hashtag"
          />
          <input type="submit" value="✍️" />
        </div>
      </form>
    </div>
  );
};

export default NewMessage;
