import "./App.css";
import { useState } from "react";

import NewMessage from "./components/msgNew/index";
import MessagesList from "./components/msgList/index";
import FriendsList from "./components/friendList";
import Navbar from "./components/navbar/index";
import TagsList from "./components/tagsList/TagsList";

function App() {
  const [filterState, setFilterState] = useState("");
  const [tagState, setTagState] = useState("");

  return (
    <div className="App">
      <Navbar setFilterState={setFilterState} />
      <NewMessage />
      <div className="maincontent">
        <FriendsList />
        <MessagesList filterSearch={filterState} tagSearch={tagState} />
        <TagsList setTagState={setTagState} tagState={tagState} />
      </div>
    </div>
  );
}

export default App;
