import "./inputgroup.css";

export function InputGroup(props) {
  const { label = "", type = "text", ...attr } = props;

  return (
    <label>
      <span>{label}</span>
      {type === "textarea" ? (
        <textarea {...attr}></textarea>
      ) : (
        <input type={type} {...attr} />
      )}
    </label>
  );
}
