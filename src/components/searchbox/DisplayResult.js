import React from "react";
import { useDispatch } from "react-redux";
import { addInToWatch } from "../../redux/Movies/action";

const DisplayResult = ({ results, focus, loading }) => {
  const dispatch = useDispatch();

  const handleClick = (result) => {
    dispatch(addInToWatch(result));
  };

  const renderResult = (results || []).map((result) => {
    return (
      <li
        key={result.id}
        className="search-result__list--item"
        onClick={(e) => handleClick(result)}
      >
        <div>
          <img src={result.small_cover_image} />
        </div>
        <div className="search-result__list--item-detail">
          <p>
            {result.title}{" "}
            <code className="bg-dark text-light">{result.rating}</code>
          </p>
          <small>{result.genres[0]}</small>
          {/* <p className="">{result.synopsis}</p> */}
        </div>
      </li>
    );
  });

  return (
    <>
      {focus && renderResult.length ? (
        <div className="search-result">
          <ul className="search-result__list">{renderResult}</ul>
        </div>
      ) : loading ? (
        <div className="search-result">Searching</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DisplayResult;
