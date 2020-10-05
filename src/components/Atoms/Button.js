import React from "react";

const Button = ({ text, className, ...props }) => {
  return (
    <button className={`header-button ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
