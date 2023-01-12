import "./selector.css";

export function Selector(props) {
  const { selectChangeHandler } = props;
  return (
    <form>
      <select defaultValue={""} onChange={selectChangeHandler}>
        <option disabled value="">
          Select something random!
        </option>
        <option value="counter">Counter</option>
        <option value="bloodTypes">BloodType</option>
        <option value="banks">Bank</option>
        <option value="beers">Beer</option>
        <option value="users">User</option>
      </select>
    </form>
  );
}
