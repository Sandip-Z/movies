import React from "react";
import Watched from "./Watched";
import ToWatch from "./ToWatch";
import Watching from "./Watching";

const Body = () => {
  return (
    <main className="d-flex justify-content-around bg-dark text-light">
      <div className="to-watch">
        <ToWatch />
      </div>
      <div className="watching">
        <Watching />
      </div>
      <div className="watched">
        <Watched />
      </div>
    </main>
  );
};

export default Body;
