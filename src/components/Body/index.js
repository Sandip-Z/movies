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
  migrateToToWatch,
  migrateToWatching,
  migrateToWatched,
} from "../../redux/Movies/action";

const Body = () => {
  const dispatch = useDispatch();

  const toWatchMovies =
    useSelector((state) => state.MovieToWatchReducer.toWatch) || [];
  const watchingMovies =
    useSelector((state) => state.MovieWatchingReducer.watching) || [];
  const watchedMovies =
    useSelector((state) => state.MovieWatchedReducer.watched) || [];

  const getMovieFromReducer = (id, source) => {
    let movie = {};
    const grabMovieFromSource = (arr) => {
      let selected = {};
      arr.forEach((mov) => {
        if (mov.id == id) {
          selected = mov;
        }
      });
      return selected;
    };
    switch (source) {
      case "towatch":
        movie = grabMovieFromSource(toWatchMovies);
        break;
      case "watching":
        movie = grabMovieFromSource(watchingMovies);
        break;
      case "watched":
        movie = grabMovieFromSource(watchedMovies);
        break;
      default:
        break;
    }
    return movie;
  };

  const handleDragEnd = (dragged) => {
    const draggedId = dragged.draggableId;
    const sourceId = dragged.source.droppableId;
    const destinationId = dragged.destination?.droppableId;
    const destinationIndex = dragged.destination?.index;
    const obj = getMovieFromReducer(draggedId, sourceId);
    console.log(obj);
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
          dispatch(migrateToToWatch(obj, destinationIndex));
          break;
        case "watching":
          dispatch(migrateToWatching(obj, destinationIndex));
          break;
        case "watched":
          dispatch(migrateToWatched(obj, destinationIndex));
          break;
        default:
          break;
      }
    }

    if (sourceId !== destinationId && destinationId) {
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
        <div className="col-lg-4 p-3">
          <ToWatch />
        </div>
        <div className="col-lg-4 p-3">
          <Watching />
        </div>
        <div className="col-lg-4 p-3">
          <Watched />
        </div>
      </main>
    </DragDropContext>
  );
};

export default Body;
