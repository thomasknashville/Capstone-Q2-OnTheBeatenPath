// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {} from "module";
import OutlinedCard from "../card/OutlinedCard";
import Navigation from "../Navigation";
// import BootstrapCarousel from "../pictures/pics";
// import ReactDOM from "react";

function Parks() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [latLong, setLatLong] = useState("");
  const [parkDesc, setParkDesc] = useState("");
  // const [start, setStart] = useState(0);

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?api_key=d4lCLBfTkTqlqL0cT2q46SJawlqGZ1eLyShCEEDP")
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
        <div className="Parks">
          This is the parks page
          <OutlinedCard />
          {/* <BootstrapCarousel /> */}
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
