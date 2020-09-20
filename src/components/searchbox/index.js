import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchData } from "../../redux/Movies/action";
import { getAllMovieByName } from "../../services/movies";
import DisplayResult from "./DisplayResult";

const SearchBox = () => {
  const [param, setParam] = useState("");
  const movies = useSelector((state) => state.MovieReducer.searchData) || [];
  const dispatch = useDispatch();

  // const renderMovies = movies.map(movie => <p key={movie.id}>{movie.title}</p>)

  const handleInputChange = (e) => {
    setParam(e.target.value);
  };

  useEffect(() => {
    if (param !== "") {
      dispatch(getAllMovieByName(param));
    } else {
      dispatch(clearSearchData());
    }
  }, [param]);

  return (
    <>
      <input onChange={handleInputChange} value={param} />
      <DisplayResult results={movies} />
    </>
  );
};

export default SearchBox;
