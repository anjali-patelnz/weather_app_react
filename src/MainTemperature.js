import React from "react";

export default function MainTemperature(props) {
  function showFarenheit(event) {
    event.preventDefault();
    props.setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function mainFarenheit() {
    return Math.round((props.mainTemp * 9) / 5 + 32);
  }

  if (props.unit === "celsius") {
    return (
      <div className="col current-temp">
        <span className="mainTemp">{Math.round(props.mainTemp)}°</span>
        <span className="units">
          C<span>|</span>
          <a href="/" onClick={showFarenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="col current-temp">
        <span className="mainTemp">{mainFarenheit()}°</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            C
          </a>
          <span>|</span>F
        </span>
      </div>
    );
  }
}
