import styles from "./styles.module.scss";
import ApplicationCtx from "../../store/context";
import { useContext } from "react";

export default function ToDoItem({ data }) {
  const { dispatch } = useContext(ApplicationCtx);
  const onHandleClick = (e) => {
    dispatch({
      type: "SET_TODO_ITEM_DONE",
      payload: e.target.parentNode.id,
    });
  };
  return (
    <div
      id={data.id}
      className={`${styles.main} ${data.status && styles.statusDone}`}
      onClick={onHandleClick}
    >
      <h2>{data.content}</h2>
    </div>
  );
}
