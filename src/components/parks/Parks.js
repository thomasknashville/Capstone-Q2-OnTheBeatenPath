// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {} from "module";
import OutlinedCard from "../card/OutlinedCard";
import Navigation from "../Navigation";
// import ReactDOM from "react";
// TODO:
// let parkPics = [];
// let latLong = "";
// let parkDescription = "";

const Parks = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [start, setStart] = useState(0);
  useEffect(() => {
    console.log("mounted");
    fetch(
      // `&start=${start}`
      "https://developer.nps.gov/api/v1/parks?api_key=d4lCLBfTkTqlqL0cT2q46SJawlqGZ1eLyShCEEDP",
      // , {
      //   method: "GET",
      //   mode: "no-cors",
      //   headers: { api_key: "d4lCLBfTkTqlqL0cT2q46SJawlqGZ1eLyShCEEDP" },
      // }
    )
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setData(data.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //  TODO get latLong, addresses, images (set images [0] to home page carousel, bodyText in api/main.js
  // get a list of parks in alpha order? or just start with our 5?

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
              .map((park) => (
                <option key={park.id}> Park Name: {park.fullName} </option>
              ))}
          </select>
          {/* <carousel><carousel.item> {park.images[0]}</carousel.item></carousel> */}
        </div>
      </>
    );
  }
};

export default Parks;
