import "./index.css";

import Searchbar from "../searchbar";
import Modal from "../modal";

const Navbar = ({ setFilterState }) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <h3 className="logo-title">Puddicino</h3>
        <p>🐤</p>
      </div>
      <div className="links">
        <ul>
          <li>Post</li>
          <li>Credits</li>
        </ul>
      </div>
      <div className="searchbar">
        <Searchbar setFilterState={setFilterState} />
      </div>
      <Modal />
    </div>
  );
};

export default Navbar;
