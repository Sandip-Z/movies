import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "./EmptyList";
import { Droppable } from "react-beautiful-dnd";

const Watched = () => {
  const movies = useSelector((state) => state.MovieReducer.watched) || [];
  const dispatch = useDispatch();

  const renderData = movies.map((movie) => {
    return <p key={movie.id}>{movie.title}</p>;
  });

  return (
    <Droppable droppableId="watched">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {renderData}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Watched;
