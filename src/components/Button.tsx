import React from "react";

interface Props {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick, type = "primary" }: Props) => {
  return (
    <button type="button" className={"btn" + " btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
