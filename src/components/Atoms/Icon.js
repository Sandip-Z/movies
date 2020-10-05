import React from "react";

const Icon = ({ component, ...props }) => {
  return (
    <div className="icon-wrapper" {...props}>
      {component}
    </div>
  );
};

export default Icon;
