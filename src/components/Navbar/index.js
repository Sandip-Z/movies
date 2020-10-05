import React from "react";
import SearchBox from "../searchbox";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarNav } from "../../redux/Application/action";
import { BsXSquareFill, BsList } from "react-icons/bs";
import Button from "../Atoms/Button";
import Icon from "../Atoms/Icon";
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
        {hideSidebar ? (
          <Icon component={<BsXSquareFill />} />
        ) : (
          <Icon component={<BsList />} />
        )}
      </button>
      <div className="d-flex align-items-center">
        <p>Logo</p>
      </div>
      <SearchBox />
      <div className="d-flex">
        <Button text="Open to contribution" />
      </div>
    </nav>
  );
};

export default Navbar;
