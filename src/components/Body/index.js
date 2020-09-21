import React from "react";
import Watched from "./Watched";
import ToWatch from "./ToWatch";
import Watching from "./Watching";

const Body = () => {
  return (
    <main className="row bg-dark text-light">
      <div className="col-4">
        <ToWatch />
      </div>
      <div className="col-4">
        <Watching />
      </div>
      <div className="col-4">
        <Watched />
      </div>
    </main>
  );
};

export default Body;
