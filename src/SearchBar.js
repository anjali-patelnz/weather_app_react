import React from "react";

import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <form>
        <div className="row justify-content-center">
          <div className="col-8">
            <input
              type="search"
              id="city-search"
              placeholder="Enter a city..."
              autofocus="off"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <button type="submit" id="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div class="col-1">
            <button type="click" id="findMe-button">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
