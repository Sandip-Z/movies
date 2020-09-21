import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayMovie from "./DisplayMovie";
import EmptyList from "./EmptyList";

const ToWatch = () => {
  const movies =
    useSelector((state) => state.MovieToWatchReducer.toWatch) || [];
  const dispatch = useDispatch();

  console.log(movies);

  const renderData = movies.map((movie) => {
    console.log(movie);
    return <DisplayMovie movie={movie} key={movie.id} section="toWatch" />;
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
