// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {} from "module";
import OutlinedCard from "../card/OutlinedCard";
import Navigation from "../Navigation";
// import BootstrapCarousel from "../pictures/pics";
// import ReactDOM from "react";
import "../../App.css";
import Cards from "../card/Cards.js";

function Parks() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  // const [images, setImages] = useState([]);
  // const [latLong, setLatLong] = useState("");
  // const [parkDesc, setParkDesc] = useState("");
  // const [selectPark, SetSelectPark] = useState("");
  // const [start, setStart] = useState(0);

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?api_key=uqNva6PQL13BVbKmZx3MApfJKFlammyCCyOEVdVz")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
        setIsLoaded(true);
        // setImages(data.data.images);
        // setLatLong(data.data.latLong);
        // setParkDesc(data.data.description);
        console.log(data.data.id);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Navigation />
        <OutlinedCard />

        <div className="Parks">
          This is parks page
          {/* form input button 'park name' onclick click handler funct does the query fetch */}
          {/* start += 50 onClick use setStart*/}
          Select a park to view!
          <select>
            {data
              .filter((park) => park.fullName.includes("National Park"))
              .map((park) => {
                return <option key={park.id}> Park Name: {park.fullName} </option>;
              })}
          </select>
          {/* {data
            .filter((park) => park.fullName.includes("National Park"))
            .map((park) => {
              return 
                <div>
                  <p>
                    {park.images}
                    {park.description}
                    {park.latLong}
                  </p>
                </div>
              );
            })} */}
        </div>
      </>
    );
  }
}
export default Parks;

{
  /* <Cards name={park.fullName} location={park.latLong} description={park.description} /> */
}
