import { useState, useContext } from "react";
import ApplicationCtx from "../../store/context";
import styles from "./styles.module.scss";

const Login = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Your Name..."
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
