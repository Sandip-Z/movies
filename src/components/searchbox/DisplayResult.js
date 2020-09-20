import React from "react";

const DisplayResult = ({ results }) => {
  const renderResult = (results || []).map((result) => {
    return (
      <li key={result.id} className="search-result__list--item">
        <div>
          <img src={result.small_cover_image} />
        </div>
        <div className="search-result__list--item-detail">
          <h3>
            {result.title}{" "}
            <code className="bg-dark text-light">{result.rating}</code>
          </h3>
          <p className="">{result.synopsis}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      {results.length ? (
        <div className="search-result">
          <ul className="search-result__list">{renderResult}</ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DisplayResult;
