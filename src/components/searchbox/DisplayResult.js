import React from "react";

const DisplayResult = ({ results }) => {
  const renderResult = (results || []).map((result) => {
    return <li key={result.id}>{result.title}</li>;
  });

  return (
    <div>
      <ul>{renderResult}</ul>
    </div>
  );
};

export default DisplayResult;
