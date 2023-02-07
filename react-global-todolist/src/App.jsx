import "./App.css";
import { useReducer } from "react";
import mainReducer from "./store/reducer";
import initialState from "./store/state";
import Navbar from "./components/navbar/Navbar";
import ToDoList from "./components/todoList/ToDoList";
import ApplicationCtx from "./store/context";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <ToDoList />
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App;
