import React from "react";
import axios from "axios";

import "./Hourly.css";

export default function Hourly(props) {
  function handleHourlyResponse(response) {
    console.log(response.data);
  }

  let forcastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=c31b4fce1a46009ae0af063ea44bb353&units=metric`;
  axios.get(forcastApiUrl).then(handleHourlyResponse);

  return (
    <div className="Hourly">
      <div className="card-group" id="hourlyForcast"></div>
      <div className="card">
        <div className="card-body">
          <img className="card-img-top" src="" />
          <p className="card-text">10°</p>
          <p className="card-text">15:00</p>
        </div>
      </div>
      <p>{props.city}</p>
    </div>
  );
}
