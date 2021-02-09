import React from "react";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h1 id="city">Auckland</h1>
      <p className="date">Sat, 7 November, 2:00</p>

      <p className="factors">
        Humidity <span id="humidity">90</span>% <br />
        Wind <span id="wind">5 </span>km/h
      </p>
    </div>
  );
}
