import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getAllMovieByName } from "./services/movies";
import { clearSearchData } from "./redux/Movies/action";

function App() {
  const [param, setParam] = useState("");

  const name = useSelector((state) => state.UserReducer.name);
  const movies = useSelector((state) => state.MovieReducer.searchData) || [];
  const dispatch = useDispatch();

  const renderMovies = movies.map((movie) => (
    <p key={movie.id}>{movie.title}</p>
  ));

  const handleChange = (e) => {
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
    <div className="App">
      <input onChange={handleChange} value={param} />
      {renderMovies}
    </div>
  );
}

export default App;
