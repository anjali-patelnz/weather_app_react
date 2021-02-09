import React from "react";

import "./Footer.css";

export default function Footer() {
  let anjaliProfile = (
    <strong>
      <a href="https://www.linkedin.com/in/anjalipatelnz" target="_blank">
        Anjali Patel
      </a>
    </strong>
  );

  let anjaliGithub = (
    <a
      href="https://github.com/anjali-patelnz/weather_app_react"
      target="_blank"
    >
      GitHub.
    </a>
  );

  return (
    <div className="Footer">
      <p>
        This site is coded by {anjaliProfile} and is open-sourced on{" "}
        {anjaliGithub}
      </p>
    </div>
  );
}
