import React from "react";

const CrossButton = ({ handleClick }) => {
  return (
    <p onClick={handleClick} className="cross-button">
      x
    </p>
  );
};

export default CrossButton;
