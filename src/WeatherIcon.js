import React from "react";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": "WeatherIconsAnimated/day.svg",
    "01n": "WeatherIconsAnimated/night.svg",
    "02d": "WeatherIconsAnimated/cloudy-day-1.svg",
    "02n": "WeatherIconsAnimated/cloudy-night-1.svg",
    "03d": "WeatherIconsAnimated/cloudy-day-2.svg",
    "03n": "WeatherIconsAnimated/cloudy-night-2.svg",
    "04d": "WeatherIconsAnimated/cloudy.svg",
    "04n": "WeatherIconsAnimated/cloudy.svg",
    "09d": "WeatherIconsAnimated/rainy-6.svg",
    "09n": "WeatherIconsAnimated/rainy-6.svg",
    "10d": "WeatherIconsAnimated/rainy-3.svg",
    "10n": "WeatherIconsAnimated/rainy-5.svg",
    "11d": "WeatherIconsAnimated/thunder.svg",
    "11n": "WeatherIconsAnimated/thunder.svg",
    "13d": "WeatherIconsAnimated/snowy-3.svg",
    "13n": "WeatherIconsAnimated/snowy-6.svg",
    "50d": "WeatherIconsAnimated/cloudy.svg",
    "50n": "WeatherIconsAnimated/cloudy.svg",
  };

  return (
    <div className="weatherIcons">
      <img src={codeMapping[code]} alt={alt} className="weathericon" />
    </div>
  );
}
