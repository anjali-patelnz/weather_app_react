import React from "react";
import MainWeather from "./MainWeather";
import SearchBar from "./SearchBar";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <SearchBar />
      <h1 id="city">Auckland</h1>
      <p className="date">Sat, 7 November, 2:00</p>
      <MainWeather />
      <p className="factors">
        Humidity <span id="humidity">90</span>% <br />
        Wind <span id="wind">5 </span>km/h
      </p>
    </div>
  );
}
