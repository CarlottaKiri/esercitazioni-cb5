export function SingleItem(props) {
  const { children, isDone, changeStatus, index } = props;

  const clickHandler = () => {
    changeStatus(index, isDone);
  };

  return (
    <li>
      <button onClick={clickHandler}> {isDone ? "👌" : "🏋️‍♀️"}</button>
      <span>{children}</span>
    </li>
  );
}
