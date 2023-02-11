import "./App.css";
import { useReducer } from "react";
import mainReducer from "./store/reducer";
import initialState from "./store/state";
import Hero from "./components/hero/Hero";
import ToDoList from "./components/todoList/ToDoList";
import ApplicationCtx from "./store/context";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <div className="App">
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {JSON.stringify(state.user) === "{}" ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <Hero />
            <ToDoList />
          </>
        )}
      </ApplicationCtx.Provider>{" "}
    </div>
  );
}

export default App;
