import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DisplayMovie from "./DisplayMovie";
import SectionHeading from "./SectionHeading";

const Watching = ({ movies, allowDrag, allowDrop, allowEdit }) => {
  const renderData = (movies || []).map((movie, index) => {
    return (
      <DisplayMovie
        movie={movie}
        key={movie.id}
        section="watching"
        index={index}
        allowDrag={allowDrag}
        allowEdit={allowEdit}
      />
    );
  });

  return (
    <>
      <Droppable droppableId="watching" isDropDisabled={!allowDrop}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="droppable-zone"
            >
              <SectionHeading title="Watching" />
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
