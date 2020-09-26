import React, { useState, useEffect } from "react";
import useClickListener from "../../hooks/useClickListener";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchData } from "../../redux/Movies/action";
import { getAllMovieByName } from "../../services/movies";
import debounce from "../../utils/debounce";
import DisplayResult from "./DisplayResult";

const SearchBox = () => {
  const [param, setParam] = useState("");
  const [focus] = useClickListener("search-box");
  const [loading, setLoading] = useState(false);
  const movies = useSelector((state) => state.MovieReducer.searchData) || [];
  const dispatch = useDispatch();

  const handleInputChange = debounce((value) => {
    setParam(value);
  }, 500);

  useEffect(() => {
    if (param !== "") {
      setLoading(true);
      dispatch(getAllMovieByName(param, () => setLoading(false)));
    } else {
      dispatch(clearSearchData());
    }
  }, [param]);

  return (
    <div className="search-box" id="search-box">
      <input
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Search Yts.mx"
      />
      <DisplayResult results={movies} focus={focus} loading={loading} />
    </div>
  );
};

export default SearchBox;
