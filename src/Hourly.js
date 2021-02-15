import React from "react";

import "./Hourly.css";

export default function Hourly(props) {
  return (
    <div className="card Hourly">
      <div className="card-body">
        <img className="card-img-top" src="" />
        <p className="card-text">{Math.round(props.data.main.temp)}°</p>
        <p className="card-text">15:00</p>
      </div>
    </div>
  );
}
