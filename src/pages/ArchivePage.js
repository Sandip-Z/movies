import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import Archive from "../components/Archives";
import { DragDropContext } from "react-beautiful-dnd";
import MarathonHeader from "../components/Body/MarathonHeader";

const ArchivePage = () => {
  const match = useRouteMatch();
  const slug = match.params.slugname;

  const marathon = useSelector((state) => state.ArchiveReducer.archives);
  // console.log(marathon[slug]?.name);

  if (!marathon[slug]) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="marathon-header mb-5">{marathon[slug]?.name}</div>
      <DragDropContext onDragEnd={() => {}}>
        <Archive
          toWatchMovies={marathon[slug]?.watchList || []}
          watchingMovies={marathon[slug]?.watchingList || []}
          watchedMovies={marathon[slug]?.watchedList || []}
        />
      </DragDropContext>
    </>
  );
};

export default ArchivePage;
