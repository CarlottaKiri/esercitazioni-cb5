import { useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(null);

  const increment = () => setCount((n) => n + 1);
  const decrement = () => setCount((n) => n - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    const localValue = localStorage.getItem("counter") ?? "0";
    setCount(Number(localValue));
  }, []);

  useEffect(() => {
    if (Number.isInteger(count)) {
      localStorage.setItem("counter", count);
    }
  }, [count]);

  return { count, increment, decrement, reset };
}
