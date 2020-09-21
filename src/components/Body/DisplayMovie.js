import React from "react";

const DisplayMovie = ({ movie }) => {
  //   console.log(movie);

  const styles = {
    display: "flex",
    justifyContent: "space-around",
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

  return (
    <div key={movie.id} style={{ ...styles }}>
      <div>
        <img src={movie.medium_cover_image} className="display-movie-image" />
      </div>
      <div className="d-flex flex-column">
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
      <div className="cross-button text-dark">
        <p>X</p>
      </div>
    </div>
  );
};

export default DisplayMovie;
