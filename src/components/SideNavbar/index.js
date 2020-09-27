import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SideNavbar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector(
    (state) => state.ApplicationReducer.sideNavbarOpen
  );
  return (
    <>
      {showSidebar ? (
        <div className="side-navbar">This is side nav bar</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideNavbar;
