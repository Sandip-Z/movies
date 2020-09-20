import React from "react";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-around">
      <div className="d-flex align-items-center">
        <p>Logo</p>
      </div>
      <div>
        <button className="btn btn-secondary">Log in</button>
        <button className="btn btn-primary">Open to contribution</button>
      </div>
    </nav>
  );
};

export default Navbar;
