import { useState } from "react";
import "./todo.css";

function SingleItem(text, index) {
  const [isDone, changeStatus] = useState(false);

  return (
    <li
      key={index}
      onClick={() => changeStatus(!isDone)}
      className={isDone ? "checked" : "box"}
    >
      <button
        onClick={() => changeStatus(!isDone)}
        className={isDone ? "checked" : "box"}
      >
        {isDone ? "✔️" : "❌"}
      </button>
      {text}
    </li>
  );
}

export function ToDoList() {
  const toDoListItem = [
    { label: "Clean Apartment" },
    { label: "Bake a cake" },
    { label: "Buy Christmas Gifts" },
    { label: "Study" },
    { label: "Reach Diamond on League of Legends" },
  ];

  return (
    <div className="todo">
      <ul>
        {toDoListItem.map((item, index) => {
          return SingleItem(item.label);
        })}
      </ul>
    </div>
  );
}
