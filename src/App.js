import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
