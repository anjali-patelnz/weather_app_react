import React from "react";

import "./Hourly.css";

export default function Hourly() {
  return (
    <div className="Hourly">
      <div className="card-group" id="hourlyForcast"></div>
      <div className="card">
        <div className="card-body">
          <img className="card-img-top" src="" />
          <p className="card-text">10°</p>
          <p className="card-text">15:00</p>
        </div>
      </div>
    </div>
  );
}
