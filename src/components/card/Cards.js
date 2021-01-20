import React from "react";
// import CardItem from "./CardItem";
import "./Cards.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Cards({ parkData }) {
  return (
    <div className="cards">
      <h1>Lets check out this park!</h1>

      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>{parkData.fullName}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
{
  /* <p>{park.latLong}</p>
<p>{park.description}</p>
<img src={park.images[0].url} alt="Park Scenery" /> */
}
{
  /* <img src={park.images[1].url} alt="Park Scenery" />
<img src={park.images[2].url} alt="Park Scenery" /> */
}
