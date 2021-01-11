import React, { useState, useEffect } from "react";

function Weather() {
  const key = "c46fd867d14df80fbe138c427a6404c0";
  const lon = "-101.8795";
  const lat = "33.5146";
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [feels_like, setFeelsLike] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely&appid=" +
        key +
        "&units=imperial"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeelsLike(data.current.feels_like);
        setMainTemp(data.current.temp);
        setDescription(data.current.weather[0].description);
      });
  }, []);

  return (
    <>
      <h1>Current Weather</h1>
      Temperature : {mainTemp} degrees <p>Feels Like : {feels_like} degrees</p>
      Currently : {description}
    </>
  );
}

export default Weather;
