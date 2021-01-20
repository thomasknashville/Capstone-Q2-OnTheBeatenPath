// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {} from "module";
import OutlinedCard from "../card/OutlinedCard";
import Navigation from "../Navigation";
// import BootstrapCarousel from "../pictures/pics";
// import ReactDOM from "react";
import "../../App.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Parks() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  // const [nationalPark, setNationalPark] = useState([]);
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

  // const grabNationalPark = () => {
  //   setNationalPark(Object.keys);
  // };

  // useEffect(() => {
  //   grabNationalPark();
  // }, []);

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
          {data
            .filter((park) => park.fullName.includes("National Park"))
            .map((park) => {
              return (
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={park.images[0].url} />
                    <Card.Body>
                      <Card.Title>{park.fullName}ah!</Card.Title>
                      <Card.Text>{park.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{park.latLong}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default Parks;
