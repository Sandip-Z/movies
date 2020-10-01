import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarMenu from "./SidebarMenu";
import "./sidebarmenu.css";

const SideNavbar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector(
    (state) => state.ApplicationReducer.sideNavbarOpen
  );
  return (
    <>
      {showSidebar ? (
        <div className="side-navbar">
          <SidebarMenu />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideNavbar;
