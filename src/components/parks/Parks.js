// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {} from "module";
import OutlinedCard from "../card/OutlinedCard";
import Navigation from "../Navigation";
// import BootstrapCarousel from "../pictures/pics";
// import ReactDOM from "react";
import "../../App.css";
// import Cards from "../card/Cards.js";

function Parks() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [images, setImages] = useState([]);
  const [latLong, setLatLong] = useState("");
  const [parkDesc, setParkDesc] = useState("");
  // const [start, setStart] = useState(0);

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?api_key=uqNva6PQL13BVbKmZx3MApfJKFlammyCCyOEVdVz")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
        setIsLoaded(true);
        setImages(data.images);
        setLatLong(data.latLong);
        setParkDesc(data.description);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Navigation />
<<<<<<< HEAD
        <OutlinedCard />
        <div className="Parks">
          This is parks page
=======
        {/* run<Cards /> */}
        <div className="Parks">
          This is the parks page
          <OutlinedCard />
          {/* <BootstrapCarousel /> */}
>>>>>>> a1507b30b5fb82959a4422c8545be654ca218dc2
          {/* form input button 'park name' onclick click handler funct does the query fetch */}
          {/* start += 50 onClick use setStart*/}
          Select a park to view!
          <select>
            {data
              .filter((park) => park.fullName.includes("National Park"))
              .map((park) => (
                <option key={park.id}> Park Name: {park.fullName} </option>
              ))}
          </select>
          {/* set the following for selected park???? */}
          {/* function parkImages() {
          let parkImages = data.map((park) => (data.park.images)
        } */}
          {images}
          {parkDesc}
          {latLong}
        </div>
      </>
    );
  }
}
export default Parks;
