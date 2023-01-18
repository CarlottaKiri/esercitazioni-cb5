import { useState } from "react";
import "./index.css";

const Searchbar = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div>
      <form className="Searchbar" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Search title..."
        />
        <input className="searchbar-button" type="submit" value="🔍" />
      </form>
    </div>
  );
};

export default Searchbar;
