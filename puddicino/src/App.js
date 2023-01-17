import "./App.css";
import NewMessage from "./components/msgNew/index";
import MessagesList from "./components/msgList/index";
import FriendsList from "./components/friendList";

function App() {
  return (
    <div className="App">
      <NewMessage />
      <div className="maincontent">
        <FriendsList />
        <MessagesList />
      </div>
    </div>
  );
}

export default App;
