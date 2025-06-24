import { ReactNode } from "react";

const Button = ({ children, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
};
export default Button;
