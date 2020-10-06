import React from "react";
import DisplayMovie from "./DisplayMovie";
import { Droppable } from "react-beautiful-dnd";
import SectionHeading from "./SectionHeading";

const ToWatch = ({ allowDrag, allowDrop, movies }) => {
  const renderData = (movies || []).map((movie, index) => {
    return (
      <DisplayMovie
        movie={movie}
        key={movie.id}
        section="toWatch"
        index={index}
        allowDrag={allowDrag}
      />
    );
  });

  return (
    <>
      <Droppable droppableId="towatch" isDropDisabled={!allowDrop}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="droppable-zone"
            >
              <SectionHeading title="Watch List" />
              {renderData}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </>
  );
};

export default ToWatch;
