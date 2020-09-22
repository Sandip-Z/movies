import React from "react";
import Watched from "./Watched";
import ToWatch from "./ToWatch";
import Watching from "./Watching";
import { DragDropContext } from "react-beautiful-dnd";

const Body = () => {
  const handleDragEnd = () => {
    console.log("drag ended");
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
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
    </DragDropContext>
  );
};

export default Body;
