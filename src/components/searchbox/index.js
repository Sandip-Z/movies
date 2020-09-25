import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchData } from "../../redux/Movies/action";
import { getAllMovieByName } from "../../services/movies";
import debounce from "../../utils/debounce";
import DisplayResult from "./DisplayResult";

const SearchBox = () => {
  const [param, setParam] = useState("");
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const movies = useSelector((state) => state.MovieReducer.searchData) || [];
  const dispatch = useDispatch();

  const handleInputChange = debounce((value) => {
    setParam(value);
  }, 500);

  const handleOnFocus = (e) => {
    console.log(e);
    setFocus(true);
  };

  const handleOnBlur = (e) => {
    console.log(e);
    setFocus(false);
  };

  useEffect(() => {
    if (param !== "") {
      setLoading(true);
      dispatch(getAllMovieByName(param, () => setLoading(false)));
    } else {
      dispatch(clearSearchData());
    }
  }, [param]);

  return (
    <div className="search-box" onFocus={handleOnFocus} onBlur={handleOnBlur}>
      <input
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Search Yts.mx"
      />
      <DisplayResult results={movies} focus={focus} loading={loading} />
    </div>
  );
};

export default SearchBox;
