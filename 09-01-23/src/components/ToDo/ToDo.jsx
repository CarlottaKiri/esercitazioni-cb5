import "./todo.css";
import { useState } from "react";
import { SingleItem } from "../ToDo-Items/Items";
import { InputGroup } from "../../atoms/Input-Group/InputGroup";

export function ToDoList() {
  const [toDoListItem, setItems] = useState([
    { label: "Creare una To-Do-List", isDone: true },
    { label: "Scrivere codice a occhi chiusi", isDone: false },
  ]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const label = formData.get("taskName");

    setItems((oldItems) => {
      const newItem = { label, isDone: false };
      return [...oldItems, newItem];
    });
  };

  const changeStatus = (index, currentStatus) => {
    setItems((oldItems) => {
      const newItems = oldItems.concat([]);
      newItems[index].isDone = !currentStatus;
      return newItems;
    });
  };

  return (
    <div className="todo">
      <form onSubmit={formSubmitHandler}>
        {" "}
        <InputGroup
          placeholder="Insert new task..."
          name="taskName"
          className="input"
        ></InputGroup>
      </form>

      <ul>
        {toDoListItem.map((item, index) => {
          return (
            <SingleItem
              key={index}
              index={index}
              isDone={item.isDone}
              changeStatus={changeStatus}
            >
              {item.label}
            </SingleItem>
          );
        })}
      </ul>
    </div>
  );
}
