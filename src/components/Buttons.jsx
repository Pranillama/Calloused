import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  className = "",
  variant = ["secondary", "primary"],
}) => {
  const variantClass = {
    secondary: "button--secondary",
  };
  return (
    <button
      className={`button ${variantClass[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
// have 2 types of button a regular and then another light one.
