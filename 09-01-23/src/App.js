import "./App.css";
import { ToDoList } from "./components/ToDo/ToDo";
import { Text } from "./atoms/Text/Text";

function App() {
  return (
    <div className="container">
      <Text variant="title">To Do List</Text>

      <ToDoList />
    </div>
  );
}

export default App;
