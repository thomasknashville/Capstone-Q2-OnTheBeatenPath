// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
// import ReactDOM from "react";

//TODO get id from park.total function

const Parks = () => {
  const [park, setPark] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("mounted");
    fetch("developer.nps.gov/api/v1/parks", {
      method: "GET",
      headers: { api_key: "tNfghfa6ZwSpNcH4xiYBMBVdgkWYjtlFegupg12R" },
    })
      .then((res) => {
        res.json();
        console.log(res);
      })

      .then((res) => {
        console.log(res);
        setPark(res.data.fullName);
        setIsLoaded(true);
      });
    // .catch((err) => {
    //   console.error(err);
    // });
  }, []);

  //  TODO get pics, latLong, bodyText in api/main.js

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Parks">
        {" "}
        This is parks page
        {/* form input button 'park name' onclick click handler funct does the query fetch */}
        <ul>
          {park.map((park) => (
            <li key={park.total}>
              Name: {park.fullName} | Address :{park.addresses}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Parks;
