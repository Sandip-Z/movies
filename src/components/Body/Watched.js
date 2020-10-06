import React from "react";
import { Droppable } from "react-beautiful-dnd";
import SectionHeading from "./SectionHeading";
import DisplayMovie from "./DisplayMovie";

const Watched = ({ movies, allowDrag, allowDrop }) => {
  const renderData = (movies || []).map((movie, index) => {
    return (
      <DisplayMovie
        movie={movie}
        key={movie.id}
        section="watched"
        index={index}
        allowDrag={allowDrag}
      />
    );
  });

  return (
    <>
      <Droppable droppableId="watched" isDropDisabled={!allowDrop}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="droppable-zone"
          >
            <SectionHeading title="Watched" />
            {renderData}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default Watched;
