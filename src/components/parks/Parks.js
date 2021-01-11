// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
// import ReactDOM from "react";
let parkPics = [];
let latLong = "";
let parkDescription = "";

const Parks = () => {
  const [data, setData] = useState([]);
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
        setData(res.data.fullName);
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
        {/* form input button 'park name' onclick click handler funct does the query fetch */}
        <ul>
          {data.map((park) => (
            <li key={data.id}>
              Name: {data.fullName} | Address :{data.addresses}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Parks;

// print(data["data"][0]["fullName"])
// for address in data["data"][0]["addresses"]:
//     if address["type"] == "Mailing":
//         print(address["line1"])
//         if address["line2"] != "":
//             print(address["line2"])
//         if address["line3"] != "":
//             print(address["line3"])
//         print(address["city"] + ", " + address["stateCode"] + " " + str(address["postalCode"]))
