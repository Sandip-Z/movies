import React from "react";
import ToWatch from "../Body/ToWatch";
import Watched from "../Body/Watched";
import Watching from "../Body/Watching";

const Archive = ({ toWatchMovies, watchingMovies, watchedMovies }) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <ToWatch allowDrag={false} allowDrop={false} movies={toWatchMovies} />
      </div>
      <div className="col-lg-4">
        <Watching allowDrop={false} allowDrag={false} movies={watchingMovies} />
      </div>
      <div className="col-lg-4">
        <Watched allowDrag={false} allowDrop={false} movies={watchedMovies} />
      </div>
    </div>
  );
};

export default Archive;
