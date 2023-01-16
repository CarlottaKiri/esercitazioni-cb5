import { useState } from "react";
import "./index.css";
import { POST } from "../../utils/http";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");
  const [title, setTitle] = useState("");

  const onHandleInput = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const FileSelector = (e) => {
    document.getElementById("selectedFile").click();
  };

  return (
    <div className="NewMsg">
      <form onSubmit={onSubmit}>
        {" "}
        <div className="title-section">
          <h1>Want to share something?</h1>
          <p>Let your friends know what's on your mind!</p>
        </div>
        <div className="img-section">
          <p>Select your pfp:</p>

          <input type="file" id="selectedFile" />
          <input type="button" value="Browse..." onClick={FileSelector} />
          <input type="text" placeholder="@username" />
        </div>
        <div className="content-section">
          <input type="text" value={title} placeholder="Title" />

          <input
            className="msg-content"
            value={messageText}
            onChange={onHandleInput}
            type="text"
            placeholder="Share something!"
          />
          <input type="text" placeholder="#hashtag" />
          <input type="submit" value="✍️" />
        </div>
      </form>
    </div>
  );
};

export default NewMessage;
