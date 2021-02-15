import React, { useState } from "react";
import axios from "axios";
import MainWeather from "./MainWeather";
import Forcast from "./Forcast";

import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [loaded, setLoaded] = useState(false);
  const [mainWeather, setMainWeather] = useState(" ");

  function handleApiCall(response) {
    setLoaded(true);
    setMainWeather({
      city: response.data.name,
      date: response.data.dt * 1000,
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      mainTemp: response.data.main.temp,
      description: response.data.weather[0].description,
      mainLo: response.data.main.temp_min,
      mainHi: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (loaded) {
    return (
      <div className="WeatherApp">
        <div className="container">
          <div className="SearchBar">
            <form>
              <div className="row justify-content-center">
                <div className="col-8">
                  <input
                    type="search"
                    id="city-search"
                    placeholder="Enter a city..."
                    autoFocus="off"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <button type="submit" id="search-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>

                <div className="col-1">
                  <button type="click" id="findMe-button">
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <MainWeather data={mainWeather} />

        <Forcast city={mainWeather.city} />
      </div>
    );
  } else {
    let city = "Auckland";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c31b4fce1a46009ae0af063ea44bb353&units=metric`;
    axios.get(apiUrl).then(handleApiCall);

    return "Loading...";
  }
}
