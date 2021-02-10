import React from "react";

import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="container">
      <div className="SearchBar">
        <form className="row g-2">
          <div className="col">
            <div className="input-group">
              <input type="text" placeholder="Enter a city..." />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col">
            <button type="click">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
