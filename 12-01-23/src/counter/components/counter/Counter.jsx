import "./counter.css";
import { useCounter } from "../../hooks/use-counter";

export function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section className={"Counter"}>
      <h2 className="counter-title">Counter</h2>
      <div className="buttons">
        <button onClick={decrement}>➖ </button>
        <output className="output">{count}</output>
        <button onClick={increment}>➕</button>
      </div>
      <button onClick={reset}>🔙</button>
    </section>
  );
}
