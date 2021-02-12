import React from "react";

import "./MainWeather.css";

export default function MainWeather(props) {
  return (
    <div className="container MainWeather">
      <div className="row d-flex justify-content-centre">
        <div className="col">
          <h1 className="city">{props.data.city}</h1>
        </div>
      </div>
      <div className="col">
        <p className="date">Sat, 7 November, 2:00</p>
      </div>
      <div className="row d-flex justify-content-centre">
        <div className="col weatherIcon">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className="mx-auto d-block"
          />
        </div>
        <div className="col current-temp">
          <span className="mainTemp">{Math.round(props.data.mainTemp)}°</span>
          <span className="units">
            <a href="#" id="celciusButton" className="active">
              C
            </a>
            <span>|</span>
            <a href="#" id="farenheitButton">
              F
            </a>
          </span>
        </div>
      </div>
      <div className="row d-flex justify-content-centre">
        <div className="col weatherDescription">
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="col mainHiLo">
          <p>
            <i className="fas fa-thermometer-empty"></i>
            <span className="mainLo"> {Math.round(props.data.mainLo)}</span>° |{" "}
            <i className="fas fa-thermometer-full"></i>
            <span className="mainHi"> {Math.round(props.data.mainHi)}</span>°
          </p>
        </div>
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
