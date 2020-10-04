import React from "react";
import SearchBox from "../searchbox";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarNav } from "../../redux/Application/action";
import { BsXSquareFill, BsList } from "react-icons/bs";
const Navbar = () => {
  const dispatch = useDispatch();
  const hideSidebar = useSelector(
    (state) => state.ApplicationReducer.sideNavbarOpen
  );

  const toggleSideNavigation = (_) => {
    dispatch(toggleSidebarNav());
  };

  return (
    <nav className="d-flex justify-content-around">
      <button className="sidebar-toggler-button" onClick={toggleSideNavigation}>
        {hideSidebar ? <BsXSquareFill /> : <BsList />}
      </button>
      <div className="d-flex align-items-center">
        <p>Logo</p>
      </div>
      <SearchBox />
      <div className="d-flex">
        <button className="header-button">Open to contribution</button>
      </div>
    </nav>
  );
};

export default Navbar;
