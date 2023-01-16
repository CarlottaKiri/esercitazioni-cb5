import "./App.css";
import NewMessage from "./components/msgNew/index";
import MessagesList from "./components/msgList/index";

function App() {
  return (
    <div className="App">
      <NewMessage />
      <MessagesList />
    </div>
  );
}

export default App;
