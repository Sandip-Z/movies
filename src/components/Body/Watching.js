import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "./EmptyList";

const Watching = () => {
  const movies = useSelector((state) => state.MovieReducer.watching) || [];
  const dispatch = useDispatch();

  const renderData = movies.map((movie) => {
    return <p key={movie.id}>{movie.title}</p>;
  });

  return (
    <>
      {renderData.length ? (
        renderData
      ) : (
        <EmptyList message="No movies in watching" />
      )}
    </>
  );
};

export default Watching;
