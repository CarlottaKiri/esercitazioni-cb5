export function Button(props) {
  const { clickHandler, isDisabled, ...attributes } = props;

  return (
    <button disabled={!!isDisabled} onClick={clickHandler} {...attributes}>
      {!!isDisabled ? "Maximum level reached" : "Draw number"}
    </button>
  );
}
