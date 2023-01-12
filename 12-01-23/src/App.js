import "./App.css";
import { useState } from "react";
import { BloodTypes } from "./fetch/components/blood-types/BloodTypes";
import { Banks } from "./fetch/components/banks/Banks";
import { Beers } from "./fetch/components/beers/Beers";
import { Users } from "./fetch/components/users/Users";
import { Selector } from "./fetch/components/selector/Selector";
import { Counter } from "./counter/components/counter/Counter";

const componentMap = {
  counter: Counter,
  bloodTypes: BloodTypes,
  beers: Beers,
  banks: Banks,
  users: Users,
  default: function () {
    return <div className="default">👩‍💻</div>;
  },
};

function App() {
  const [componentToRender, setComponentToRender] = useState("default");
  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <>
      <h1 className="app-title">Random.cp</h1>
      <div className="App">
        <Selector selectChangeHandler={selectChangeHandler} />

        <DynamicComponent className="cssanimation sequence fadeInBottom" />
      </div>
    </>
  );
}

export default App;
