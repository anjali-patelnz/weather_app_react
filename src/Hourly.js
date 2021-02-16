import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Hourly.css";

export default function Hourly(props) {
  function hourlyTimestamp() {
    let hourlydate = new Date(props.data.dt * 1000);
    let hours = hourlydate.getHours();
    if (hours < 10) {
      return (hours = `0${hours}:00`);
    } else {
      return `${hours}:00`;
    }
  }

  function hourlyTemperature() {
    let hourlyTemperature = Math.round(props.data.main.temp);

    if (props.unit === "farenheit") {
      hourlyTemperature = Math.round((hourlyTemperature * 9) / 5 + 32);
    }
    return `${hourlyTemperature}°`;
  }

  return (
    <div className="card Hourly">
      <div className="card-body">
        <div className="card-img-top">
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <p className="card-text">{hourlyTemperature()}</p>
        <p className="card-text">{hourlyTimestamp()}</p>
      </div>
    </div>
  );
}
