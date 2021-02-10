import React from "react";
import MainWeather from "./MainWeather";
import SearchBar from "./SearchBar";
import Hourly from "./Hourly";

import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <SearchBar />
      <h1 className="city">Auckland</h1>
      <p className="date">Sat, 7 November, 2:00</p>
      <MainWeather />
      <p className="factors">
        Humidity: <span className="humidity">90</span>% <br />
        Wind: <span className="wind">5 </span>km/h
      </p>
      <Hourly />
    </div>
  );
}
