import React from "react";
import "./Button.scss";

export const Button = ({ children, onClick, size, ...rest }) => {
    return (
      <button className={`Button Button--${size}`} onClick={onClick} {...rest}>
        {children}
      </button>
    );
}