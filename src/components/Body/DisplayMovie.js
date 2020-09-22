import React from "react";
import CrossButton from "./CrossButton";
import { useDispatch } from "react-redux";
import {
  removeFromToWatch,
  removeFromWatched,
  removeFromWatching,
} from "../../redux/Movies/action";

const DisplayMovie = ({ movie, section }) => {
  //   console.log(movie);
  const dispatch = useDispatch();

  const styles = {
    // display: "flex",
    // justifyContent: "space-around",
    margin: "auto",
    backgroundColor: "whitesmoke",
    margin: "15px 10px",
    borderRadius: "7px",
    paddingTop: "10px",
    paddingBottom: "10px",
  };

  const renderGenres = movie.genres.map((genre) => {
    return <code key={genre}>{genre}</code>;
  });

  const handleCrossClick = () => {
    switch (section) {
      case "toWatch":
        dispatch(removeFromToWatch(movie.id));
        return;
      case "watching":
        dispatch(removeFromWatching(movie.id));
        return;
      case "watched":
        dispatch(removeFromWatched(movie.id));
        return;
      default:
        return;
    }
  };

  return (
    <div key={movie.id} style={{ ...styles }} className="row">
      <div className="col-lg-4">
        <img src={movie.medium_cover_image} className="display-movie-image" />
      </div>
      <div className="col-lg-7 d-flex flex-column">
        <h5 className="text-dark mb-0">
          {movie.title}
          <span className="mx-2">{movie.rating}</span>
        </h5>
        <p>{renderGenres}</p>
        <a
          href={`${movie.torrents[1].url}`}
          target="_blank"
          className="mt-auto mb-2"
        >
          Download
        </a>
      </div>
      <div className="col-lg-1 d-flex justify-content-center align-items-start">
        <CrossButton handleClick={handleCrossClick} />
      </div>
    </div>
  );
};

export default DisplayMovie;
