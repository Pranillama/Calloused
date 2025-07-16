import { ReactNode } from "react";

const Button = ({ children, onClick, className = "", variant = "" }) => {
  const variantClass = {
    primary: "button--primary",
    secondary: "button--secondary",
    third: "button--third",
    small: "button--small",
    nav: "button--nav",
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
// we have 3 button type:
//1. primary: for all the main buttons
//2. secondary: for the ghost button
//3. third: for small / other stuff
