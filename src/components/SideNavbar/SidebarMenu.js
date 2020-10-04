import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSearch, BsViewList } from "react-icons/bs";
import { AiFillDashboard, AiOutlineLogout } from "react-icons/ai";
import { RiRunFill, RiProfileFill } from "react-icons/ri";

const userInformation = [
  { name: "Profile", icon: <RiProfileFill />, href: "/profile" },
  // { name: "Logout", icon: <AiOutlineLogout />, href: "/logout" },
];

const menus = [
  { name: "Dashboard", icon: <AiFillDashboard />, href: "/dashboard" },
  { name: "Current Marathon", icon: <RiRunFill />, href: "/" },
  {
    name: "Recommendation List",
    icon: <BsViewList />,
    href: "/recommendations",
  },
];

const handleLogOut = () => {
  console.log("handleLogOut");
};

const SidebarMenu = () => {
  const location = useLocation();

  const memoizedMenu = useMemo(() => {
    const renderMenus = menus.map((menu) => {
      return (
        <li
          key={menu.href}
          className={menu.href === location.pathname ? "active" : ""}
        >
          {menu.icon}{" "}
          <span className="mx-2">
            <Link to={menu.href}>{menu.name}</Link>
          </span>
        </li>
      );
    });
    return renderMenus;
  }, [menus, location]);

  const memoizedUserInformation = useMemo(() => {
    const renderUserInformation = userInformation.map((userinfo) => {
      return (
        <li
          key={userinfo.href}
          className={userinfo.href === location.pathname ? "active" : ""}
        >
          {userinfo.icon}
          <span className="mx-2">
            <Link to={userinfo.href}>{userinfo.name}</Link>
          </span>
        </li>
      );
    });
    return renderUserInformation;
  }, [userInformation, location]);

  return (
    <div className="side-navbar__menu">
      <ul className="sidebar-navbar__menu--list">{memoizedMenu}</ul>
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
        {memoizedUserInformation}
        <li onClick={handleLogOut}>
          <AiOutlineLogout />
          <span className="mx-2">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
