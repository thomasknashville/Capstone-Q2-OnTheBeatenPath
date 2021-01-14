// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {} from "module";
import OutlinedCard from "../card/OutlinedCard";
// import ReactDOM from "react";
let parkPics = [];
let latLong = "";
let parkDescription = "";

const Parks = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("mounted");
    fetch(
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
      <div className="Parks">
        {" "}
        This is parks page
        <OutlinedCard />
        {/* form input button 'park name' onclick click handler funct does the query fetch */}
        <ul>
          {data.map((park) => (
            <li key={park.id}>Name: {park.fullName} </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Parks;
