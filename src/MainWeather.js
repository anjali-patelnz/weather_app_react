import React from "react";
import Timestamp from "./Timestamp";
import MainTemperature from "./MainTemperature";

import "./MainWeather.css";

export default function MainWeather(props) {
  function mainHiLo() {
    let mainLow = Math.round(props.data.mainLo);
    let mainHigh = Math.round(props.data.mainHi);

    if (props.unit === "farenheit") {
      mainLow = Math.round((mainLow * 9) / 5 + 32);
      mainHigh = Math.round((mainHigh * 9) / 5 + 32);
    }

    return (
      <p>
        <i className="fas fa-thermometer-empty"></i>
        <span className="mainLo"> {mainLow}</span>° |{" "}
        <i className="fas fa-thermometer-full"></i>
        <span className="mainHi"> {mainHigh}</span>°
      </p>
    );
  }

  return (
    <div className="container MainWeather">
      <div className="row d-flex justify-content-centre">
        <div className="col">
          <h1 className="city">{props.data.city}</h1>
        </div>
      </div>
      <div className="col">
        <Timestamp date={props.data.date} />
      </div>
      <div className="row d-flex justify-content-centre">
        <div className="col weatherIcon">
          <img
            src={props.data.weatherIcon}
            alt={props.data.description}
            className="mx-auto d-block"
          />
        </div>
        <MainTemperature
          unit={props.unit}
          setUnit={props.setUnit}
          mainTemp={props.data.mainTemp}
        />
      </div>
      <div className="row d-flex justify-content-centre">
        <div className="col weatherDescription">
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="col mainHiLo">{mainHiLo()}</div>
      </div>
      <div className="row d-flex justify-content-centre">
        <p className="col factors">
          Humidity: <span className="humidity">{props.data.humidity}</span>%{" "}
          <br />
          Wind: <span className="wind">{Math.round(props.data.wind)} </span>
          km/h
        </p>
      </div>
    </div>
  );
}
