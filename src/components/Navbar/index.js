import React from "react";
import useClickListener from "../../hooks/useClickListener";
import SearchBox from "../searchbox";
const Navbar = () => {
  const [show, setShow] = useClickListener("nav-dropdown");

  const handleClickSetting = (e) => {
    console.log("clicked on setting");
    setShow(false);
  };

  const handleLogOut = (e) => {
    console.log("clicked on logout");
    setShow(false);
  };

  return (
    <nav className="d-flex justify-content-around">
      <div className="d-flex align-items-center">
        <p>Logo</p>
      </div>
      <SearchBox />
      <div className="d-flex">
        {/* <button className="btn btn-secondary">Log in</button> */}
        <button className="btn btn-primary">Open to contribution</button>
        <div id="nav-dropdown" key="nav-dropdown" className="d-flex">
          <button
            className="btn btn-tertiary text-light"
            // onClick={handleCaretClick}
          >
            &#9660;
          </button>
          {show && (
            <ul className="dropdown">
              <li name="setting" onClick={handleClickSetting}>
                Setting
              </li>
              <li name="logout" onClick={handleLogOut}>
                Log out
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
