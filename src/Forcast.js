import React, { useState } from "react";
import Hourly from "./Hourly";
import axios from "axios";

export default function Forcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forcast, setForcast] = useState(null);

  function handleForcastResponse(response) {
    setForcast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forcast.city.name) {
    return (
      <div className="Forcast">
        <div className="card-group hourlyForcast">
          <Hourly data={forcast.list[0]} />
          <Hourly data={forcast.list[1]} />
          <Hourly data={forcast.list[2]} />
          <Hourly data={forcast.list[3]} />
          <Hourly data={forcast.list[4]} />
        </div>
      </div>
    );
  } else {
    let forcastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=c31b4fce1a46009ae0af063ea44bb353&units=metric`;
    axios.get(forcastApiUrl).then(handleForcastResponse);

    return null;
  }
}
