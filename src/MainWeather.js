import React from "react";

import "./MainWeather.css";

export default function MainWeather() {
  return (
    <div className="MainWeather">
      <div className="row d-flex justify-content-center">
        <div className="col-sm">
          <div className="weatherIcon">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              id="mainIcon"
              className="mx-auto d-block"
            />
          </div>
        </div>
        <div className="col-sm mx-auto">
          <div className="currentTemp">
            <span className="mainTemp">22°</span>
            <span className="units">
              <a href="#" id="celciusButton" className="active">
                C
              </a>
              <span>|</span>
              <a href="#" id="farenheitButton">
                F
              </a>
            </span>
            <div className="mainHL">
              <p>
                <i className="fas fa-thermometer-empty"></i>
                <span className="mainLo"> 12</span>°
                <i className="fas fa-thermometer-full"></i>
                <span className="mainHi"> 24</span>°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
