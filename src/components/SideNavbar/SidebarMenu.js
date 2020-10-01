import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiFillDashboard, AiOutlineLogout } from "react-icons/ai";
import { RiRunFill, RiProfileFill } from "react-icons/ri";

const SidebarMenu = () => {
  return (
    <div className="side-navbar__menu">
      <ul className="sidebar-navbar__menu--list">
        <li>
          <AiFillDashboard />
          <span className="mx-2">
            <Link to="/dashboard">Dashboard</Link>
          </span>
        </li>
        <li className="active">
          <RiRunFill />
          <span className="mx-2">
            <Link to="current-marathon">Current Marathon</Link>
          </span>
        </li>
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
      <div className="px-3">
        <p className="sidebar-title">User Information</p>
      </div>
      <ul className="sidebar-navbar__menu--list pt-2">
        <li>
          {" "}
          <RiProfileFill />{" "}
          <span className="mx-2">
            <Link to="/profile">My Profile</Link>
          </span>
        </li>
        <li>
          <AiOutlineLogout />
          <span className="mx-2">Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
