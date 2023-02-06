import styles from "./styles.module.scss";
import { useReducer } from "react";
import reducer from "../../store/reducer";

const initialState = { count: 0, name: "Pine" };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="wrapper">
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count} {state.name}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default Counter;
