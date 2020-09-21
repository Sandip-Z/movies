import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "./EmptyList";

const ToWatch = () => {
  const movies = useSelector((state) => state.MovieReducer.toWatch) || [];
  const dispatch = useDispatch();

  console.log(movies);

  const renderData = movies.map((movie) => {
    return <p key={movie.id}>{movie.title}</p>;
  });

  return (
    <>
      {renderData.length ? (
        renderData
      ) : (
        <EmptyList message="No movies in to watch." />
      )}
    </>
  );
};

export default ToWatch;
