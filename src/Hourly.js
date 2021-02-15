import React from "react";

import "./Hourly.css";

export default function Hourly(props) {
  function hourlyTimestamp() {
    let hourlydate = new Date(props.data.dt * 1000);
    let hours = hourlydate.getHours();
    return `${hours}:00`;
  }

  function hourlyTemperature() {
    let hourlyTemperature = Math.round(props.data.main.temp);
    return `${hourlyTemperature}°`;
  }

  return (
    <div className="card Hourly">
      <div className="card-body">
        <img className="card-img-top" src="" />
        <p className="card-text">{hourlyTemperature()}</p>
        <p className="card-text">{hourlyTimestamp()}</p>
      </div>
    </div>
  );
}
