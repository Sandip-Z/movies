import React from "react";
import { BsSearch } from "react-icons/bs";

const SidebarMenu = () => {
  return (
    <div className="side-navbar__menu">
      <ul className="sidebar-navbar__menu--list">
        <li>Dashboard</li>
        <li>Current Marathon</li>
      </ul>
      <div className="d-flex justify-content-between px-3">
        <p className="sidebar-title">Archieves</p>
        <div>
          <BsSearch />
        </div>
      </div>
      <ul className="sidebar-navbar__menu--list">
        <li className="no-item">No Archieves Found</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
