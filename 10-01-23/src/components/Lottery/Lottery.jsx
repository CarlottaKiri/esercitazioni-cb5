import { useState } from "react";
import "./lottery.scss";
import { Button } from "../Button/Button";

export function Lottery(props) {
  const [number, setNumber] = useState([]);

  const LotteryButtonEvent = () => {
    const newNumber = Math.round(Math.random() * 91);
    setNumber([...number, newNumber]);
  };

  return (
    <div className="content">
      <h1 className="title">Random Lottery</h1>
      <p>Randomly drawn numbers:</p>
      <ul className="lottery-list">
        {number.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
      <Button
        className="lottery-button"
        clickHandler={LotteryButtonEvent}
        {...(number.length >= 6 ? { isDisabled: true } : { isDisabled: false })}
      />
    </div>
  );
}
