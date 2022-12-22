import "./App.css";
import { Button } from "./atoms/Button/Button";
import { Text } from "./atoms/Text/Text";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Container } from "./layout/container/Container";

function App() {
  const propsButton2 = {
    label: "💥😱💥",
    title: "Button 2",
    variant: "secondary",
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Container> Ciao Mondo!</Container>

        <Container withRow={true}>
          <Text as="h1" variant="title">
            🌎 Hello World! 🌍
          </Text>
        </Container>

        <Button
          variant="primary"
          onClick={() => console.log("Hello World!")}
        ></Button>
        <Button
          {...propsButton2}
          onClick={() => console.log("Goodbye World :(")}
        >
          💥😱💥
        </Button>
        <Text as="p" variant="paragraph">
          {" "}
          Choose carefully!
        </Text>
      </main>
      <Footer />
    </div>
  );
}

export default App;
