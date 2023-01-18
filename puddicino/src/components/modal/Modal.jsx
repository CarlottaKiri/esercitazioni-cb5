import "./index.css";
import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const togglePassword = () => {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function (e) {
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    });
  };

  return (
    <div className="Modal">
      <button onClick={toggleModal} className="modal-button">
        Login
      </button>
      {modal && (
        <div className="modal-open">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Login</h2>

            <h4>Username/Email:</h4>
            <input type="text" placeholder="username/email" />
            <a href="https://developer.mozilla.org/en-US/">
              Forgot username/email?
            </a>

            <h4>Password:</h4>
            <input id="password" type="password" placeholder="password" />
            <button
              onClick={togglePassword}
              className="toggle-password"
              id="togglePassword"
            >
              👁
            </button>
            <a href="https://developer.mozilla.org/en-US/">Forgot password?</a>

            <div className="checkbox">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
