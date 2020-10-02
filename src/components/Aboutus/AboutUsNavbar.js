import React from "react";

const AboutUsNavbar = () => {
  return (
    <nav className="about-us-nav">
      <div className="about-us-logo">Logo</div>
      <div>
        <ul>
          <li>About Us</li>
          <li>FAQs</li>
          <li className="highlight-list-item">Go to application</li>
        </ul>
      </div>
    </nav>
  );
};

export default AboutUsNavbar;
