import styles from "./styles.module.scss";
import ToDoItem from "../todoItem/ToDoItem";
import { useContext } from "react";
import ApplicationCtx from "../../store/context";
export default function ToDoList() {
  const context = useContext(ApplicationCtx);
  console.log(context);
  return (
    <div className={styles.main}>
      {context.state.todoList.map((item) => (
        <ToDoItem data={item} key={item.id} />
      ))}
    </div>
  );
}
