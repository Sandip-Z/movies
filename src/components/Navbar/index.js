import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleCaretClick = () => {
    setShow(!show);
  };
  return (
    <nav className="d-flex justify-content-around">
      <div className="d-flex align-items-center">
        <p>Logo</p>
      </div>
      <div>
        <button className="btn btn-secondary">Log in</button>
        <button className="btn btn-primary">Open to contribution</button>
        <button
          className="btn btn-tertiary text-light"
          onClick={handleCaretClick}
        >
          &#9660;
        </button>
        {show && (
          <ul className="dropdown">
            <li>Setting</li>
            <li>Log out</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
