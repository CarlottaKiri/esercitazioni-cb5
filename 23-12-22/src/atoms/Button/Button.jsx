import "./Button.css";

export function Button(props) {
  console.log("props di Button:", props);

  const { children = "💙🌏💙", variant = "none", ...attributes } = props; //prendere dall'oggetto props la variabile label

  return (
    <button
      aria-label="Click me for a console log"
      className={`Button Button--variant-${variant}`}
      {...attributes}
    >
      {children}
    </button>
  );
}
