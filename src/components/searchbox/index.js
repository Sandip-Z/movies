import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchData } from "../../redux/Movies/action";
import { getAllMovieByName } from "../../services/movies";
import debounce from "../../utils/debounce";
import DisplayResult from "./DisplayResult";

const SearchBox = () => {
  const [param, setParam] = useState("");
  const movies = useSelector((state) => state.MovieReducer.searchData) || [];
  const dispatch = useDispatch();

  const handleInputChange = debounce((value) => {
    setParam(value);
  }, 500);

  useEffect(() => {
    if (param !== "") {
      dispatch(getAllMovieByName(param));
    } else {
      dispatch(clearSearchData());
    }
  }, [param]);

  return (
    <>
      <input onChange={(e) => handleInputChange(e.target.value)} />
      <DisplayResult results={movies} />
    </>
  );
};

export default SearchBox;
