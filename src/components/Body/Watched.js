import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "./EmptyList";

const Watched = () => {
  const movies = useSelector((state) => state.MovieReducer.watched) || [];
  const dispatch = useDispatch();

  const renderData = movies.map((movie) => {
    return <p key={movie.id}>{movie.title}</p>;
  });

  return (
    <>
      {renderData.length ? (
        renderData
      ) : (
        <EmptyList message="No movies in to watched." />
      )}
    </>
  );
};

export default Watched;
