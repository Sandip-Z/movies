import React from "react";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import SectionHeading from "./SectionHeading";
import DisplayMovie from "./DisplayMovie";

const Watched = () => {
  const movies =
    useSelector((state) => state.MovieWatchedReducer.watched) || [];

  const renderData = movies.map((movie, index) => {
    return (
      <DisplayMovie
        movie={movie}
        key={movie.id}
        section="watched"
        index={index}
      />
    );
  });

  return (
    <>
      <SectionHeading title="Watched" />
      <Droppable droppableId="watched">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="droppable-zone"
          >
            {renderData}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default Watched;
