import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayMovie from "./DisplayMovie";
// import EmptyList from "./EmptyList";
import { Droppable } from "react-beautiful-dnd";

const ToWatch = () => {
  const movies =
    useSelector((state) => state.MovieToWatchReducer.toWatch) || [];
  // const dispatch = useDispatch();

  // console.log(movies);

  const renderData = movies.map((movie, index) => {
    return (
      <DisplayMovie
        movie={movie}
        key={movie.id}
        section="toWatch"
        index={index}
      />
    );
  });

  return (
    <Droppable droppableId="towatch">
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {renderData}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default ToWatch;
