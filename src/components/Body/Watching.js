import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import EmptyList from "./EmptyList";
import DisplayMovie from "./DisplayMovie";
import SectionHeading from "./SectionHeading";

const Watching = () => {
  const movies =
    useSelector((state) => state.MovieWatchingReducer.watching) || [];
  const dispatch = useDispatch();

  const renderData = movies.map((movie, index) => {
    return (
      <DisplayMovie
        movie={movie}
        key={movie.id}
        section="watching"
        index={index}
      />
    );
  });

  return (
    <>
      <SectionHeading title="Watching" />
      <Droppable droppableId="watching">
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {renderData}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </>
  );
};

export default Watching;
