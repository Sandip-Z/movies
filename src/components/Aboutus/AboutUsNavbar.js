import React from "react";
import { Link } from "react-router-dom";

const AboutUsNavbar = () => {
  return (
    <nav className="about-us-nav">
      <div className="about-us-logo">Logo</div>
      <div>
        <ul>
          <li>About Us</li>
          <li>FAQs</li>
          <li className="highlight-list-item">
            <Link to="/">Go to application</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AboutUsNavbar;
