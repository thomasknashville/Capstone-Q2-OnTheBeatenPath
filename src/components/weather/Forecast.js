import React, { useState, useEffect } from "react";

function Forecast() {
  const key = "c46fd867d14df80fbe138c427a6404c0";
  const lon = "-101.8795";
  const lat = "33.5146";

  const [dayOneMax, setDayOneMax] = useState("");
  const [dayOneMin, setDayOneMin] = useState("");
  const [dayOneWeather, setDayOneWeather] = useState("");

  const [dayTwoMax, setDayTwoMax] = useState("");
  const [dayTwoMin, setDayTwoMin] = useState("");
  const [dayTwoWeather, setDayTwoWeather] = useState("");

  const [dayThreeMax, setDayThreeMax] = useState("");
  const [dayThreeMin, setDayThreeMin] = useState("");
  const [dayThreeWeather, setDayThreeWeather] = useState("");

  const [dayFourMax, setDayFourMax] = useState("");
  const [dayFourMin, setDayFourMin] = useState("");
  const [dayFourWeather, setDayFourWeather] = useState("");

  const [dayFiveMax, setDayFiveMax] = useState("");
  const [dayFiveMin, setDayFiveMin] = useState("");
  const [dayFiveWeather, setDayFiveWeather] = useState("");

  const [daySixMax, setDaySixMax] = useState("");
  const [daySixMin, setDaySixMin] = useState("");
  const [daySixWeather, setDaySixWeather] = useState("");

  const [daySevenMax, setDaySevenMax] = useState("");
  const [daySevenMin, setDaySevenMin] = useState("");
  const [daySevenWeather, setDaySevenWeather] = useState("");
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

        setDayOneMax(data.daily[0].temp.max);
        setDayOneMin(data.daily[0].temp.min);
        setDayOneWeather(data.daily[0].weather[0].main);

        setDayTwoMax(data.daily[1].temp.max);
        setDayTwoMin(data.daily[1].temp.min);
        setDayTwoWeather(data.daily[1].weather[0].main);

        setDayThreeMax(data.daily[2].temp.max);
        setDayThreeMin(data.daily[2].temp.min);
        setDayThreeWeather(data.daily[2].weather[0].main);

        setDayFourMax(data.daily[3].temp.max);
        setDayFourMin(data.daily[3].temp.min);
        setDayFourWeather(data.daily[3].weather[0].main);

        setDayFiveMax(data.daily[4].temp.max);
        setDayFiveMin(data.daily[4].temp.min);
        setDayFiveWeather(data.daily[4].weather[0].main);

        setDaySixMax(data.daily[5].temp.max);
        setDaySixMin(data.daily[5].temp.min);
        setDaySixWeather(data.daily[5].weather[0].main);

        setDaySevenMax(data.daily[6].temp.max);
        setDaySevenMin(data.daily[6].temp.min);
        setDaySevenWeather(data.daily[6].weather[0].main);
      });
  }, []);

  return (
    <>
      <p>
        Day 1 High : {dayOneMax}
        Day 1 Low : {dayOneMin}
        Day 1 Forecast: {dayOneWeather}
      </p>
      <p>
        Day 2 high : {dayTwoMax}
        Day 2 Low : {dayTwoMin}
        Day 2 Forecast: {dayTwoWeather}
      </p>
      <p>
        Day 3 high : {dayThreeMax}
        Day 3 Low : {dayThreeMin}
        Day 3 Forecast: {dayThreeWeather}
      </p>
      <p>
        Day 4 high : {dayFourMax}
        Day 4 Low : {dayFourMin}
        Day 4 Forecast: {dayFourWeather}
      </p>
      <p>
        Day 5 high : {dayFiveMax}
        Day 5 Low : {dayFiveMin}
        Day 5 Forecast: {dayFiveWeather}
      </p>
      <p>
        Day 6 high : {daySixMax}
        Day 6 Low : {daySixMin}
        Day 6 Forecast: {daySixWeather}
      </p>
      <p>
        Day 7 high : {daySevenMax}
        Day 7 Low : {daySevenMin}
        Day 7 Forecast: {daySevenWeather}
      </p>
    </>
  );
}

export default Forecast;
