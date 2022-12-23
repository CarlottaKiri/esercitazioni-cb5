import "./Text.css";

const variantMap = {
  title: "text-xl",
  paragraph: "text-md",
};

export const Text = (props) => {
  const { as = "div", children, className = "", variant } = props;

  const Element = as;
  return (
    <Element className={`Text ${variantMap[variant] ?? ""} ${className}`}>
      {children}
    </Element>
  );
};
