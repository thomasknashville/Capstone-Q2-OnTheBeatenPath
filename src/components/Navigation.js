import React from "react";
import { NavLink, Switch } from "react-router-dom";
import ConnectedRoute from "./ConnectedRoute";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./home/Home";
import Parks from "./parks/Parks";
import Reviews from "./reviews/Reviews";
import About from "./about/About";

// import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <Navbar fixed="top" variant="dark" className="bg">
        <Navbar.Brand className="brand"> On the Beaten Path </Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink to="/" activeClassName="selected" exact={true} className="mr-3 nav-link">
            Home
          </NavLink>
          <NavLink to="/parks" activeClassName="selected" exact={true} className="mr-3 nav-link">
            Parks
          </NavLink>
          <NavLink to="about" activeClassName="selected" exact={true} className="mr-3 nav-link">
            About
          </NavLink>
          <NavLink to="reviews" activeClassName="selected" exact={true} className="mr-3 nav-link">
            Reviews
          </NavLink>
        </Nav>
      </Navbar>
      <Switch>
        <ConnectedRoute exact path="/" redirectIfAuthenticated component={Home} />
        <ConnectedRoute exact isProtected path="/parks" component={Parks} />
        <ConnectedRoute exact isProtected path="/about" component={About} />
        <ConnectedRoute exact isProtected path="/reviews" component={Reviews} />
        <ConnectedRoute path="*" component={404} />
      </Switch>
    </>
  );
}
