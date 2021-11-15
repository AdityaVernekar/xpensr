import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topfold.css";
const Topfold = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              value={query}
              placeholder="Search for expenses"
              onChange={(e) => {
                handleQuery(e);
              }}
            />
          </div>
          <Link to="/addexpense">
            <div className="add-button">
              <i class="fas fa-plus-circle"></i>Add
            </div>
          </Link>
        </div>
      ) : (
        <Link to="/">
          <div className="add-topfold">
            <div className="add-topfold-button">
              <i class="fas fa-angle-left"></i>
              <label htmlFor="">Back</label>
            </div>
            <div className="add-topfold-button">
              <i class="fas fa-times-circle"></i>
              <label htmlFor="">Cancel</label>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Topfold;
