import React from "react";
import { Link } from "react-router-dom";

const AboutUsHeader = () => {
  return (
    <header className="about-us-header">
      <div>
        <h1>Movie List</h1>
        <h5>TRACK YOUR MOVIE MARATHONS.</h5>
        <Link to="/login" className="header-button">
          Log in
        </Link>
      </div>
    </header>
  );
};

export default AboutUsHeader;
