import React from "react";
import SideNavbar from "../SideNavbar";
import Navbar from "../Navbar";

const PrivateLayout = ({ children }) => {
  return (
    <div className="App">
      <SideNavbar />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default PrivateLayout;
