import React from "react";
import CrossButton from "./CrossButton";
import { useDispatch } from "react-redux";
import {
  removeFromToWatch,
  removeFromWatched,
  removeFromWatching,
} from "../../redux/Movies/action";
import { Draggable } from "react-beautiful-dnd";

const DisplayMovie = ({ movie, section, index, allowDrag }) => {
  const dispatch = useDispatch();

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
    <Draggable
      draggableId={movie.id.toString()}
      index={index}
      isDragDisabled={!allowDrag}
    >
      {(provided) => {
        return (
          <div
            key={movie.id}
            className="row draggable-box m-4"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="col-lg-4">
              <img
                src={movie.medium_cover_image}
                className="display-movie-image"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column">
              <h5 className="text-dark mb-0">
                {movie.title}
                <span className="mx-2">{movie.rating}</span>
              </h5>
              <p>{renderGenres}</p>
              <a
                href={`${
                  movie?.torrents[1]?.url
                    ? movie?.torrents[1]?.url
                    : movie?.torrents[0]?.url
                }`}
                target="_blank"
                className="mt-auto mb-2"
              >
                Download
              </a>
            </div>
            <div className="col-lg-2 d-flex justify-content-center align-items-start">
              <CrossButton handleClick={handleCrossClick} />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DisplayMovie;
