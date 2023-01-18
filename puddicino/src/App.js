import "./App.css";
import { useState } from "react";

import NewMessage from "./components/msgNew/index";
import MessagesList from "./components/msgList/index";
import FriendsList from "./components/friendList";
import Navbar from "./components/navbar/index";

function App() {
  const [filterState, setFilterState] = useState("");

  return (
    <div className="App">
      <Navbar setFilterState={setFilterState} />
      <NewMessage />
      <div className="maincontent">
        <FriendsList />
        <MessagesList filterSearch={filterState} />
      </div>
    </div>
  );
}

export default App;
