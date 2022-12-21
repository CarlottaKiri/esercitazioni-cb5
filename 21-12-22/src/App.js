import "./App.css";
import { Button } from "./components/Button/Button";
import { Text } from "./components/Text/Text";

function App() {
  const propsButton1 = {
    title: "Button 1",
  };

  const propsButton2 = {
    label: "💥😱💥",
    title: "Button 2",
    variant: "secondary",
  };
  return (
    <div className="App">
      <Text as="h1" variant="title">
        🌎 Hello World! 🌍
      </Text>
      <Button
        variant="primary"
        onClick={() => console.log("Hello World!")}
      ></Button>
      <Button {...propsButton2} onClick={() => console.log("Goodbye World :(")}>
        💥😱💥
      </Button>
      <Text as="p" variant="paragraph">
        {" "}
        Made with 💙 by C.P.
      </Text>
    </div>
  );
}

export default App;
