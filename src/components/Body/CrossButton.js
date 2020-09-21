import React from "react";

const CrossButton = ({ handleClick }) => {
  return (
    <div>
      <p onClick={handleClick} className="cross-button">
        X
      </p>
    </div>
  );
};

export default CrossButton;
