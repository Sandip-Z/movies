import React from "react";
import Watched from "./Watched";
import ToWatch from "./ToWatch";
import Watching from "./Watching";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromToWatch,
  removeFromWatched,
  removeFromWatching,
} from "../../redux/Movies/action";

const Body = () => {
  const dispatch = useDispatch();
  const handleDragEnd = (dragged) => {
    const draggedId = dragged.draggableId;
    const sourceId = dragged.source.droppableId;
    const destinationId = dragged.destination?.droppableId;
    const destinationIndex = dragged.destination?.index;
    const obj = {};

    if (sourceId === destinationId) {
      switch (sourceId) {
        case "towatch":
          // dispatch(rearrangeInToWatch(draggedId, dragged.destination.index))
          break;
        case "watching":
          // dispatch(rearrangeInWatching(draggedId, dragged.destination.index))
          break;
        case "watched":
          // dispatch(rearrangeInWatched(draggedId, dragged.destination.index))
          break;
      }
    } else {
      switch (destinationId) {
        case "towatch":
          // dispatch(migrateToToWatch(obj, destinationIndex))
          break;
        case "watching":
          // dispatch(migrateToWatching(obj, destinationIndex))
          break;
        case "watched":
          // dispatch(migrateToWatched(obj, destinationIndex))
          break;
        default:
          break;
      }
    }

    if (dragged.destination) {
      switch (sourceId) {
        case "towatch":
          dispatch(removeFromToWatch(draggedId));
          break;
        case "watching":
          dispatch(removeFromWatching(draggedId));
          break;
        case "watched":
          dispatch(removeFromWatched(draggedId));
          break;
      }
    }
    console.log(dragged);
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
