import "./App.css";

import { BloodTypes } from "./fetch/components/blood-types/BloodTypes";
import { Banks } from "./fetch/components/banks/Banks";
import { Beers } from "./fetch/components/beers/Beers";
import { Users } from "./fetch/components/users/Users";

function App() {
  return (
    <>
      <h1>Random.cp</h1>
      <div className="App">
        <BloodTypes />
        <Banks />
        <Beers />
        <Users />
      </div>
    </>
  );
}

export default App;
