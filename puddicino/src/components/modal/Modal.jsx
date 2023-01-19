import "./index.css";
import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [pw, setPw] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };
  const loginModal = () => {
    toggleModal();
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const togglePassword = () => {
    setPw(!pw);
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
            <input
              id="password"
              type={pw ? "password" : "text"}
              placeholder="password"
            />
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

            <button className="login-done" onClick={loginModal}>
              ➡️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
