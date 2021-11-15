import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header">
          <div className="header-logo">
            Xpenser <i className="fab fa-cc-apple-pay"></i>
          </div>
          <div className="header-button">
            <a href="https://github.com/AdityaVernekar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>Star
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
